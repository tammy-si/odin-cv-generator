import React, { useState } from "react";
import General from "./components/general";
import Experience from "./components/experience";
import Education from "./components/education";
import Project from "./components/projects";
import Technical from "./components/technical";
import './App.css'
import uniqid from "uniqid";

function App() {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    github: "",
    linkedIn: ""
  })

  const [allExperience, setallExperience] = useState([{
        id: uniqid(),
        position: "",
        location: "",
        from: "",
        to: "",
        description: ""
  }]);

  const [allEducation, setallEducation] = useState([{
        id: uniqid(),
        school: "",
        location: "",
        from: "",
        to: "",
        degree: ""
  }]);

  const [allProjects, setallProjects] = useState([{
        id: uniqid(),
        name: "",
        technologies: "",
        from: "",
        to: "",
        description: ""
  }]);

  const [technicalSkills, settechnicalSkills] = useState({
        languages: "",
        frameworks: "",
        developerTools: "",
        libraries: ""
      });

  const handleInput = (e) => {
    const value = e.target.value;
    setGeneral({
        ...general,
        [e.target.name]: value
        }
    );
  }

  // add a new empty experience
  const handleAddExperience = () => {
    let newExperience = {
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
      description: ""
    }
    setallExperience(
      [...allExperience, newExperience]
    )
  }

  const handleExperienceInput = (e) => {
    // figure out with experience to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedExperience = {...allExperience.find(exp => exp.id === id)}
    // change the values in experience
    updatedExperience[e.target.name] = e.target.value;
    // update the experience list with the new modified experience.
    setallExperience([
      // if the experience isn't the one we modified, return just exp. e
      ...allExperience.map(exp => { return (exp.id !== id) ? exp : updatedExperience})
    ])
  }

  const handleExperienceDelete = (e) => {
    // figure out with experience to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the experience 
    setallExperience([
      // if the experience isn't the one we modified, return just exp. e
      ...allExperience.filter(exp => exp.id !== id)
    ])
  }

  // add a new empty education
  const handleAddEducation = () => {
    let newEducation = {
      id: uniqid(),
      school: "",
      location: "",
      from: "",
      to: "",
      degree: ""
    }
    setallEducation(
      [...allEducation, newEducation]
    )
  }

  // changing values for education
  const handleEducationInput = (e) => {
    // figure out with education to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedEducation = {...allEducation.find(edu => edu.id === id)}
    // change the values in education
    updatedEducation[e.target.name] = e.target.value;
    // update the education list with the new modified education.
    setallEducation([
      // if the education isn't the one we modified, return just edu. 
      ...allEducation.map(edu => { return (edu.id !== id) ? edu : updatedEducation})
    ])
  }

  // delete and education
  const handleEducationDelete = (e) => {
    // figure out with education to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the education 
    setallEducation([
      // if the education isn't the one we modified, return just exp. e
      ...allEducation.filter(edu => edu.id !== id)
    ])
  }

  /* for projects */
  // add a new empty project
  const handleAddProject = () => {
    let newProject = {
      id: uniqid(),
      name: "",
      technologies: "",
      from: "",
      to: "",
      description: ""
    }
    setallProjects(
      [...allProjects, newProject]
    )
  }

  // changing values for projects
  const handleProjectInput = (e) => {
    // figure out with project to change by getting the parent div's id
    const id = e.target.parentElement.id;
    const updatedProject = {...allProjects.find(proj => proj.id === id)}
    // change the values in project
    updatedProject[e.target.name] = e.target.value;
    // update the project list with the new modified education.
    setallProjects([
      // if the education isn't the one we modified, return just edu. 
      ...allProjects.map(proj => { return (proj.id !== id) ? proj : updatedProject})
    ])
  }

  // delete a project
  const handleProjectDelete = (e) => {
    // figure out with project to delete by getting the parent div's id
    const id = e.target.parentElement.id;
    // delete the project 
    setallProjects([
      // if the project isn't the one we modified, return just exp. e
      ...allProjects.filter(proj => proj.id !== id)
    ])
  }

  /* for the technical skills area */
  const handleTechnicalSkillsInput = (e) => {
    const value = e.target.value;
    settechnicalSkills({
        ...technicalSkills,
        [e.target.name]: value
      });
  }

  const string = String.raw`
  %-------------------------
  % Resume in Latex
  % Author : Jake Gutierrez
  % Based off of: https://github.com/sb2nov/resume
  % License : MIT
  %------------------------
  
  \documentclass[letterpaper,11pt]{article}
  
  \usepackage{latexsym}
  \usepackage[empty]{fullpage}
  \usepackage{titlesec}
  \usepackage{marvosym}
  \usepackage[usenames,dvipsnames]{color}
  \usepackage{verbatim}
  \usepackage{enumitem}
  \usepackage[hidelinks]{hyperref}
  \usepackage{fancyhdr}
  \usepackage[english]{babel}
  \usepackage{tabularx}
  \input{glyphtounicode}
  
  
  %----------FONT OPTIONS----------
  % sans-serif
  % \usepackage[sfdefault]{FiraSans}
  % \usepackage[sfdefault]{roboto}
  % \usepackage[sfdefault]{noto-sans}
  % \usepackage[default]{sourcesanspro}
  
  % serif
  % \usepackage{CormorantGaramond}
  % \usepackage{charter}
  
  
  \pagestyle{fancy}
  \fancyhf{} % clear all header and footer fields
  \fancyfoot{}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0pt}
  
  % Adjust margins
  \addtolength{\oddsidemargin}{-0.5in}
  \addtolength{\evensidemargin}{-0.5in}
  \addtolength{\textwidth}{1in}
  \addtolength{\topmargin}{-.5in}
  \addtolength{\textheight}{1.0in}
  
  \urlstyle{same}
  
  \raggedbottom
  \raggedright
  \setlength{\tabcolsep}{0in}
  
  % Sections formatting
  \titleformat{\section}{
    \vspace{-4pt}\scshape\raggedright\large
  }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]
  
  % Ensure that generate pdf is machine readable/ATS parsable
  \pdfgentounicode=1
  
  %-------------------------
  % Custom commands
  \newcommand{\resumeItem}[1]{
    \item\small{
      {#1 \vspace{-2pt}}
    }
  }
  
  \newcommand{\resumeSubheading}[4]{
    \vspace{-2pt}\item
      \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & #2 \\
        \textit{\small#3} & \textit{\small #4} \\
      \end{tabular*}\vspace{-7pt}
  }
  
  \newcommand{\resumeSubSubheading}[2]{
      \item
      \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
        \textit{\small#1} & \textit{\small #2} \\
      \end{tabular*}\vspace{-7pt}
  }
  
  \newcommand{\resumeProjectHeading}[2]{
      \item
      \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
        \small#1 & #2 \\
      \end{tabular*}\vspace{-7pt}
  }
  
  \newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}
  
  \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
  
  \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
  \newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
  \newcommand{\resumeItemListStart}{\begin{itemize}}
  \newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
  
  %-------------------------------------------
  %%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
  
  \begin{document}
  
  %----------HEADING----------
  % \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
  %   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
  %   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
  % \end{tabular*}
  
  \begin{center}
      \textbf{\Huge \scshape ${general.firstName} ${general.lastName}} \\ \vspace{1pt}
      \small ${general.phone} $|$ \href{${general.email}}{\underline{{${general.email}}}} $|$ 
      \href{${general.linkedIn}}{\underline{${general.linkedIn}}} $|$
      \href{${general.github}}{\underline{${general.github}}}
  \end{center}
  
  
  %-----------EDUCATION-----------
  ${allEducation.length !== 0 ?
  String.raw`\section{Education}
    \resumeSubHeadingListStart
    ${allEducation.map(edu =>
      String.raw`\resumeSubheading
        {${edu.school}}{${edu.location}}
        {${edu.degree}}{${edu.from} -- ${edu.to}}`
    ).join("\n")}
    \resumeSubHeadingListEnd` 
    : ""}
  
  %-----------EXPERIENCE-----------
  ${allExperience.length !== 0 ?
    String.raw`\section{Experience}
    \resumeSubHeadingListStart
      ${allExperience.map(exp =>
        String.raw`\resumeSubheading
        {${exp.position}}{${exp.from} -- ${exp.to}}
        {${exp.company}}{${exp.location}}
        \resumeItemListStart
          ${exp.description.split('\n').map(point =>
            String.raw`\resumeItem{${point}}}`
          ).join('\n')}
        \resumeItemListEnd`
      ).join('\n')}
    \resumeSubHeadingListEnd`
    : "" }
      
  
  %-----------PROJECTS-----------
  ${allProjects.length !== 0 ?
    String.raw`\section{Projects}
    \resumeSubHeadingListStart
    ${allProjects.map(proj =>
      String.raw`\resumeProjectHeading
          {\textbf{${proj.name}} $|$ \emph{${proj.technologies}}}{${proj.from} -- ${proj.to}}
          \resumeItemListStart
          ${proj.description.split('\n').map(point =>
            String.raw`\resumeItem{${point}}`
          ).join("\n")}
          \resumeItemListEnd`
    ).join("\n")}
    \resumeSubHeadingListEnd`
  : "" }
  
  
  %
  %-----------PROGRAMMING SKILLS-----------
  \section{Technical Skills}
   \begin{itemize}[leftmargin=0.15in, label={}]
      \small{\item{
       \textbf{Languages}{: {${technicalSkills.languages}}} \\
       \textbf{Frameworks}{: ${technicalSkills.frameworks}} \\
       \textbf{Developer Tools}{: ${technicalSkills.developerTools}} \\
       \textbf{Libraries}{: ${technicalSkills.libraries}}
      }}
   \end{itemize}
  
  
  %-------------------------------------------
  \end{document}`
  
  console.log(string)
  return( 
    <div class="main-content">
      <p class="main-text">Jake's Resume Generator</p>
      <div className='create-cv'>
        <General handleInput = { handleInput }/>
        <Education educationList = {allEducation} handleAddEducation = { handleAddEducation} handleEducationInput = { handleEducationInput } handleEducationDelete= { handleEducationDelete }/>
        <Experience experienceList = {allExperience} handleAddExperience = { handleAddExperience } handleExperienceInput= {handleExperienceInput} handleExperienceDelete={handleExperienceDelete}/>
        <Project projectList = {allProjects} handleAddProject = { handleAddProject } handleProjectInput= {handleProjectInput} handleProjectDelete={handleProjectDelete}/>
        <Technical handleTechnicalSkillsInput = { handleTechnicalSkillsInput }/>
      </div>
      <div className='preview'>
        <form action="https://www.overleaf.com/docs" method="post" target="_blank">
        <textarea rows="8" cols="60" name="snip" value={string} style={{display: "none"}}>
        </textarea>
        <input type="submit" value="Open in Overleaf" className="overleaf-button"></input>
        </form>
      </div>
    </div>
  )
}

export default App;
