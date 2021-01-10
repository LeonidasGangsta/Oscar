import React, { Component } from "react";
import './styles/dist/TaskActions.css'
import PropTypes from 'prop-types'

class TaskActions extends Component {

    StyleCompleted() {
        return {
            fontWeight: 'bold',
        }
    }

    render() {
        return (
            <div className='Actions'>
                <span style={this.props.done ? this.StyleCompleted() : null }>
                    {this.props.done ? 'Task done!' : 'Pending...'}
                    <input type='checkbox' checked={this.props.done} onChange={this.props.checkTask.bind(this, this.props.id)}></input></span>
                <button onClick={this.props.delete.bind(this, this.props.id)} >Delete task</button>
            </div>
        )
    }
}

TaskActions.propTypes = {
    done: PropTypes.bool.isRequired
}

export default TaskActions;