import './App.css'
import FormTotalSearch from './components/UI/organisms/sch'

function App() {
    return (
        <div className="App">
            <div id="container" role="main">
                <div className="column_left">
                    <div>
                        <FormTotalSearch />
                    </div>
                </div>
                <div className="column_right">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default App
