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
                        Laboratory Name
                    </div>
                    <div class="head-right">
                        <button class="button-style">Back</button>
                    </div>
                </div>
                <div class="container-float">
                    <div class="left-column">
                        <h3>Asset Library</h3>
                        <ul>
                            <li><button class="button-lib">Images</button></li>
                            <li><button class="button-lib">URLs</button></li>
                        </ul>
                    </div>
                    <div class="right-column">

                    </div>
                </div>
            </div>
        </div>
    )

}