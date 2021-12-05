import React, { Component } from 'react'
import SecretModel from '../models/secretModel'

import { Link } from 'react-router-dom'
import SecretCard from '../components/SecretCard'
import './TaskSecretList.css'

class SecretsList extends Component {
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
        let secretsList = this.state.secrets.map((secret, index) => {
            return (
                <Link to={`/secrets/${secret.id}`} key={index}>
                    <SecretCard  {...secret} />
                </Link>
            )
        })

        return (
            <div>
                <h1>Secrets List</h1>
                {this.state.secrets ? secretsList : 'Loading...'}
            </div>
        );
    }
}

export default SecretsList;
