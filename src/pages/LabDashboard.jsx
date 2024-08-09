import React, { useState, useEffect } from 'react';
import './LabDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const LabDashboard = () => {
    const navigate = useNavigate();
    const [laboratories, setLaboratories] = useState([]);
    const [isFormOpen, setFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const [location, setLocation] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHamburg, setHamburg] = useState(false);

    useEffect(() => {
        const getLaboratories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/labs');
                const data = await response.json();
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
        setLocation('');
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLogoChange = (e) => {
        setLogo(e.target.files[0]);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleAddLaboratory = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('LabName', name);
        formData.append('LabLogo', logo);
        formData.append('LabLocation', location);

        try {
            const response = await fetch('http://localhost:5000/api/labs', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const newLaboratory = await response.json();
                setLaboratories([...laboratories, newLaboratory]);
                handleCloseForm();
            } else {
                console.error('Failed to add laboratory');
            }
        } catch (error) {
            console.error('Error adding laboratory:', error);
        }
    };

    const handleHamburgerClick = () => {
        setHamburg(!isHamburg);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="lab-dashboard-container">
            <header className="lab-dashboard-header">
                <button className="hamburger-menu" onClick={handleHamburgerClick}>
                    <span className={`hamburger-bar ${isHamburg ? 'open' : ''}`}></span>
                    <span className={`hamburger-bar ${isHamburg ? 'open' : ''}`}></span>
                    <span className={`hamburger-bar ${isHamburg ? 'open' : ''}`}></span>
                </button>
                <h1 className="lab-dashboard-title">Laboratories</h1>
                <nav className={`lab-dashboard-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a onClick={handleHome}>Home</a>
                        </li>
                        <li>
                            <a onClick={handleSignOut}>Sign Out</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="lab-list-container">
                {laboratories.map(lab => (
                    <div key={lab.id} className="lab-item">
                        <img src={`data:image/png;base64,${Buffer.from(lab.LabLogo).toString('base64')}`} alt={`${lab.LabName} Logo`} />
                        <h3>{lab.LabName}</h3>
                        <p>{lab.LabLocation}</p>
                        <button onClick={() => handleLab(lab.id)}>View Assets</button>
                    </div>
                ))}
            </div>
            <button className="add-lab-button" onClick={handleOpenForm}>
                <FontAwesomeIcon icon={faPlus} /> Add New Laboratory
            </button>

            {isFormOpen && (
                <div className="lab-form-overlay">
                    <div className="lab-form-container">
                        <h2>Add New Laboratory</h2>
                        <form onSubmit={handleAddLaboratory}>
                            <label>
                                Laboratory Name:
                                <input type="text" value={name} onChange={handleNameChange} required />
                            </label>
                            <label>
                                Laboratory Logo:
                                <input type="file" onChange={handleLogoChange} accept="image/*" />
                            </label>
                            <label>
                                Laboratory Location:
                                <input type="text" value={location} onChange={handleLocationChange} required />
                            </label>
                            <div className="lab-form-buttons">
                                <button type="submit">Add Laboratory</button>
                                <button type="button" onClick={handleCloseForm}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
