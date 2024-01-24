import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../firebase';
import Header from '../Assets/Header.js';

const columns = [
  //{ field: 'id', headerName: 'ID', width: 70 },
  {field: 'manager', headerName: 'Manager', width: 200 },
  {field: 'year', headerName: 'Year', type: 'number',width: 70 },
  {field: 'gamesplayed',headerName: 'Games Played',type: 'number',width: 125},
  {field: 'wins',headerName: 'Wins',type: 'number',width: 70 },
  {field: 'losses',headerName: 'Losses',type: 'number',width: 70 },
  {field: 'avgpointsfor',headerName: 'Points For (Per Game)',type: 'number',width: 200,
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsfor / params.row.gamesplayed
      : null,
  },
  {field: 'totpointsfor',headerName: 'Points For (Total)',type: 'number',width: 200},
  {field: 'avgpointsagainst',headerName: 'Points Against (Per Game)',type: 'number',width: 200,
    valueGetter: (params) =>
      params.row.totpointsfor && params.row.gamesplayed
      ? params.row.totpointsagainst / params.row.gamesplayed
      : null,
  },
  {field: 'totpointsagainst',headerName: 'Points Against (Total)',type: 'number',width: 200},


];


const rows = [ 
  { id: 1, manager: 'Steven Rai', year: '2012', gamesplayed: 14, wins: 10, losses: 4, totpointsfor: 1594, totpointsagainst: 1564},
  { id: 2, manager: 'Jesse Rai', year: '2012', gamesplayed: 14, wins: 11, losses: 3, totpointsfor: 1594, totpointsagainst: 1564}, 
];

export default function SingleGameRecords() { 
  return ( 
    <div>
      <Header label="Game Records" />
        <DataGrid
        className="desktop-padding"
          rows={rows} 
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 }, }, 
          sorting: { sortModel: [{ field: 'wins', sort: 'desc' }], }, }} 
          pageSizeOptions={[10, 25]} /> 
            </div>
); }