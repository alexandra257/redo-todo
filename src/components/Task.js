import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Task extends React.Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
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


        return (
            <div className="row mx-auto m-3 rounded" style={this.getStyle()}>
                <div className="col-1"><StarButtonOutline /></div>
                <div className="col-9"> <p className="my-auto">{this.props.task.description}</p></div>
                <div className="col-1"><CompleteButton /></div>
                <div className="col-1"><DeleteButton /></div>
            </div>
        );
    }
}

//telling React to expect an object when a task is recieved
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;
