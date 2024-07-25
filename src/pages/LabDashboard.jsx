import './LabDashboard.css';
import { useNavigate } from 'react-router-dom';

export const LabDashboard = () => {
    const navigate = useNavigate();

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
    
    const handleLab = () => {
        //Navigate to Assets Dashboard
        navigate('/asset');
    }

    const handleManageAccess = () => {
        //Navigate to CAL
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
                    <div className="grid-item">
                        <div className="item-card-container">
                            <div className="item-card">
                                <img className="item-card-pic" src="ds.png" alt="Lab 1 Image" />
                                <div className="item-card-body">
                                    <h4 className="item-card-title">Lab 1</h4>
                                    <button className="item-btn" onClick={handleLab}>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-card-container">
                            <div className="item-card">
                                <img className="item-card-pic" src="ds.png" alt="Lab 2 Image" />
                                <div className="item-card-body">
                                    <h4 className="item-card-title">Lab 2</h4>
                                    <button className="item-btn" onClick={handleLab}>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-card-container">
                            <div className="item-card">
                                <img className="item-card-pic" src="ds.png" alt="Lab 3 Image" />
                                <div className="item-card-body">
                                    <h4 className="item-card-title">Lab 5</h4>
                                    <button className="item-btn" onClick={handleLab}>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-card-container">
                            <div className="item-card">
                                <img className="item-card-pic" src="ds.png" alt="Lab 4 Image" />
                                <div className="item-card-body">
                                    <h4 className="item-card-title">Lab 4</h4>
                                    <button className="item-btn" onClick={handleLab}>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}