import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        let time = new Date();
        this.handle;
        this.state = { 
            clock: time
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.handle = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.handle);
    }

    render() {
        return (
            <div>
                <h1>Clock Widget</h1>
                <div id="time">{this.state.clock.getHours()}:{this.state.clock.getMinutes()}:{this.state.clock.getSeconds()}</div>
            </div>
        )
    }

    tick() {
        this.setState({clock: new Date()});
    }
}

export default Clock;