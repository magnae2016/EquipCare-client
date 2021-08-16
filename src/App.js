import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Equipment from './components/pages/Equipment'

function App() {
    return (
        <div className="App">
            <div id="container" role="main">
                <div className="column_left">
                    <Router>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Redirect to="/home" />
                        <Switch>
                            <Route path="/equipment" component={Equipment} />
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
