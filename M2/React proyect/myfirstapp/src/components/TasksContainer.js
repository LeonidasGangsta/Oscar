import React, { Component } from 'react'
import TaskComponent from './TaskComponent'

class TasksComponent extends Component {
    render() {
        return this.props.tasks.map(task => 
        <TaskComponent 
        task={task} 
        key={task.id} 
        delete={this.props.delete} 
        checkTask={this.props.checkTask}
        /> )
    }
}

export default TasksComponent;