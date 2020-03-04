import React from 'react';
import './App.css';
import Header from './components/Header';
import DateTime from './components/DateTime';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: 'this is a task', completed: false, starred: false },
      { id: 2, description: 'this is another task', completed: false, starred: false },
      { id: 3, description: 'this is a third task', completed: false, starred: false },
    ]
  }


  markComplete = (id) => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task;

      })
    });
  }



  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="col">
            <Header />
          </div>
          <div className="col">
            <DateTime />
          </div>
        </div>

        <div className="row border border-dark">
          <div className="col border border-dark">
            <AddTask />
          </div>

          <div className="col border border-dark">
            <TaskList tasks={this.state.tasks} markComplete={this.markComplete} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
