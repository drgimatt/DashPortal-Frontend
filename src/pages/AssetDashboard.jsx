import React, { useState, useEffect } from 'react';
import './AssetDashboard.css';
import { useNavigate } from 'react-router-dom';

export const AssetDashboard = () => {
    const navigate = useNavigate();
    const [activeContent, setActiveContent] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Set initial state of activeContent
    useEffect(() => {
        setActiveContent('posters');
    }, []); // Empty dependency array ensures this runs only once

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Function to handle viewport size changes
    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    // Set up event listener on component mount and remove it on unmount
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
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

    const showPosters = () => {
        setActiveContent('posters');
    };

    const addPosters = () => {
        setActiveContent('add_posters');
    };

    const addQR = () => {
        setActiveContent('add_qr');
    };

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        days: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        department: '',
        name: '',
        labName: '',
        link: '',
      });

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        if (type === 'file') {
          setFormData(prevData => ({
            ...prevData,
            imageFile: files[0],
          }));
        } else {
          setFormData(prevData => ({
            ...prevData,
            [type === 'checkbox' ? 'days' : name]: type === 'checkbox' ? { ...prevData.days, [name]: checked } : value,
          }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="main-background">
            <div className="navigation">
                <div className="nav-left">DashPortal</div>
                <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
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
                <div className="head-left">
                    Laboratory Name
                </div>
                <div className="head-right">
                    <button onClick={handleBack} style={{ backgroundColor: 'white', color: 'black' }}>Back</button>
                </div>
            </div>
            <div className="container-float">
                <div className="left-column">

                <ul class="button-list">
                    <li><button class="button-lib side-button" onClick={showPosters}>Poster Library</button></li>
                    <li><button class="button-lib side-button" onClick={addQR}>Create QR</button></li>
                    <li><button class="button-lib side-button" onClick={addPosters}>Create Poster</button></li>
                </ul>

                </div>
                <div className="right-column">
                    {activeContent === 'posters' && 
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="item-card-container">
                                <div className="item-card">
                                    <img className="item-card-pic" src="ds.png" alt="Poster 1" />
                                    <div className="item-card-body">
                                        <h4 className="item-card-title">Poster 1</h4>
                                        <a href="#" className="item-btn">View</a>
                                        <a href="#" className="item-btn">Download</a>
                                        <a href="#" className="item-btn">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-card-container">
                                <div className="item-card">
                                    <img className="item-card-pic" src="ds.png" alt="Poster 2" />
                                    <div className="item-card-body">
                                        <h4 className="item-card-title">Poster 2</h4>
                                        <a href="#" className="item-btn">Edit</a>
                                        <a href="#" className="item-btn">Download</a>
                                        <a href="#" className="item-btn">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                    {activeContent === 'add_qr' &&
                        <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="form-label">Name:</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Link:</label>
                          <input
                            type="url"
                            name="link"
                            value={formData.link}
                            onChange={handleChange}
                            required
                            className="form-input"
                          />
                        </div>
                        <button type="submit" className="form-button">Submit</button>
                      </form>
                    }

                    {activeContent === 'add_posters' && 
                        <form className="form" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label className="form-label">Personnel:</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="form-input"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Department:</label>
                            <input
                              type="text"
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              required
                              className="form-input"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Upload Photo:</label>
                            <input
                                type="file"
                                name="imageFile"
                                accept="image/*"
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Schedule:</label>
                            <div className="form-checkbox-group">
                                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                                <div key={day} className="form-checkbox">
                                <input
                                    type="checkbox"
                                    name={day}
                                    checked={formData.days[day]}
                                    onChange={handleChange}
                                />
                                <label className="form-checkbox-label">{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                                </div>
                                    ))}
                          </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Link:</label>
                            <input
                              type="url"
                              name="link"
                              value={formData.link}
                              onChange={handleChange}
                              required
                              className="form-input"
                            />
                          </div>
                          <button type="submit" className="form-button">Submit</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};
