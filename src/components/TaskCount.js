import React from 'react';

class TaskCount extends React.Component {

    render() {

        if (this.props.taskCount === 0) {
            return <h3 className="m3">Congrats, you can relax! There are no tasks to do.</h3>
        } else {
            return (<div className="m-3"><h3>Tasks left: {this.props.taskCount}</h3></div>)
        }
    }
}

export default TaskCount;

