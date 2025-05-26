import { createSlice } from "@reduxjs/toolkit";
import { taskFindAll } from "../../api/sevices/taskSevice";

const TaskSlice = createSlice({
    name: "tasks",
    initialState: {
        isLoading: false,
        tasks: [],
        error: null,
        
    }, 
    reducers: {},
extraReducers: (builder) => {
    builder.addCase(taskFindAll.pending, (state)=> {
        state.isLoading = true;

    });
    builder.addCase(taskFindAll.fulfilled, (state,action)=> {
        state.isLoading = false;
        state.tasks = action.payload;
    });
    builder.addCase(taskFindAll.rejected, (state,action)=> {
        state.isLoading = false;
        state.error = action.error
    });
},
})
export default TaskSlice.reducer