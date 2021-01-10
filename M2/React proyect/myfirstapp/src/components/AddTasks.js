import React, { Component } from 'react';
import './styles/dist/AddTasks.css';

export default class AddTasks extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = async (event) => {
        let title = event.target.title.value;
        let description = event.target.description.value;

        if (!title.length || !title.trim()) {
            alert('No has ingresado un nombre para la tarea.')
        } else {
            await this.setState({
                title: title,
                description: description
            })
            this.props.addTask(this.state.title, this.state.description)
        }

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Add a new task</h1>
                <input type='text' placeholder='Task to add...' name='title' required/>
                <br/>
                <textarea placeholder='Give a little description for the task...' name='description'/>
                <br/>
                <input type='submit' value='Add it!'/>
            </form>
        )
    }
}
