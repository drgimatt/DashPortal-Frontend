import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { CAL } from './pages/CAL';
import { AssetDashboard } from './pages/AssetDashboard';
import { LabDashboard } from './pages/LabDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/land' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/asset' element={<AssetDashboard/>} />
          <Route path='/cal' element={<CAL/>} />
          <Route path='*' element={<PageNotFound/>} />
          <Route path='' element={<LabDashboard/>} />
        </Routes>
    </Router>
);
}

export default App;