import React from "react";

const Project = (props) => {
    const {projectList, handleAddProject, handleProjectInput, handleProjectDelete} = props;
    return (
        <div className="projects">
            <h1>Projects</h1>
            {projectList.map((project) => {
                return (
                <div key={project.id} id={project.id}>
                    <input name='name' placeholder="Project Name" onChange={handleProjectInput} value={project.name}/>
                    <input name='technologies' placeholder="Technologies Used" onChange={handleProjectInput} value={project.technologies}/>
                    <input name='from' placeholder="From" onChange={handleProjectInput} value={project.from}/>
                    <input name='to' placeholder="To" onChange={handleProjectInput} value={project.to}/>
                    <textarea name='description' placeholder="Description (bullet points are separated by new lines)" onChange={handleProjectInput} value={ project.description }></textarea>
                    <button onClick={handleProjectDelete}>Delete Project</button>
                </div>)
            })}
            <button onClick={ handleAddProject }>Add Project</button>
        </div>
    )
}

export default Project