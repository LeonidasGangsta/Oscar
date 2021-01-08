import React, { Component } from 'react'
import Actions from "./TaskActions";

class TaskComponent extends Component {
    render() {

        const {title, description} = this.props.task

        return (
            <div class='toDoItem'>
                <h1>{title}</h1>
                <p>{description}</p>
                <Actions/>
            </div>
        )
    }
}

export default TaskComponent;