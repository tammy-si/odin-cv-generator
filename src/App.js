import React, { Component } from "react";
import General from "./components/general";

class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        github: "",
        linkedIn: ""
    }
  }
  }

  handleInput = (e) => {
    const value = e.target.value;
    this.setState({
      general: {
        ...this.state.general,
        [e.target.name]: value
        }
      });
  }

  render() {
    const handleInput = this.handleInput;
    return <div>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
      </div>
      <div className='preview'>

      </div>
    </div>;
  }
}

export default App;
