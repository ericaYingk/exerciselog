import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

export const EditPage=({exerciseToEdit}) => {
  
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    
    const history = useHistory();

    const editExercise = async() => {
        const editedExercise = {name, reps, weight, unit, date};
        /* fetch to edit data for exercise with _id */
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {'Content-Type': 'application/json',}
        });
        if (response.status === 200){
            alert('Successfully edited the exercise!');
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        } 
        /* redirect to homepage */
        history.push('/');

    }
    return (
        <div>
            <h2>Edit Exercise</h2>
            <p>You can edit the following exercise and click Save button to update</p>
            <input 
                type="text"
                value={name} 
                onChange={e => setName(e.target.value)}/> 
            <input 
                type="number"
                value={reps} 
                onChange={e => setReps(e.target.value)}/>  
            <input 
                type="number"
                value={weight} 
                onChange={e => setWeight(e.target.value)}/>     
            <input 
                type="text"
                value={unit} 
                onChange={e => setUnit(e.target.value)}/> 
            <input 
                type="text"
                value={date} 
                onChange={e => setDate(e.target.value)}/> 
            <br/> 
            <button onClick={editExercise}> Save </button>
        </div>
    );
}

export default EditPage;