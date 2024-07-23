import './Landing.css';

export const PageNotFound = () => {
    return (
        <div class="container">
        <h1 style={{ color: 'blue', fontWeight: 'bold', fontSize: '100px',paddingBottom:'12px', fontFamily: 'LeagueSpartan-Bold', textAlign: 'center'}}>404</h1>
        <p style={{ color: 'white' }}>Oops! The page you are looking for cannot be found.</p>
        <a href="/" class="home-link">Go back to Home</a>
        </div>
    );
}