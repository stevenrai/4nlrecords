import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../firebase';
import Header from '../Assets/Header.js';
import '../App.css'


const defaultColumns = [
  //{ field: 'id', headerName: 'ID', width: 70 },
  {field: 'manager', headerName: 'Manager', width: 175, headerClassName: 'customtable-header' },
  {field: 'year', headerName: 'Year', type: 'number',width: 75, headerClassName: 'customtable-header' },
  {field: 'gamesplayed',headerName: 'GP',type: 'number',width: 75, headerClassName: 'customtable-header'},
  {field: 'wins',headerName: 'W',type: 'number',width: 75, headerClassName: 'customtable-header' },
  {field: 'losses',headerName: 'L',type: 'number',width: 75, headerClassName: 'customtable-header' },
  {field: 'winperc',headerName: 'W%',type: 'number',width: 75, headerClassName: 'customtable-header',
  valueGetter: (params) =>
    params.row.wins && params.row.gamesplayed
    ? params.row.wins / params.row.gamesplayed
    : null,
  },
  {field: 'totpointsfor',headerName: 'PF(Total)',type: 'number',width: 100, headerClassName: 'customtable-header'},
  {field: 'avgpointsfor',headerName: 'PF/Game',type: 'number',width: 100, headerClassName: 'customtable-header',
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsfor / params.row.gamesplayed
      : null,
  },
  {field: 'totpointsagainst',headerName: 'PA(Total)',type: 'number',width: 100, headerClassName: 'customtable-header'},
  {field: 'avgpointsagainst',headerName: 'PA/Game',type: 'number',width: 100, headerClassName: 'customtable-header',
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsagainst / params.row.gamesplayed
      : null,
  },

];

export default function SingleSeasonRecords() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData('SeasonStats');
        const isMobile = window.innerWidth <= 600;
        const updatedColumns = defaultColumns.map(column => {
        return { ...column, disableColumnMenu: isMobile };
        });
    setColumns(updatedColumns);

        console.log('Raw data from Firebase:', result);
    
        if (result && Array.isArray(result.SeasonStats)) {
          const flattenedRows = result.SeasonStats
            .filter(row => row !== null && typeof row === 'object')
            .map(row => ({ ...row }));
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
      <Header label="Season Records" />
      <div className="data-grid-container">
        <DataGrid
          rows={data} // Use the fetched data instead of the static 'rows'
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 }, }, 
          sorting: { sortModel: [{ field: 'avgpointsfor', sort: 'desc' }], }, }} 
          pageSizeOptions={[10, 25]} /> </div>
            </div>

        ); }