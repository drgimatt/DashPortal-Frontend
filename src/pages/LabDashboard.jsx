// src/components/LabDashboard.js
import React, { useState, useEffect } from 'react';
import './LabDashboard.css';
import { useNavigate } from 'react-router-dom';
import { fetchLaboratories } from '../services/api';

export const LabDashboard = () => {
    const navigate = useNavigate();
    const [laboratories, setLaboratories] = useState([]);

    useEffect(() => {
        const getLaboratories = async () => {
            try {
                const data = await fetchLaboratories();
                setLaboratories(data);
            } catch (error) {
                console.error('Error fetching laboratories:', error);
            }
        };

        getLaboratories();
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
        localStorage.removeItem('token');
        navigate('/land');
    }
    
    const handleLab = (labId) => {
        navigate(`/asset/${labId}`);
    }

    const handleManageAccess = () => {
        navigate('/cal')
    }

    return (
        <div className="main-background">
            <div className="navigation">
                <div className="nav-left">DashPortal</div>
                <div className="nav-right">
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleManageAccess}>Manage User Access</button>
                    <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
            <div className="header-container">
                <div className="head-left">
                    <h1>Laboratories</h1>
                </div>
                <div className="head-right">
                    <button className="button-style" onClick={handleBack}>Back</button>
                </div>
            </div>
            <div className="lab-container">
                <div className="grid-container">
                    {laboratories.map((lab) => (
                        <div className="grid-item" key={lab.LabID}>
                            <div className="item-card-container">
                                <div className="item-card">
                                    <img 
                                        className="item-card-pic" 
                                        src={lab.LabLogo} 
                                        alt={`${lab.LabName} Image`} 
                                    />
                                    <div className="item-card-body">
                                        <h4 className="item-card-title">{lab.LabName}</h4>
                                        <button className="item-btn" onClick={() => handleLab(lab.LabID)}>More Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}