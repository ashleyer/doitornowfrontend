import React, { Component } from 'react';
import taskModel from '../models/taskModel'

class NewTask extends Component {
  state = {
    title: '',
    detail: '',
    priority_rating: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    taskModel.create(this.state)
      .then(data => {
        this.props.history.push('/tasks')
      })
  }

  handleChange = (event) => {
    if (event.target.type !== "text") {
      this.setState({ completed: !this.state.completed })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>New Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Task:</label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title} />
          </div>
          <div className="form-input">
            <label htmlFor="detail">Task Details:</label>
            <input
              type="text"
              name="detail"
              onChange={this.handleChange}
              value={this.state.detail} />
          </div>
          <div className="form-input">
            <label htmlFor="priority_rating">Priority Rating</label>
            <input
              type="NumericInput"
              min={1}
              max={5}
              value={this.state.priority_rating} />
          </div>


          <input type="submit" value="Save!" />
        </form>
      </div>
    );
  }
}

export default NewTask;
