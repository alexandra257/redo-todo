import React from 'react';

function AddTask() {


    return (
        <div className="row input-group mx-auto m-3">
            <input type="text" className="form-control" placeholder="Enter your task here..." />
            <div className="input-group-append ">
                <button className="btn btn-outline-secondary" type="button">Add</button>
            </div>
            <div className="row input-group form-inline mx-auto m-3 p-1 ">
                <p className="my-auto ">Date Due: </p>
                <input type="date" className="ml-3"></input>
                <p className="ml-3 my-auto ">Time Due: </p>
                <input type="time" className="ml-3"></input>
            </div>
        </div>


    );

}

export default AddTask;
