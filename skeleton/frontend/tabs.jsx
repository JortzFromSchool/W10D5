import React from "react";

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        };
        this.changeSelected = this.changeSelected.bind(this);
    };
    
    changeSelected(idx) {
        this.setState({selected: idx});
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.tabs.map((el, idx) => {
                        <header onClick={this.changeSelected(idx)}>
                            <h1>{el.title}</h1>
                        </header>
                    })}
                </ul>
                <article>
                    <p>{this.props.tabs[this.selected].content}</p>
                </article>
            </div>
        );
    }

    
}

export default Tabs;