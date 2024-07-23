import React, { useState } from 'react';
import './AssetDashboard.css';


export const AssetDashboard = () => {
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

    return (
        <div className="main-background">
            <div className="navigation">
                <div className="nav-left">DashPortal</div>
                <div className="nav-right">
                    <button className="nav-button">Home</button>
                    <button className="nav-button">Sign Out</button>
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
                </div>
            </div>
        </div>
    );
};