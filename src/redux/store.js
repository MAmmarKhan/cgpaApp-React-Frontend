import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorSlice';
import rowCounterReducer from './rowSlice';
export const store = configureStore({
  reducer: {
      counter:calculatorReducer,
      rowCounter:rowCounterReducer,
    },
})