import React, { Component } from "react";
import General from "./components/general";
import Experience from "./components/experience";
import Education from "./components/education";
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
        from: "",
        to: "",
        description: ""
      }],
      allEducation: [{
        id: uniqid(),
        school: "",
        location: "",
        from: "",
        to: "",
        degree: ""
      }]
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

  handleExperienceDelete = (e) => {
    // figure out with experience to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the experience 
    this.setState({
      // if the experience isn't the one we modified, return just exp. e
      allExperience: this.state.allExperience.filter(exp => exp.id !== id)
    })
  }

  // add a new empty education
  handleAddEducation = () => {
    let newEducation = {
      id: uniqid(),
      school: "",
      location: "",
      from: "",
      to: "",
      degree: ""
    }
    this.setState({
      allEducation: [...this.state.allEducation, newEducation]
    })
  }

  // changing values for education
  handleEducationInput = (e) => {
    // figure out with education to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedEducation = {...this.state.allEducation.find(edu => edu.id === id)}
    // change the values in education
    updatedEducation[e.target.name] = e.target.value;
    // update the education list with the new modified education.
    this.setState({
      // if the education isn't the one we modified, return just edu. 
      allEducation: this.state.allEducation.map(edu => { return (edu.id !== id) ? edu : updatedEducation})
    })
  }

  // delete and education
  handleEducationDelete = (e) => {
    // figure out with experience to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the experience 
    this.setState({
      // if the experience isn't the one we modified, return just exp. e
      allEducation: this.state.allEducation.filter(edu => edu.id !== id)
    })
  }


  render() {
    const handleInput = this.handleInput;
    const handleAddExperience = this.handleAddExperience;
    const handleExperienceInput = this.handleExperienceInput;
    const handleExperienceDelete = this.handleExperienceDelete;
    const experienceList = this.state.allExperience;
    // for education
    const educationList = this.state.allEducation;
    const handleAddEducation = this.handleAddEducation;
    const handleEducationInput = this.handleEducationInput;
    const handleEducationDelete = this.handleEducationDelete;
    return <div>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
        <Experience experienceList = {experienceList} handleAddExperience = { handleAddExperience } handleExperienceInput= {handleExperienceInput} handleExperienceDelete={handleExperienceDelete}/>
        <Education educationList = {educationList} handleAddEducation = { handleAddEducation} handleEducationInput = { handleEducationInput } handleEducationDelete= { handleEducationDelete }/>
      </div>
      <div className='preview'>

      </div>
    </div>;
  }
}

export default App;
