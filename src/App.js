import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import React from "react";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/timer">
                    {/* <Timer /> */}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
