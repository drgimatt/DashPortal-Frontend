import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { CAL } from './pages/CAL';
import { AssetDashboard } from './pages/AssetDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/land' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<AssetDashboard/>} />
          <Route path='/cal' element={<CAL/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </Router>
);
}

export default App;