import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/rowSlice';
import { addCourse,deleteCourse } from '../redux/calculatorSlice';
import { CalculateCGPA } from '../calculatingMethod/calcMethods';

export function ModifyRows() {

  const rows = useSelector((state) => state.rowCounter.rows);
  console.log(rows);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button className="modifyowButtons btn-gradDel" style={{}} onClick={() => {
            dispatch(decrement());
            dispatch(deleteCourse());
            }} > <i className="fa fa-trash" style={{fontSize:'23px'}}></i>  DELETE COURSE </button>
      <div className="ModifyButtonContainer">
        <button className="modifyowButtons btn-gradAdd" onClick={() => {
            dispatch(increment());
            dispatch(addCourse());
            }} > <i className="fas fa-plus" style={{fontSize:'23px'}}></i> ADD COURSE </button>
        </div>      
        <br/>
        <CalculateCGPA></CalculateCGPA>
    </div>
  )
}