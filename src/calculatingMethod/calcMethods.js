import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ReactSpeedometer from "react-d3-speedometer";

const textColor = '#2B4141';
export function CalculateCGPA(){
  const [cgpa, setCgpa] = useState(0);
  const [resultText, setResultText] = useState("");
  const courses = useSelector((state) => state.counter);
  const rows = useSelector((state) => state.rowCounter.rows);
  const name = useSelector((state) => state.rowCounter.name);

  function getResultText(cgpa_val)
  {
    switch (true) {
      case cgpa_val > 3.8:
        setResultText("Give me your charan Boss " + name + "! ");
        break;
      case cgpa_val > 3.5:
        setResultText("Teach Me Senpai " + name + "! ");
        break;
      case cgpa_val >= 3.0:
        setResultText("Oh Daym you are genius " + name);
        break;
      case cgpa_val > 2.2:
        setResultText("Next Semester 1st Day se parheinge " + name +"! alright?");
        break;
      case cgpa_val > 1.7:        
        setResultText("I'm glad you survived " + name + ". This semester");
        break;
      case cgpa_val > 1.3:
        setResultText("Bro aage ka kia plan hai... :< It's going right");
        break;
      case cgpa_val < 1.3:
        setResultText("LOL! you were just testing the program :D Right.... ;-;");
        break;
      default:
        break;
    }
  }

  function calculateCGPA(rows,courses){    
    var totalCreditHours= 0;
    var cgpa_temp = 0;
    for (let i = 0; i < rows; i++) {
      cgpa_temp += courses.gpa[i] * courses.creditHours[i]; 
      totalCreditHours += courses.creditHours[i]; 
    }
    setCgpa((cgpa_temp/totalCreditHours).toFixed(2));

    return(
      <div>
        <button className="btn-grad" onClick={() => calculateCGPA(rows,courses)}> CALCULATE CGPA </button>
        <hr className="middleLine"></hr>
        <h2 style={{color: '#2B4141'}}>Results</h2>
        <div className="cgpaContainer">
          <h3><b>Your GPA:</b> <b className="cgpa">{cgpa}</b></h3>
          <ReactSpeedometer textColor={textColor} 
          className="speedometer"
          maxValue ={4}
          needleTransitionDuration={5000}
          value={cgpa}
          segments={5}
          height={200}
          width={220}
           />
        </div>        
        <h4 style={{color: 'indigo'}}> {resultText} {cgpa > 3.8? <span>&#128588;</span>: cgpa > 3.5? <span>&#128561;</span>: cgpa >= 3.0? <span>&#128081;</span>: cgpa > 2.2 ? <span>&#128111;</span>:cgpa > 1.7 ? <span>&#129303;</span>:cgpa > 1.3 ? <span>&#128532;</span>:cgpa >= 1.0 ? <span>&#128556;</span>:<span>&#129418;</span> }</h4>
      </div>
    );
}

// > 3.8:Hands Raised &#128588;    
// > 3.5: Amazed &#128561;   
// >= 3.0: Crown &#128081;
// > 2.2: Dance &#128111;       
// > 1.7: Hug &#129303;                
// > 1.3: Sad &#128532;
// < 1.3: Grimacing &#128556;