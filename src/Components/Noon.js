import React from 'react';


class Noon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            isTimeActive : false
        }
    }


    componentDidMount() {

        this.dateChange = setInterval( () => {
            console.log("Je suis en repeat");
            this.setState({ date : new Date})} , 1000)
    }

   
    componentDidUpdate() {
        console.log("New change Noon !! ");
        if(this.props.isActive === true){
            return ;
        }else{
            clearInterval(this.dateChange)
        } 
    }
    

    componentWillUnmount(){
        clearInterval(this.dateChange);
    }

   
    render(){
        let DateInString = this.state.date.toString();
        return (
            <div>
                <h1>Hello from Noon, it's {DateInString}</h1>
                {/* <button >Stop le temps</button> */}
            </div>
        );
    }


}

export default Noon;