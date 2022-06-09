import React from "react";
import Student from "./Student";


const StudentsContainer = (props) => {
  
    let arrayOfComponents = props.students.map((studentObj) => (
        <Student key={studentObj.id} student={studentObj}/>

    ));

    return <div>{arrayOfComponents}</div>;
};


export default StudentsContainer;


