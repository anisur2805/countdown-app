import React, { Component } from 'react';

import './Title.css'

class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "This is title",
            isInput: false
        }
    }

    editHandler() {
        this.setState
            ({
                ...this.state,
                isInput: true

            })

    }

    inputChange(e) {
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }

    keyPressHandler(e) {
        if (e.key === "Enter") {
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    blurHandler(e) {
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    render() {
        let output = null

        if (this.state.isInput) {
            output = (
                <div className="Title">
                    <input className="form-control"
                        onBlur={e => this.blurHandler(e)}
                        onChange={(e) => this.inputChange(e)}
                        onKeyPress={(e) => this.keyPressHandler(e)}
                        value={this.state.title} type="text" />
                </div>
            )
        } else {
            output = (
                <div className="d-flex Title">
                    <h4 className="display-4">{this.state.title}</h4>
                    <span onClick={this.editHandler.bind(this)} className="ml-auto edit-icon">
                        <i className="fa fa-pencil"></i>
                    </span>
                </div>
            )
        }
        return (
            <div className="my-4">
                {output}
            </div>
        );
    }
}

export default Title;