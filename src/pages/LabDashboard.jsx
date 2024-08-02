import React, { useState, useEffect } from 'react';
import './LabDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { fetchLaboratories } from '../services/api';

export const LabDashboard = () => {
    const navigate = useNavigate();
    const [laboratories, setLaboratories] = useState([]);
    const [isFormOpen, setFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburg, setHamburg] = useState(false);

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

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Function to handle viewport size changes
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
            setHamburg(false);
        } else {
            setHamburg(true);
        }
    };

    // Function to handle scroll event
    const handleScroll = () => {
        console.log("Scroll event detected");
        if (window.scrollY > 0 && isMenuOpen) {
            console.log("Closing menu due to scroll");
            setIsMenuOpen(false);
        }
    };

    // Set up event listeners on component mount and remove them on unmount
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]); // Add isMenuOpen to dependency array to re-attach listener if it changes

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
        navigate('/land');
    };
    
    const handleLab = (labId) => {
        navigate(`/asset/${labId}`);
    };

    const handleOpenForm = () => {
        setFormOpen(true);
    };

    const handleCloseForm = () => {
        setFormOpen(false);
        setName('');
        setLogo(null);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLogoChange = (e) => {
        setLogo(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, logo });
    };

    return (
        <div className="main-background">
            <div className="navigation">
                <div className="nav-left">DashPortal</div>
                <div className={`nav-right ${isMenuOpen ? 'active' : 'hidden'}`}>
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
                </div>
                <div className={`nav-right ${!isHamburg ? 'active' : 'hidden'}`}>
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
                </div>
                <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            </div>
            <div className="header-container">
                <div className="head-left">Laboratories</div>
                <div className="head-right">
                    <button className="plus-icon-button" onClick={handleOpenForm}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="container-float">
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

            {/* Popup Form */}
            {isFormOpen && (
                <div className="popup-form-overlay">
                    <div className="popup-form-container">
                        <button className="close-form-button" onClick={handleCloseForm} style={{color:'black'}}>×</button>
                        <form className="form" onSubmit={handleSubmit}>
                            <h2 className="head-left" style={{textAlign: 'center'}}>Add Laboratory</h2>
                            <div className="form-group">
                                <label className="form-label">Laboratory Name:</label>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                    placeholder="Enter laboratory name" 
                                    required 
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Laboratory Logo:</label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleLogoChange} 
                                    required 
                                    className="form-input"
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
