import React, { Component } from 'react'

class Logger extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    componentDidMount(){
        this.dateChange = setInterval(this.newDate, 1000);
    }

    newDate = () => {
        this.setState({date: new Date()});
        console.log("New Change");
    }

    componentDidUpdate(){
        if(this.props.isActive === true){
            return;
        }else{
            clearInterval(this.dateChange);
        }
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleString()}</h1>
            </div>
        )
    }
}

export default Logger;
