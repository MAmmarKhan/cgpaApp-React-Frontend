import { createSlice } from '@reduxjs/toolkit'
//////////////////////////////////

// GPA = Grade * Credit Hours
// CGPA = Sum (Grade * Credit Hours) / Credit Hours

//////////////////////////////////
const initialState = {
  rows: 4,
  name:'Student'
}

export const rowSlice = createSlice({
  name: 'rowCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.rows += 1
    },
    decrement: (state) => {
      state.rows -= 1
    },
    setName: (state,action) =>{
      state.name = action.payload;
    }
  },
})

export const { increment, decrement,setName } = rowSlice.actions

export default rowSlice.reducer