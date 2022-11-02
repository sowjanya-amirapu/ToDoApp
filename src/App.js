import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TaskList from "./TaskList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
    console.log(this.state.task);
  };

  handleAddTask = () => {
    console.log("task set to empty");
    this.state.taskArray.push(this.state.task);
    this.setState({ task: "" });

    console.log(this.state.taskArray, "taskArray");

    //empty the text field
    //add the task below

    // const myTasks = this.state.taskArray

    // myTasks.map((task) => {

    // })
  };

  render() {
    console.log(this.state.task);
    return (
      <>
        <h1>ToDo List</h1>
        <fieldset>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              TASK
            </span>
            <input
              value={this.state.task}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="New Task"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button onClick={this.handleAddTask} className="btn btn-info m-2">
            Add Task
          </button>
        </fieldset>

        <button className="btn btn-info m-2">All List</button>
        <button className="btn btn-info m-2">Done List</button>
        <button className="btn btn-info m-2">ToDo List</button>
        {/* <TaskList
        task = {this.state.task}
        
      /> */}
        <ul>
          {this.state.taskArray.map((myTask) => {
            return <TaskList task ={myTask} />;
          })}
        </ul>
      </>
    );
  }
}

export default App;
