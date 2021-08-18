import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SelectTab from './components/pages/SelectTab'
import TotalSearch from './components/pages/TotalSearch'
import Equipment from './components/pages/Equipment'

function App() {
    return (
        <div className="App">
            <div id="container" role="main">
                <div className="column_left">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/select" component={SelectTab} />
                            <Route
                                exact
                                path="/search"
                                component={TotalSearch}
                            />
                            <Route
                                exact
                                path="/equipment"
                                component={Equipment}
                            />
                            <Redirect to="/home" />
                        </Switch>
                    </Router>
                </div>
                <div className="column_right">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default App
