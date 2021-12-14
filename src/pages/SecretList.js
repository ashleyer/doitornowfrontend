import React, { Component } from 'react'
import SecretModel from '../models/secretModel'

import { Link } from 'react-router-dom'
import SecretCard from '../components/SecretCard'
import './TaskSecretList.css'

class SecretList extends Component {
    state = {
        secrets: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        SecretModel.all().then(data => {
            this.setState({ secrets: data.secrets })
        })
    }

    render() {
        let SecretList = this.state.secrets.map((secret, index) => {
            return (
                <Link to={`/secrets/${secret.id}`} key={index}>
                    <SecretCard  {...secret} />
                </Link>
            )
        })

        return (
            <div>
                <h1>I am Secret List</h1>
                {this.state.secrets ? SecretList : 'Loading...'}
            </div>
        );
    }
}

export default SecretList;
