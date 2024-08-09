import React, { useState, useEffect } from 'react';
import './AssetDashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PosterForm = ({ formData, handleChange, handleSubmit }) => (
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
            <label className="form-label">Schedule:</label>
            <div className="days-checkbox-group">
                {Object.keys(formData.days).map(day => (
                    <label key={day} className="form-label">
                        <input
                            type="checkbox"
                            name={day}
                            checked={formData.days[day]}
                            onChange={handleChange}
                            className="days-checkbox-input"
                        />
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                    </label>
                ))}
            </div>
        </div>
        <div className="form-group">
            <label className="form-label">QR Code:</label>
            <input
                type="text"
                name="qrCode"
                value={formData.qrCode}
                onChange={handleChange}
                required
                className="form-input"
            />
        </div>
        <button type="submit" className="form-button">Submit</button>
    </form>
);

const QRForm = ({ formData, handleChange, handleSubmit }) => (
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
);

export const AssetDashboard = () => {
    const navigate = useNavigate();
    const [activeContent, setActiveContent] = useState('posters');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburg, setHamburg] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        image: null,
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
        qrCode: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

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

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        if (type === 'file') {
            setFormData(prevData => ({
                ...prevData,
                image: files[0],
            }));
        } else if (type === 'checkbox') {
            setFormData(prevData => ({
                ...prevData,
                days: {
                    ...prevData.days,
                    [name]: checked,
                },
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formDataObj = new FormData();
        formDataObj.append('title', formData.title);
        formDataObj.append('department', formData.department);
        formDataObj.append('name', formData.name);
        formDataObj.append('labName', formData.labName);
        formDataObj.append('days', JSON.stringify(formData.days));
        if (formData.image) {
            formDataObj.append('image', formData.image);
        }
        if (activeContent === 'add_qr') {
            formDataObj.append('link', formData.link);
        }
        if (activeContent === 'add_posters') {
            formDataObj.append('qrCode', formData.qrCode);
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/posters', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log(response.data);  // Log the response to check its structure
    
            setFormData({
                title: '',
                image: null,
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
                qrCode: '',
            });
    
            const { pdfUrl } = response.data;
            if (pdfUrl) {
                window.open(pdfUrl, '_blank');
            } else {
                alert('Poster created successfully, but no PDF URL returned.');
            }
    
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form.');
        } finally {
            setLoading(false);
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
                    <button onClick={handleBack} className="back-button">Back</button>
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
                            {/* Fetch and display actual poster data from server */}
                        </div>
                    }

                    {activeContent === 'add_qr' && 
                        <QRForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                    }

                    {activeContent === 'add_posters' &&
                        <PosterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                    }
                </div>
            </div>
        </div>
    );
};
