import './AssetDashboard.css';
export const AssetDashboard = () => {

    return(
        <div class="main-background">
            <div class="navigation">
                <div class="nav-left">DashPortal</div>
                <div class="nav-right">
                    <button class="nav-button">Home</button>
                    <button class="nav-button">Sign Out</button>
                </div>
            </div>
            <div class="header-lab">
                <h1>Get Laboratory Name from database</h1>
                <button>Back</button>
            </div>
            <div class="left-col">
                <ul>
                    <li>Assets</li>
                    <li>Layouts</li>
                    <li>Templates</li>
                    <li>Add new Assets</li>
                </ul>
            </div>
            <div class="right-col">
            </div>
        </div>



        

    )

}