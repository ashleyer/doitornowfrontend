import React, { Component } from 'react'
import TasksModel from '../models/tasks'

import { Link } from 'react-router-dom'
import TaskCard from '../components/TaskCard'

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
    let tasksList = this.state.tasks.map((task, index) => {
      return (
        <Link to={`/games/${ game.id }`} key={index}>
          <GameCard  {...game} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All Games</h1>
        { this.state.games ? gameList : 'Loading...' }
      </div>
    );
  }
}

export default GameList;
