import React, {useReducer, useEffect} from "react";
import './App.css';
import FunctionForm from "./FunctionForm";
import data from "./data";
import StudentsContainer from "./StudentsContainer";

const initialState = {students: [], name: "", grade: ""};

function reducer (state, action){
  switch(action.type){
    case "addData":
      return{...state, students: action.data};

    case "inputField":
      return{...state, [action.fieldname]: action.value};

    case "addOneStudent":
      let newId = state.students.length + 1
      let newStudent = {
        grade: action.info.grade,
        name: action.info.name,
        id: newId,
      };

      return {...state, students: [...state.students, newStudent] };

      default:
        return state;
  }
}


function App() {

    const [{students, name, grade}, dispatch] = useReducer(
        reducer,
        initialState
    );


    useEffect(() => {
      dispatch({type: "addData", data});
    }, []);

    const addStudents = (info) => {
      dispatch({ type: "addOneStudent", info });
    };

    const handleChange = (name, value) => {
      dispatch({ type: "inputField", fieldname: name, value: value });
    };
    


  return (
    <div className="App">
      <StudentsContainer students={students}/>
      <FunctionForm 
        addStudents={addStudents}
        handleChange = {handleChange}
        name = {name}
        grade = {grade}
      />
    
    </div>
  );
}

export default App;
