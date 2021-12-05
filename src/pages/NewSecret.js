import React, { Component } from 'react';
import SecretModel from '../models/secretModel'

class NewSecret extends Component {
    state = {
        title: '',
        detail: '',
        recipient_email_contact: '',
        fluster_factor: false
    }

    handleSubmit = (event) => {
        event.preventDefault();

        SecretModel.create(this.state)
            .then(data => {
                this.props.history.push('/secrets')
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
                <h2>New Secret</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="title">Secret:</label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="detail">Details:</label>
                        <input
                            type="text"
                            name="detail"
                            onChange={this.handleChange}
                            value={this.state.detail} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="recipient_email_contact">Secret's Receiver</label>
                        <input
                            type="text"
                            name="recipient_email_contact"
                            onChange={this.handleChange}
                            value={this.state.recipient_email_contact} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="fluster_factor">Fluster Factor:</label>
                        <input
                            type="NumericInput"
                            id="rating"
                            min={1}
                            max={5}
                            value={this.state.fluster_factor} />
                    </div>

                    <input type="submit" value="Save!" />
                </form>
            </div>
        );
    }
}

export default NewSecret;
