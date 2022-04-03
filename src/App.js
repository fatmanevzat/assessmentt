import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import { STUDENTS } from './studentList';

function App() {

  let allStudents = STUDENTS;

  const [studentName, setStudentName] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [residentList, setResidentList] = useState([]);
  const [isShowError, showError] = useState(false);

  let onOnclickHandler = (e) => {
    if (studentName.length === 0) {
      alert("Please insert student name");
      return
    }
    console.log(joiningDate)

    const filteredStudent = allStudents.filter(
      (student) => student.name.indexOf(studentName) !== -1 &&
        student.validityDate.indexOf(joiningDate) !== -1
    );
    if (filteredStudent.length > 0) {
      let foundStudent = filteredStudent[0];
      console.log(foundStudent)
      setResidentList([...residentList, foundStudent])
      showError(false)
    }
    else {
      showError(true)
      setTimeout(() => {
        showError(false)
      }, 5000)
    }
  };
  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          onOnclickHandler={onOnclickHandler}
          setStudentName={setStudentName}
          setValidityDate={setJoiningDate} />
        {isShowError === true && <Error />}
        <ResidentsList residentList={residentList} />
      </div>
    </div>
  );
}



export default App;
