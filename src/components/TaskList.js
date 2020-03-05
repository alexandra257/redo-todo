import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class TaskList extends React.Component {


    render() {

        //when we map through something, it creates a list. each item in the list requires a unique key
        //the key needs to be the first prop passed in to get rid of the error message 
        return this.props.tasks.map((task) => ( //for each todo that we map through, what do we want to show
            <div>
                <Task
                    key={task.id}
                    task={task}
                    markComplete={this.props.markComplete}
                    markStar={this.props.markStar}
                    markDelete={this.props.markDelete}
                />
            </div>
        ));
    }
}

//telling React to expect an array when a task is recieved
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TaskList;
