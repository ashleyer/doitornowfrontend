import React, { Component } from 'react'
import TaskModel from '../models/taskModel'

import { Link } from 'react-router-dom'
import TaskCard from '../components/TaskCard'
import './TaskSecretList.css'

class TasksList extends Component {
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
    let tasksList = this.state.tasks.map((task, index) => {
      return (
        <Link to={`/tasks/${ task.id }`} key={index}>
          <TaskCard  {...task} />
        </Link>
      )
    })

    return (
      <div>
        <h1>Tasks List</h1>
        { this.state.tasks ? tasksList : 'Loading...' }
      </div>
    );
  }
}

export default TasksList;
