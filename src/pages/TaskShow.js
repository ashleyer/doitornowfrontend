import React, { Component } from 'react';
import TaskModel from '../models/taskModel';
import './TaskSecretShow.css'

import TaskCard from '../components/TaskCard'

class TaskShow extends Component {
  state = {
    task: {},
    currentTask: this.props.match.params.id
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TaskModel.show(this.state.currentTask).then(data => {
      this.setState({ task: data.task })
    })
  }

  render() {
    return (
      <div>
        <TaskCard {...this.state.task} />
      </div>
    );
  }
}

export default TaskShow;
