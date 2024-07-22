import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound"
export const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact>
                    <Landing />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Routes>
        </Router>
    );
}