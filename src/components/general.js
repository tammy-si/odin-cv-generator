import React from "react";

const General = (props) => {
    const { handleInput } = props;
    return (
        <div className='personal-info'>
            <h1>Personal Info</h1>
            <input type='text' name="firstName" placeholder="First Name" onChange={handleInput}></input>
            <input type='text' name="lastName" placeholder="Last Name" onChange={handleInput}></input>
            <input type='text' name="phone" placeholder="Phone Number" onChange={handleInput}></input>
            <input type='text' name="email" placeholder="Email" onChange={handleInput}></input>
            <input type='text' name="github" placeholder="Github URL" onChange={handleInput}></input>
            <input type='text' name="linkedIn" placeholder="LinkedIn URL" onChange={handleInput}></input>
        </div>
    )
}

export default General