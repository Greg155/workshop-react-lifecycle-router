import { Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Logger from './Components/Logger'
import Noon from './Components/Noon'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isActive : true,
      
    }
    console.log("hehe")
  }

 
  stopTime = () => {
      this.setState({ isActive : !this.state.isActive})
      console.log(this.state.isActive)
  }


  render(){
    return (
      <div className="App">
       
          <img src={logo} className="App-logo" alt="logo" />
  
        <ul>
          <li><Link to="/">Logger</Link></li>
          <li><Link to ="/Noon">Noon</Link></li>
        </ul>
  
        <button onClick={this.stopTime}> Stop time </button>
        
  
        <Switch>
          <Route exact path='/' > <Logger isActive={this.state.isActive} /> </Route>
          <Route path = '/Noon'> <Noon isActive={this.state.isActive} /> </Route>
        </Switch>
         
  
      </div>
    )
   }
 
}

export default App;
