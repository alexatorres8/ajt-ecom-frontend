import React, { Component } from 'react';

export default class Account extends Component {

    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="page-content">
                    {/* <PageTitle className="account-info" title="Account Information" /> */}

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder=""
                            // value={this.state.name}
                            // onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder=""
                            // value={this.state.address}
                            // onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder=""
                        />

                        <input
                            type="text"
                            name="state"
                            placeholder=""
                        />

                        <input
                            type="number"
                            name="zip"
                            placeholder=""
                        />


                        <div>
                            <button type="submit">Update Account</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}