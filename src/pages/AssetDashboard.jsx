import React, { useState } from 'react';
import './AssetDashboard.css';
import { useNavigate } from 'react-router-dom';

export const AssetDashboard = () => {
    const navigate = useNavigate();
    
    // State to manage which content is shown
    const [activeContent, setActiveContent] = useState(null);

    // Function to show images
    const showImages = () => {
        setActiveContent('images');
    };

    // Function to show URLs
    const showURLs = () => {
        setActiveContent('urls');
    };

    // Function to show Posters
    const showPosters = () => {
        setActiveContent('posters');
    };
    const handleSignOut = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        
        // Navigate back to the login page
        navigate('/login');
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        
        //Navigate back to landing page
        navigate('/land');
    }

    const handleManageAccess = () => {
        //Navigate to CAL
        navigate('/cal');

    }

    const addPosters = () => {
        setActiveContent('add_posters');
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
          setFormData((prevData) => ({
            ...prevData,
            imageFile: files[0],
          }));
        } else {
          setFormData((prevData) => ({
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
                <div className="nav-right">
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleManageAccess}>Manage User Access</button>
                    <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>

            <div className="header-container">
                <div className="head-left">
                    Laboratory Name
                </div>
                <div className="head-right">
                    <button className="button-style">Back</button>
                </div>
            </div>
            <div className="container-float">
                <div className="left-column">
                    <h3>Asset Library</h3>
                    <ul>
                        <li><button className="button-lib" onClick={showImages}>Images</button></li>
                        <li><button className="button-lib" onClick={showURLs}>URLs</button></li>
                        <li><button className="button-lib" onClick={showPosters}>Posters</button></li>
                        <li><button className="button-lib" onClick={addPosters}>Create Poster</button></li>
                    </ul>
                </div>
                <div className="right-column">
                    {/* Conditionally render content based on the activeContent state */}
                    {activeContent === 'images' && 
                    
                        <div class="grid-container">
                            <div class="grid-item">
                                <div class="item-card-container">
                                    <div class="item-card">
                                        <img class="item-card-pic" src="ds.png" alt="Lab 1 Image"></img>
                                        <div class="item-card-body">
                                            <h4 class="item-card-title">Image1.png</h4>
                                            <a href="#" class="item-btn">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="grid-item">
                            <div class="item-card-container">
                                <div class="item-card">
                                    <img class="item-card-pic" src="ds.png" alt="Lab 2 Image"></img>
                                    <div class="item-card-body">
                                        <h4 class="item-card-title">Image2.png</h4>
                                        <a href="#" class="item-btn">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                    {activeContent === 'urls' && (
                        <div className="url-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="table-left">Link</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-left">https://chatgpt.com/</td>
                                        <td>SAMPLE</td>
                                        <td><button className="button-style">Delete</button></td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeContent === 'posters' && 
                    <div class="grid-container">
                    <div class="grid-item">
                        <div class="item-card-container">
                            <div class="item-card">
                                <img class="item-card-pic" src="ds.png" alt="Lab 1 Image"></img>
                                <div class="item-card-body">
                                    <h4 class="item-card-title">Poster 1</h4>
                                    <a href="#" class="item-btn">Edit</a>
                                    <a href="#" class="item-btn">Download</a>
                                    <a href="#" class="item-btn">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div class="item-card-container">
                            <div class="item-card">
                                <img class="item-card-pic" src="ds.png" alt="Lab 2 Image"></img>
                                <div class="item-card-body">
                                    <h4 class="item-card-title">Poster 2</h4>
                                    <a href="#" class="item-btn">Edit</a>
                                    <a href="#" class="item-btn">Download</a>
                                    <a href="#" class="item-btn">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    }

                {activeContent === 'add_posters' && 
                     
                        <form className="form" onSubmit={handleSubmit}>
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
                            <label className="form-label">Laboratory:</label>
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