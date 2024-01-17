import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../firebase';
import Header from '../Assets/Header.js';


const columns = [
  //{ field: 'id', headerName: 'ID', width: 70 },
  {field: 'manager', headerName: 'Manager', width: 200 },
  {field: 'gamesplayed',headerName: 'Games Played',type: 'number',width: 125},
  {field: 'wins',headerName: 'Wins',type: 'number',width: 70 },
  {field: 'losses',headerName: 'Losses',type: 'number',width: 70 },
  {field: 'winperc',headerName: 'Winning %',type: 'number',width: 100,
  valueGetter: (params) =>
    params.row.wins && params.row.gamesplayed
    ? params.row.wins / params.row.gamesplayed
    : null,
  },
  {field: 'totpointsfor',headerName: 'Points For (Total)',type: 'number',width: 150},
  {field: 'avgpointsfor',headerName: 'PF/Game',type: 'number',width: 150,
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsfor / params.row.gamesplayed
      : null,
  },
  {field: 'totpointsagainst',headerName: 'Points Against (Total)',type: 'number',width: 150},
  {field: 'avgpointsagainst',headerName: 'PA/Game',type: 'number',width: 150,
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsagainst / params.row.gamesplayed
      : null,
  },

];

export default function CareerRecords() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData('SeasonStats');
        console.log('Raw data from Firebase:', result);
    
        if (result && result.SeasonStats) {
          // Group data by manager
          const groupedData = result.SeasonStats.reduce((acc, row) => {
            const managerKey = row.manager;
            if (!acc[managerKey]) {
              acc[managerKey] = {
                id: managerKey,
                manager: managerKey,
                gamesplayed: 0,
                losses: 0,
                totpointsagainst: 0,
                totpointsfor: 0,
                wins: 0,
              };
            }
    
            // Sum up the values
            acc[managerKey].gamesplayed += row.gamesplayed;
            acc[managerKey].losses += row.losses;
            acc[managerKey].totpointsagainst += row.totpointsagainst;
            acc[managerKey].totpointsfor += row.totpointsfor;
            acc[managerKey].wins += row.wins;    
            return acc;
          }, {});
    
          // Convert the object values back to an array
          const flattenedRows = Object.values(groupedData);
          console.log('Processed data:', flattenedRows);
          setData(flattenedRows);
        } else {
          console.error('Invalid data structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the fetchData function

  }, []); // The empty dependency array ensures that useEffect runs only once, similar to componentDidMount

  return (
    <div>
        <Header label="Career Records" />
        <DataGrid
          rows={data} // Use the fetched data instead of the static 'rows'
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 25 }, }, 
          sorting: { sortModel: [{ field: 'avgpointsfor', sort: 'desc' }], }, }} 
          pageSizeOptions={[25, 50]} /> </div>
        
        ); }