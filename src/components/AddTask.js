import React from 'react';

function AddTask() {

    return (<div className="row mx-auto p-3 rounded">
        <h2>Add a task:</h2>
        <input className="form-control" type="text" placeholder="Enter your task here..." />

        <div className="row mt-3 form-inline mx-auto ">
            <p className="my-auto mr-1">Date Due: </p>
            <input type="date" className="mx-auto"></input>
            <p className="ml-1 mr-1 my-auto ">Time Due: </p>
            <input type="time" className="mx-auto"></input>
        </div>
        <div className="row form-group mt-4 ml-3">
            <label htmlFor="notes">Any extra notes?</label>
            <textarea className="form-control form-inline" id="notes" rows="3"></textarea>
            <button className="btn btn-outline-secondary d-flex align-self-end rounded" type="button">Add</button>
        </div>
    </div>
    );

}

export default AddTask;
