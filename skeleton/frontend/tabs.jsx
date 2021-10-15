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
        //debugger
        return (
            <div>
                <ul className="tab-header-container">
                    {(this.props.tabs.map((el, idx) => {
                        return(
                        <header className="tab-headings" key={idx} onClick={() => {this.changeSelected(idx)}}>
                            <h1>{el.title}</h1>
                        </header>)
                    }))}
                </ul>
                <article className="tab-content-container">
                    <p>{this.props.tabs[this.state.selected].content}</p>
                </article>
            </div>
        );
    }

    
}

export default Tabs;