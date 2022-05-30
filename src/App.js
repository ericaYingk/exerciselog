import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EditPage from './Pages/EditPage';
import CreatePage from './Pages/CreatePage';
import {useState} from 'react';

function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState([]);
    return (
        <div className="App">
            <Router>
                <header className="App-header"> 
                <h1>Manage Exercises</h1>
                <Route path="/" exact>
                    <HomePage setExerciseToEdit={setExerciseToEdit}/>
                </Route>
                <Route path="/edit">
                    <EditPage exerciseToEdit={exerciseToEdit}/>
                </Route>
                <Route path="/create">
                    <CreatePage />
                </Route>
                </header>
            </Router>
        </div>
    );
}

export default App;
