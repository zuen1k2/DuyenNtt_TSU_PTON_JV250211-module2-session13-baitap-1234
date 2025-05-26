import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsonAxios } from "..";

export const taskFindAll = createAsyncThunk("task/taskFindAll", async ()=> {
    const Res = await jsonAxios.get("")
    return Res.data;
});

export const taskAdd = async (newTask)=> {
    const Res = await jsonAxios.post("", newTask)
    return Res;
};
export const taskDelete = async (taskId)=> {
    const Res = await jsonAxios.delete(`/${taskId}`)
    return Res;
};
export const taskUpdate = async (newTask,updateId)=> {
    const Res = await jsonAxios.put(`/${updateId}`, newTask)
    return Res;
};
export const taskCheck = async (id,oldStatus)=> {
    const Res = await jsonAxios.patch(`${id}`, {completed: !oldStatus})
    return Res;
};

