import 'antd/dist/antd.css';
import './App.css';
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProjectDetail from "./Pages/ProjectDetail";
import Statistics from "./Pages/Statistics";
import Tables from "./Pages/Tables";




function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route exact path="/detail">
                        <ProjectDetail />
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics />
                    </Route>
                    <Route exact path="/tables">
                        <Tables />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
