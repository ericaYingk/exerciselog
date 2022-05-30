import React from 'react';
import ExerRow from './Row';

function ExerTable({exercises, onEdit, onDelete}) {
    return (
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Reps </th>
                    <th> Weight </th>
                    <th> Unit </th>
                    <th> Date </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                <ExerRow 
                    exercise={exercise}
                    onEdit={onEdit} 
                    onDelete={onDelete}
                    key={i}/>)}
            </tbody>
        </table>
    )
}

export default ExerTable