import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>
);
}

export default App;