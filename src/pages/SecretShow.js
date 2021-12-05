import React, { Component } from 'react';
import SecretModel from '../models/secretModel';
import './TaskSecretShow.css'

import SecretCard from '../components/SecretCard'

class SecretShow extends Component {
    state = {
        secret: {},
        currentSecret: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        SecretModel.show(this.state.currentSecret).then(data => {
            this.setState({ secret: data.secret })
        })
    }

    render() {
        return (
            <div>
                <SecretCard {...this.state.secret} />
            </div>
        );
    }
}

export default SecretShow;
