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
        location: "",
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

  // add a new empty experience
  handleAddExperience = () => {
    let newExperience = {
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
      description: ""
    }
    this.setState({
      allExperience: [...this.state.allExperience, newExperience]
    })
  }

  handleExperienceInput = (e) => {
    // figure out with experience to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedExperience = {...this.state.allExperience.find(exp => exp.id === id)}
    // change the values in experience
    updatedExperience[e.target.name] = e.target.value;
    // update the experience list with the new modified experience.
    this.setState({
      // if the experience isn't the one we modified, return just exp. e
      allExperience: this.state.allExperience.map(exp => { return (exp.id !== id) ? exp : updatedExperience})
    })
  }

  render() {
    const handleInput = this.handleInput;
    const handleAddExperience = this.handleAddExperience;
    const handleExperienceInput = this.handleExperienceInput;
    const experienceList = this.state.allExperience;
    return <div>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
        <Experience experienceList = {experienceList} handleAddExperience = { handleAddExperience } handleExperienceInput= {handleExperienceInput}/>
      </div>
      <div className='preview'>

      </div>
    </div>;
  }
}

export default App;
