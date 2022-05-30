import React from 'react';
import NavPage from '../Components/Navigation';
import ExerTable from '../Components/Table';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'delete'});
        if (response.status === 204) {
            const getResponse = await fetch(`/exercises`);
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with id=${_id}, status code = ${response.status}`)
        }
    } 

    const history = useHistory();

    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit");
    }

    const loadExercises = async() => {
        const response = await fetch('https://exerciselog-node-server-ykunle.herokuapp.com', {method:"get"});
        const exercises = await response.json();
        setExercises(exercises);
    } 

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
          <h2>Exercise Tracker</h2>
          <p>Following table displays all the exercises. <br/>
             To edit: click the edit icon. <br/>
             To delete: click the delete icon. <br/>
             To add: click the bottom link. </p>
          <ExerTable 
              exercises={exercises} 
              onEdit = {onEdit} 
              onDelete ={onDelete}></ExerTable>
          <NavPage dest={"CreatePage"}></NavPage>
        </>
    );
}

export default HomePage;