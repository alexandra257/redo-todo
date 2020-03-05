import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';

class Task extends React.Component {

    getStyle = () => {
        return {
            background: 'white',
            padding: '10px',
            marginTop: '10px',
            marginBottom: '10px',
            borderBottom: '1px #ccc solid',

            textDecoration:
                this.props.task.completed ? 'line-through' : 'none',

            color:
                this.props.task.completed ? '#5b8c5a' : 'grey'
        }
    }

    compButtonStyle = () => {
        return {
            color: this.props.task.completed ? '#5b8c5a' : 'grey'
        }
    }

    starButtonStyle = () => {
        return {
            color: this.props.task.starred ? '#feb72b' : 'grey'
        }
    }

    render() {
        const DeleteButton = styled(DeleteForeverIcon)({
            color: '#FE6B8B'
        });

        //destructuring
        const { id, description } = this.props.task;

        return (
            <div className="row mx-auto rounded" style={this.getStyle()}>
                <IconButton className="col-1 d-flex align-self-left" aria-label="star" onClick={() => this.props.markStar(id)}>
                    <StarIcon style={this.starButtonStyle()} />
                </IconButton>

                <div className="col-9 d-flex align-self-center"> {description}</div>

                <IconButton
                    className="col-1 d-flex align-self-right"
                    aria-label="tick"
                    onClick={() => this.props.markComplete(id)}
                >

                    <AssignmentTurnedInIcon style={this.compButtonStyle()} />
                </IconButton>

                <IconButton className="col-1 d-flex align-self-right" aria-label="bin" onClick={() => this.props.markDelete(id)}><DeleteButton /></IconButton>
            </div>
        );
    }
}

//telling React to expect an object when a task is recieved
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;
