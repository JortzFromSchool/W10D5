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
            <div className="clock-background">
                <div className="clock-container">
                    <div className="clock-titles">
                        <div>Time:</div>
                        <div>Date:</div>
                    </div>
                    <div>
                        <div id="time">{this.state.clock.getHours()}:{this.state.clock.getMinutes()}:{this.state.clock.getSeconds()}</div>
                        <div id="date">{this.state.clock.getMonth() + 1}/{this.state.clock.getDate()}/{this.state.clock.getFullYear()}</div>
                    </div>

                </div>
            </div>

        )
    }

    tick() {
        this.setState({clock: new Date()});
    }
}

export default Clock;