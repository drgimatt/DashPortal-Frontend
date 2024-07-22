import './AssetDashboard.css';
export const AssetDashboard = () => {

    return (
        <div class="main-background">
            <div class="navigation">
                <div class="nav-left">DashPortal</div>
                <div class="nav-right">
                    <button class="nav-button">Home</button>
                    <button class="nav-button">Sign Out</button>
                </div>
            </div>
            <div class="container">
                <div class="header-container">
                    <div class="head-left">
                        <img src="samp" alt="Lab Logo"></img>
                        <h1>Laboratory Name</h1>
                    </div>
                    <div class="head-right">
                        <button class="button-style">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )

}