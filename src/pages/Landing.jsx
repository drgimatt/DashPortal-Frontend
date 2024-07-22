import './Landing.css';
import myImage from '../assets/landing-logo.png';
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('./Login'); // Update with the actual route you want to navigate to
      };

    return (
        <div className="blue-background">
        <div className="white-container">
          <div className="row">
            <div className="column">
              <img src={myImage} alt="My Image" />
              <h1>Dashportal</h1>
            </div>
            <div className="column">
              <h2>DashPortal is a cutting-edge web application designed to streamline the creation of QR code documents for Dashlabs.ai.</h2>
              <button onClick={handleRedirect}>Login</button>
            </div>
          </div>
        </div>
      </div>
    );

}