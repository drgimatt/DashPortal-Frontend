import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { AssetDashboard } from './pages/AssetDashboard';
import { LabDashboard } from './pages/LabDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/assetdash' element={<AssetDashboard/>} />
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/labdash' element={<LabDashboard/>} />
        </Routes>
    </Router>
);
}

export default App;