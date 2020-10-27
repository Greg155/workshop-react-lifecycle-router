import React from 'react';


class Logger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
        console.log(props.isActive);
        
    }


    componentDidMount() {
        console.log("Je suis en repeat");
       this.dateChange = setInterval( () => {
           this.setState({ date : new Date})} , 1000)
    }

    componentDidUpdate() {
        console.log("New change Logger !! ");

        if(this.props.isActive === true){
            clearInterval(this.dateChange);
            this.dateChange = setInterval( () => {
                this.setState({ date : new Date})} , 1000)
        }else{
            
            clearInterval(this.dateChange);
            console.log(this.dateChange);
        } 
    }
    
    componentWillUnmount(){
        clearInterval(this.dateChange);
    }

    render(){
        let DateInString = this.state.date.toString();
        return (
            <div>
                <h1>Hello from Logger</h1>
                <h1> it's {DateInString}</h1>
            </div>
        );
    }


}

export default Logger;