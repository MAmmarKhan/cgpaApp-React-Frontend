import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ReactSpeedometer from "react-d3-speedometer";
import {
  browserName,
  osVersion,
  osName
} from "react-device-detect";
const textColor = '#2B4141';
export function CalculateCGPA(){
  const [cgpa, setCgpa] = useState(0);
  const courses = useSelector((state) => state.counter);
  const rows = useSelector((state) => state.rowCounter.rows);
  const name = useSelector((state) => state.rowCounter.name);

  // USE IT
  console.log(browserName + " " + osName + " version: " + osVersion);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  function calculateCGPA(rows,courses){    
    var totalCreditHours= 0;
    var cgpa_temp = 0;
    for (let i = 0; i < rows; i++) {
      cgpa_temp += courses.gpa[i] * courses.creditHours[i]; 
      totalCreditHours += courses.creditHours[i]; 
    }
    setCgpa((cgpa_temp/totalCreditHours).toFixed(2));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name,
      "cgpa": (cgpa_temp/totalCreditHours).toFixed(2),
      "numOfCourses": rows
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://cgpa-api.herokuapp.com/cgpaList", requestOptions)
      .then(response => response.text())
      .then(result => console.log(''))
      .catch(error => console.log('error', error));
    
  }

    return(
      <div>
        <button className="btn-grad" onClick={() => calculateCGPA(rows,courses)}> CALC CGPA </button>
        <hr className="middleLine"></hr>
        <h1>Results</h1>
        <div className="cgpaContainer">
          <h3>Your GPA: <b className="cgpa">{cgpa}</b></h3>
          <ReactSpeedometer textColor={textColor} 
          maxValue ={4}
          needleTransitionDuration={5000}
          value={cgpa}
          segments={5}
          height={220}
           />
        </div>
      </div>
    );
}