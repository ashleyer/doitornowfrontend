import React, { Component } from 'react'
import TaskModel from '../models/taskModel'

import { Link } from 'react-router-dom'
import TaskCard from '../components/TaskCard'
import './TaskSecretList.css'

class TaskList extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TaskModel.all().then(data => {
      this.setState({ tasks: data.tasks})
    })
  }

  render() {
    let taskList = this.state.tasks.map((task, index) => {
      return (
        <Link to={`/tasks/${ task.id }`} key={index}>
          <TaskCard  {...task} />
        </Link>
      )
    })

    return (
      <div>
        <h1>Tasks List</h1>
        { this.state.tasks ? taskList : 'Loading...' }
      </div>
    );
  }
}

export default TaskList;
