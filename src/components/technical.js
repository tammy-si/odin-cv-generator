import React from "react";

const Technical = (props) => {
    const { handleTechnicalSkillsInput } = props;
    return (
        <div className='technical-skills'>
            <h1>Technical Skills</h1>
            <input type='text' name="languages" placeholder="Languages" onChange={handleTechnicalSkillsInput}></input>
            <input type='text' name="frameworks" placeholder="Frameworks" onChange={handleTechnicalSkillsInput}></input>
            <input type='text' name="developerTools" placeholder="Developer Tools" onChange={handleTechnicalSkillsInput}></input>
            <input type='text' name="libraries" placeholder="Libraries" onChange={handleTechnicalSkillsInput}></input>
        </div>
    )
}

export default Technical