import React, { useState, useEffect } from 'react';
import './AssetDashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AssetDashboard = () => {
    const navigate = useNavigate();
    const [activeContent, setActiveContent] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburg, setHamburg] = useState(false);

    useEffect(() => {
        setActiveContent('posters');
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
            setHamburg(false);
        } else {
            setHamburg(true);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

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
    };

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
                image: files[0],
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [type === 'checkbox' ? 'days' : name]: type === 'checkbox' ? { ...prevData.days, [name]: checked } : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('title', formData.title);
        formDataObj.append('image', formData.image);
        formDataObj.append('department', formData.department);
        formDataObj.append('name', formData.name);
        formDataObj.append('labName', formData.labName);
        formDataObj.append('link', formData.link);
        for (const [day, value] of Object.entries(formData.days)) {
            formDataObj.append(`days[${day}]`, value);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/posters', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Handle success (e.g., show a message or navigate to another page)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show an error message)
        }
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
                <div className="head-left">Laboratory Name</div>
                <div className="head-right">
                    <button onClick={handleBack} style={{ backgroundColor: 'white', color: 'black' }}>Back</button>
                </div>
            </div>
            <div className="container-float">
                <div className="left-column">
                    <ul className="button-list">
                        <li><button className="button-lib side-button" onClick={showPosters}>Poster Library</button></li>
                        <li><button className="button-lib side-button" onClick={addQR}>Create QR</button></li>
                        <li><button className="button-lib side-button" onClick={addPosters}>Create Poster</button></li>
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
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Lab Name:</label>
                                <input
                                    type="text"
                                    name="labName"
                                    value={formData.labName}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Days Available:</label>
                                <div className="checkbox-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="monday"
                                            checked={formData.days.monday}
                                            onChange={handleChange}
                                        />
                                        Monday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="tuesday"
                                            checked={formData.days.tuesday}
                                            onChange={handleChange}
                                        />
                                        Tuesday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="wednesday"
                                            checked={formData.days.wednesday}
                                            onChange={handleChange}
                                        />
                                        Wednesday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="thursday"
                                            checked={formData.days.thursday}
                                            onChange={handleChange}
                                        />
                                        Thursday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="friday"
                                            checked={formData.days.friday}
                                            onChange={handleChange}
                                        />
                                        Friday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="saturday"
                                            checked={formData.days.saturday}
                                            onChange={handleChange}
                                        />
                                        Saturday
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="sunday"
                                            checked={formData.days.sunday}
                                            onChange={handleChange}
                                        />
                                        Sunday
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="form-button">Submit</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};
