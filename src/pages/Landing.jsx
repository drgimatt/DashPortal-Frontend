import './Landing.css';
import myImage from '../assets/landing-logo.gif';
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    
  
    const root = document.querySelector(':root');
    root.style.setProperty('--padding', '0rem');

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/login'); // Update with the actual route you want to navigate to
      };

    return (

        <div className="blue-background" >
        <div className="white-container">
          <div className="row">
            <div className="column">
              <img src={myImage} alt="My Image" style={{textAlign: 'center', paddingLeft: '5%'}}/>
              <h1>Dashportal</h1>
            </div>
            <div className="column" style={{padding: '10%'}}>
              <h2>DashPortal is a cutting-edge web application designed to streamline the creation of QR code documents for Dashlabs.ai.</h2>
              <button onClick={handleRedirect} style={{margin: '5%'}}>Login</button>
            </div>
          </div>
        </div>
      </div>
    );

}