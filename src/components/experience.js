import React from "react";

const Experience = (props) => {
    const { experienceList, handleAddExperience, handleExperienceInput, handleExperienceDelete } = props;
    console.log(experienceList)
    return (
        <div className="experience">
            <h1>Experience</h1>
            {experienceList.map((experience) => {
                return (
                <div key={experience.id} id={experience.id}>
                    <input name='position' placeholder="Position" onChange={handleExperienceInput} value={experience.position} />
                    <input name='company' placeholder="Company" onChange={handleExperienceInput} value={experience.company} />
                    <input name='location' placeholder="Location" onChange={handleExperienceInput} value={experience.location} />
                    <input name='from' placeholder="From" onChange={handleExperienceInput} value={experience.form} />
                    <input name='to' placeholder="To" onChange={handleExperienceInput} value={experience.to} />
                    <textarea name='description' placeholder="Description" onChange={handleExperienceInput}>{experience.desc}</textarea>
                    <button onClick={handleExperienceDelete}>Delete Experience</button>
                </div>)
            })}
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    )
}

export default Experience