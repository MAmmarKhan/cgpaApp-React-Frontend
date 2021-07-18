import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gpa: [0,0,0,0],
    creditHours: [0,0,0,0]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCourse: (state,action) => {
      state.gpa.push(4);
      state.creditHours.push(3);
    },
    addCourses: (state,action) => {
      action.payload.forEach(item => {
        state.gpa.push(item.gpa);
        state.creditHours.push(item.creditHours);        
      });      
    },
    deleteCourse: (state,action) => {
      state.gpa.pop();
      state.creditHours.pop();   
    },
    updateCourse: (state,action) =>{
      state.creditHours[action.payload.id] = action.payload.creditHours;
      state.gpa[action.payload.id] = action.payload.gpa;
    }
  },
})

export const { addCourse,addCourses,deleteCourse,updateCourse } = counterSlice.actions

export default counterSlice.reducer