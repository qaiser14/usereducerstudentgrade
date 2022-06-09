import React from "react";

const Student = (props) => {

    let {name, grade} = props.student;

    return(
        <div className="container">
            <p> 
                <span>{name} is in grade</span>
                {grade}
            </p> 

        </div>
    );
};


export default Student;

