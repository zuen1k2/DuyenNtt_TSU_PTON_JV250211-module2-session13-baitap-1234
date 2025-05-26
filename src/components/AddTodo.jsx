import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { taskFindAll,taskAdd,taskUpdate } from '../redux/api/sevices/taskSevice';
import ModalShowError from './ModalShowError';

export default function AddTodo({edit,setEdit}) {
  const dispatch = useDispatch ();

  const[taskName, setTaskName] = useState("");

  const [error,setError] = useState(false);
  const handleCancel = ()=> setError(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(taskName === ""){
      setError(true);
      return;
    }
    const newTask = {
      taskName,
      completed: true,
    };
    if (!edit){
      await taskAdd(newTask).then(()=> dispatch(taskFindAll()));
    } else {
      await taskUpdate(newTask,edit.id).then(()=>{
        dispatch(taskFindAll());
        setEdit(null);
      });
    }
    setTaskName("")
  };
  const ref = useRef();
  useEffect(()=> {
    if(edit) {
      ref.current.focus();
      setTaskName(edit.taskName)
    }
  },[edit]);

  

  return (
            <>
              <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
                <div className="form-outline flex-fill">
                  <input type="text" id="form2" className="form-control" value={taskName} onChange={(e)=> setTaskName(e.target.value)} ref ={ref} />
                  <label className="form-label" htmlFor="form2">
                    Nhập tên công việc
                  </label>
                </div>
                <button type="submit" className="btn btn-info ms-2">
                 {edit ? "Sửa" : "Thêm"}
                </button>
              </form>
              {error && <ModalShowError handleCancel={handleCancel}/>}
              </>
             
  )
}
