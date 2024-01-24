import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppBar,Drawer,List,ListItem,ListItemText,useMediaQuery} from '@mui/material';
import './App.css';

import Navbar from './Assets/Navbar';
import ChampionsClub from './Pages/ChampionsClub';
import SingleGame from './Pages/SingleGame';
import SingleSeason from './Pages/SingleSeason';
import Career from './Pages/Career';
import H2H from './Pages/H2H';
import Home from './Pages/Home';
import Readmore from './Pages/readmore';


function App() {
 const isMobile = useMediaQuery('(max-width:600px)');

 return (
    <Router>
     <div>
        <Navbar isMobile={isMobile} />
          <Routes>
            <Route path="/Home" element={<Home />} />
         {  /* <Route path="/ChampionsClub" element={<ChampionsClub />} /> 
            <Route path="/SingleGame" element={<SingleGame />} /> */
         }
            <Route path="/SingleSeason" element={<SingleSeason />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/H2H" element={<H2H />} />
            <Route path="/Readmore" element={<Readmore />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;