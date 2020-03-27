import React, { Component } from 'react';

class Controller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }

    startHandler() {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.start()
    }

    pauseHandler() {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        })
        this.props.pause()
    }
    lapHandler() {
        this.props.lap()
    }
    resetHandler() {
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }

    getController() {
        let output = null

        if (this.state.start && !this.state.reset) {
            output = (
                <div>
                    <button onClick={e => this.startHandler()} className="btn btn-success btn-lg mx-3">Start</button>
                </div>
            )
        } else if (this.state.pause && this.state.lap) {
            output = (
                <div>
                    <button onClick={e => this.pauseHandler()} className="btn btn-warning btn-lg mx-3">Pause</button>
                    <button onClick={e => this.lapHandler()} className="btn btn-primary btn-lg mx-3">Lap</button>
                </div>
            )
        } else if (this.state.start && this.state.reset) {
            output = (
                <div>
                    <button onClick={e => this.startHandler()} className="btn btn-success btn-lg mx-3">Start</button>
                    <button onClick={e => this.resetHandler()} className="btn btn-danger btn-lg mx-3">Reset</button>
                </div>
            )
        }
        return output

    }
    render() {
        return this.getController();
    }
}

export default Controller;