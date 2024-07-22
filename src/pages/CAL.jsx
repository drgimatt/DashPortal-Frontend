export const CAL = () => {
    return (
        <div class="container">
            <div class="header-lab">
                <h1>Get Laboratory Name from database</h1>
                <button>Back</button>
            </div>
            <div class="table-container">
                <table>
                    <tr>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    {/* Loop database for access list */}
                    <tr>
                        <td>User1@dashlabs.ai</td>
                        <td>User</td>
                        <td><button>Delete</button></td>
                    </tr>
                    {/* ----------------------------- */}
                </table>
                <button>Add New User</button>
            </div>
        </div>
    )
}