import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice"
const RootReducers = combineReducers({
    tasks: taskSlice,
})
export default RootReducers