import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCourse } from '../redux/calculatorSlice';
import { setName } from '../redux/rowSlice';

export function GpaInput() {
  const [nameInput, setNameInput] = useState('a');

  const rows = useSelector((state) => state.rowCounter.rows);
  const courses = useSelector((state) => state.counter);
  // console.log(rows);
  const dispatch = useDispatch();

  function updateCourseDetail(id){
    var value_grade = parseFloat(document.getElementById('grade'+id).value);
    var value_credit = parseInt(document.getElementById('creditHour'+id).value);
    dispatch(updateCourse({gpa:value_grade,creditHours:value_credit,id:id}))
  }

  function handleChange(e) {
    console.log(e.target.value);
    setNameInput(e.target.value);
    dispatch(setName(nameInput));
  }

  return (
    <div>
      <div>
        <input class="form-control" id="username" placeholder="Your Name" style={{width:'40%'}} onChange={handleChange} ></input>
        <p></p>
        {courses.gpa.slice(0, rows).map((data,index) => (
          <div className="flexContainer_courses">
            <div className="flex-big">
              <input type="text" class="form-control rounded-0" placeholder={"Course "+(index+1)}></input>
            </div>
            <div className="flex-small">
              <select class="custom-select text-muted rounded-0" id={'grade'+index} style={{width:'50%'}} onChange={() => {updateCourseDetail(index)}}>
                <option value={0} selected>Grade</option>
                <option value={4.00}>A</option>
                <option value={3.67}>A-</option>
                <option value={3.33}>B+</option>
                <option value={3.00}>B</option>
                <option value={2.67}>B-</option>
                <option value={2.33}>C+</option>
                <option value={2.00}>C</option>
                <option value={1.67}>C-</option>
                <option value={1.33}>D+</option>
                <option value={1.00}>D</option>
              </select>
              <select class="custom-select text-muted rounded-0" id={'creditHour'+index} style={{width:'50%'}} onChange={() => {updateCourseDetail(index)}}>
                <option value={0} selected>Credit Hours</option>
                <option value={1}>1</option>
                <option value={2}>2</option>"
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <br/>        
          </div>
          ))}        
       
        <br/>
      </div>
    </div>
  )
}
