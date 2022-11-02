import React, { Component } from 'react'

export class TaskList extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      // <div>
      //   <ul className="list-group">
      //   <li className="list-group-item">{this.props.task} </li>     
      //   </ul>
      // </div>

      <li>{this.props.task}</li>
    )
  }
}

export default TaskList