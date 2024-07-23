import './LabDashboard.css';

export const LabDashboard = () => {
    return (
        <div class="main-background">
            <div class="navigation">
                <div class="nav-left">DashPortal</div>
                <div class="nav-right">
                    <button class="nav-button">Home</button>
                    <button class="nav-button">Sign Out</button>
                </div>
            </div>
                <div class="header-container">
                    <div class="head-left">
                        <h1>Laboratories</h1>
                    </div>
                    <div class="head-right">
                        <button class="button-style">Back</button>
                    </div>
                </div>
                <div class="lab-container">
                    <div class="grid-container">
                        <div class="grid-item">
                            <div class="item-card-container">
                                <div class="item-card">
                                    <img class="item-card-pic" src="ds.png" alt="Lab 1 Image"></img>
                                    <div class="item-card-body">
                                        <h4 class="item-card-title">Lab 1</h4>
                                        <a href="#" class="item-btn">More Info</a>
                                    </div>
                                </div>
                            </div>
                         </div>
                    <div class="grid-item">
                        <div class="item-card-container">
                            <div class="item-card">
                                <img class="item-card-pic" src="ds.png" alt="Lab 2 Image"></img>
                                <div class="item-card-body">
                                    <h4 class="item-card-title">Lab 2</h4>
                                    <a href="#" class="item-btn">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div class="item-card-container">
                            <div class="item-card">
                                <img class="item-card-pic" src="ds.png" alt="Lab 3 Image"></img>
                                <div class="item-card-body">
                                    <h4 class="item-card-title">Lab 5</h4>
                                    <a href="#" class="item-btn">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div class="item-card-container">
                            <div class="item-card">
                                <img class="item-card-pic" src="ds.png" alt="Lab 4 Image"></img>
                                <div class="item-card-body">
                                    <h4 class="item-card-title">Lab 4</h4>
                                    <a href="#" class="item-btn">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}