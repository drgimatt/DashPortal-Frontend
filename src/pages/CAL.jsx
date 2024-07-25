import './CAL.css';
import { useNavigate } from 'react-router-dom';

export const CAL = () => {
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

    const handleManageAccess = () => {
        //Navigate to CAL
        navigate('/cal')

    }

    return (
        <div class="main-background">
            <div class="navigation">
                <div class="nav-left">DashPortal</div>
                <div class="nav-right">
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleManageAccess}>Manage User Access</button>
                    <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>

                <div class="header-container">
                    <div class="head-left">
                        <h1>Laboratory Name</h1>
                    </div>
                    <div class="head-right">
                        <button class="button-style">Back</button>
                    </div>
                </div>
                <div class="table-container">
                    <table>
                        <tr>
                            <th class="table-left">Email Address</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        {/* Loop database for access list */}
                        <tr>
                            <td class="table-left">User1@dashlabs.ai</td>
                            <td>User</td>
                            <td><button class="button-style">Delete</button></td>
                        </tr>
                        {/* ----------------------------- */}
                    </table>
            </div>
        </div>
    )
}