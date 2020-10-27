import { Component } from 'react';
import Logger from './components/Logger';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: true,
    }
  }
  clickChange = () => {
    this.setState({isActive: !this.state.isActive});
  }
  render() {
    return (
      <div className="App">
        {<Logger isActive={this.state.isActive}/>}
        <button onClick={this.clickChange}>Click</button>
      </div>
    );
  }
  
}

export default App;
