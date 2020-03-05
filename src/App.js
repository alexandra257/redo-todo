import React from 'react';
import './App.css';
import Header from './components/Header';
import DateTime from './components/DateTime';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskCount from './components/TaskCount';


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: 'this is a task', completed: false, starred: false },
      { id: 2, description: 'this is another task', completed: false, starred: false },
      { id: 3, description: 'this is a third task', completed: false, starred: false },
      { id: 4, description: 'this is a fourth task', completed: false, starred: false },
    ]
  }


  markComplete = id => {
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


  markStar = id => {
    console.log(id)

    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.starred = !task.starred
        }
        return task;
      })
    });
  }

  markDelete = id => {
    console.log(id)
    //using spread to make a new copy of the array
    //filtering out all of the tasks that do not have a matching id
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] });
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

        <div className="row">
          <div className="col-lg-6 addTask rounded">
            <AddTask className="" />
          </div>
          <div className="d-md-block"></div>

          <div className="col-lg-6 taskList rounded">
            <div className="mt-3"><TaskCount taskCount={this.state.tasks.length} /></div>
            <TaskList
              tasks={this.state.tasks}
              markComplete={this.markComplete}
              markStar={this.markStar}
              markDelete={this.markDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
