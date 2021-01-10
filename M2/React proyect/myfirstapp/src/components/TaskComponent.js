import React, { Component } from 'react'
import Actions from "./TaskActions";
import './styles/dist/TaskComponent.css';
import PropTypes from 'prop-types';

class TaskComponent extends Component {

    CompletedTask() {
        return {
            textDecoration: 'line-through',
        }
    }

    render() {

        const {id, title, description, done} = this.props.task

        return (
            <div className='toDoItem' key={id}>
                <h1>{title}</h1>
                <p style={done ? this.CompletedTask() : null}>{description}</p>
                <Actions done={done} id={id} delete={this.props.delete} checkTask={this.props.checkTask}/>
            </div>
        )
    }
}

TaskComponent.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskComponent;