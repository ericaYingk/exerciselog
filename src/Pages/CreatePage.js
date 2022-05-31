import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    
    const history = useHistory();
    
    const addExercise = async() => {
        const newExercise = {name, reps, weight, unit, date};
        /* fetch to add data to exercises collection */
        const response = await fetch(`https://exerciselog-node-server-ykunle.herokuapp.com/exercises`, {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {'Content-Type': 'application/json',}
        });
        if (response.status === 201){
            alert('Successfully added the exercise!');
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        } 
        /* redirect to homepage */
        history.push('/');

    }
    return (
        <div>
            <h2>Add Exercise</h2>
            <p>Enter properties to create new exercise. </p>
            <input 
                type="text"
                placeholder="Enter name"
                value={name} 
                onChange={e => setName(e.target.value)}/> 
            <input 
                type="number"
                placeholder="Enter reps"
                value={reps} 
                onChange={e => setReps(e.target.value)}/>  
            <input 
                type="number"
                placeholder="Enter weight"
                value={weight} 
                onChange={e => setWeight(e.target.value)}/>     
            <input 
                type="text"
                placeholder="Unit (lbs/kgs)"
                value={unit} 
                onChange={e => setUnit(e.target.value)}/> 
            <input 
                type="text"
                placeholder="Date MM-DD-YY"
                value={date} 
                onChange={e => setDate(e.target.value)}/>
            <br/>  
            <button onClick={addExercise}> Add </button>
        </div>
    );
}

export default CreatePage;