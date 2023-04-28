import React, { Component } from "react";

const Experience = (props) => {
    const { experienceList, handleAddExperience } = props;
    console.log(experienceList);
    console.log(handleAddExperience);
    return (
        <div className="experience">
            <h1>Experience</h1>
            {experienceList.map((experience) => {
                return (
                <div id={experience.id}>
                    <input name='position' placeholder="Position"></input>
                    <input name='company' placeholder="Company"></input>
                    <input name='location' placeholder="Position"></input>
                    <input name='from' placeholder="From"></input>
                    <input name='to' placeholder="To"></input>
                    <textarea name='description' placeholder="Description"></textarea>
                </div>)
            })}
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    )
}

export default Experience