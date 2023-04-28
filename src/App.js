import React, { Component } from "react";
import General from "./components/general";
import Experience from "./components/experience";
import uniqid from "uniqid";

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
      },
      allExperience: [{
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        description: ""
      }],
      allEducation: []
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

  handleAddExperience = () => {
    let newExperience = {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: ""
    }
    this.setState({
      allExperience: [...this.state.allExperience, newExperience]
    })
  }

  render() {
    const handleInput = this.handleInput;
    const handleAddExperience = this.handleAddExperience;
    const experienceList = this.state.allExperience;
    return <div>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
        <Experience experienceList = {experienceList} handleAddExperience = { handleAddExperience }/>
      </div>
      <div className='preview'>

      </div>
    </div>;
  }
}

export default App;
