import React, { Component } from "react";

const Experience = (props) => {
    const { experienceList, handleAddExperience, handleExperienceInput } = props;
    console.log(experienceList)
    return (
        <div className="experience">
            <h1>Experience</h1>
            {experienceList.map((experience) => {
                return (
                <div id={experience.id}>
                    <input name='position' placeholder="Position" onChange={handleExperienceInput}></input>
                    <input name='company' placeholder="Company" onChange={handleExperienceInput}></input>
                    <input name='location' placeholder="Location" onChange={handleExperienceInput}></input>
                    <input name='from' placeholder="From" onChange={handleExperienceInput}></input>
                    <input name='to' placeholder="To" onChange={handleExperienceInput}></input>
                    <textarea name='description' placeholder="Description" onChange={handleExperienceInput}></textarea>
                </div>)
            })}
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    )
}

export default Experience