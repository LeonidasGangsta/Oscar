import './App.css';
import React from 'react'
import Tasks from './Sample/tasks.json'
import TaskModule from "./components/TasksComponent";

class App extends React.Component {

  state = {
    tasks: Tasks
  }


  render() {
    return (
      <div class='container'>
        <TaskModule tasks={this.state.tasks} />
      </div>
    )
  }
}


export default App;
