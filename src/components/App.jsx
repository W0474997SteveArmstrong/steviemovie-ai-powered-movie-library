// main application.
// Every single component is contained within this App component
// rafce shorthand to create a react functional component named App

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movies, MovieInformation, Profile, NavBar } from './index';
import { StyledDiv, StyledMain, StyledToolbar } from './styles';

const App = () => (
  <StyledDiv>
    <CssBaseline />
    <NavBar />
    <StyledMain>
      <StyledToolbar />
      <Routes>
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/" element={<Movies />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </StyledMain>
  </StyledDiv>
);

export default App;
