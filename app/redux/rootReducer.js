'use client'
import weatherSlice from "./weatherService";
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ 
    reducer: weatherSlice
 })

 export default rootReducer