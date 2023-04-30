import React from "react";

const Education = (props) => {
    const {educationList, handleAddEducation, handleEducationInput, handleEducationDelete} = props;
    return (
        <div className="education">
            <h1>Education</h1>
            {educationList.map((education) => {
                return (
                <div key={education.id} id={education.id}>
                    <input name='school' placeholder="School" onChange={handleEducationInput} value={education.school}/>
                    <input name='location' placeholder="Location" onChange={handleEducationInput} value={education.location}/>
                    <input name='from' placeholder="From" onChange={handleEducationInput} value={education.from}/>
                    <input name='to' placeholder="To" onChange={handleEducationInput} value={education.to}/>
                    <input name='degree' placeholder="Degree" onChange={handleEducationInput} value={education.degree}/>
                    <button onClick={handleEducationDelete}>Delete Education</button>
                </div>)
            })}
            <button onClick={ handleAddEducation }>Add Education</button>
        </div>
    )
}

export default Education