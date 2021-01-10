import './App.css';
import React from 'react';
import Tasks from './Sample/tasks.json';
import TaskModule from "./components/TasksContainer";
import Form from './components/AddTasks';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


class App extends React.Component {

  state = {
    tasks: Tasks
  }

  addTask = (title, description) => {
    let lastId = this.state.tasks.reduce((acc, current) => current.id)

    const newTask = {
      title: title,
      description: description,
      id: lastId + 1,
      done: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    let newTasksArray = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasksArray
    })
  }

  checkTask = (id) => {
    let newTasksArray = this.state.tasks.map(task => {
      if (id === task.id) {
        task.done = !task.done
        return task
      } else {
        return task
      }
    })
    this.setState({
      tasks: newTasksArray
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>To Do App</h1>
        <h4>by Oscar Torres</h4>
        <Router>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/add'>Add To Do's</NavLink>
          <Route path='/Add' render={() => {
            return <div className='Form'>
            <Form addTask={this.addTask} />
            </div>
          }}/>
          <Route path='/' render={() => {
            return <div className='Tasks'>
            <TaskModule tasks={this.state.tasks} delete={this.deleteTask} checkTask={this.checkTask} />
            </div>
          }}/>
        </Router>
      </div>
    )
  }
}


export default App;
