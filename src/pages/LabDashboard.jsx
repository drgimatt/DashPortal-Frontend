import './CAL.css';

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
            <div class="container">
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
        </div>
    )
}