import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Task extends React.Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            marginTop: '10px',
            marginBottom: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.task.completed ?
                'line-through' : 'none'

        }
    }





    render() {

        const StarButtonOutline = styled(StarBorderIcon)({
            color: '#feb72b',
        });
        // const StarButtonFilled = styled(StarIcon)({
        //   color: '#feb72b',
        // });
        const CompleteButton = styled(DoneOutlineOutlinedIcon)({
            color: '#5b8c5a'
        });
        const DeleteButton = styled(DeleteForeverOutlinedIcon)({
            color: '#FE6B8B'
        });

        const { id, description } = this.props.task;

        return (
            <div className="row rounded" style={this.getStyle()}>
                <IconButton aria-label="star"><StarButtonOutline /></IconButton>
                <p> {description}</p>
                <IconButton aria-label="tick" onClick={() => this.props.markComplete(id)}><CompleteButton /></IconButton>
                <IconButton aria-label="bin"><DeleteButton /></IconButton>
            </div>
        );
    }
}

//telling React to expect an object when a task is recieved
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;
