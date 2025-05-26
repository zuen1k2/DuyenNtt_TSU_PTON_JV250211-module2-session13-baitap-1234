import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import ModalConfirmDelete from './ModalConfirmDelete'
import { useDispatch, useSelector } from 'react-redux'
import { taskFindAll } from '../redux/api/sevices/taskSevice';


export default function TaskList({handleEdit}) {
  const {tasks} = useSelector((state)=> state.tasks);
  const dispatch = useDispatch();
  const [tabActive,setTabActive] = useState("all");
  const [fillterTask,setFillterTask] = useState([]);
    const [currentId,setCurrentId] = useState(null);
    const handleShowConfirmDelete = (id)=> {
      setCurrentId(id);
    }
    const handleCancel = ()=> setCurrentId(null);
    // gọi API lấy danh sách
    useEffect(()=> {
      if(tasks) {
        if(tabActive=== "all"){
          setFillterTask(tasks);
        }else if (tabActive === "completed") {
          setFillterTask(tasks.filter((item)=> item.completed));
        }else if  (tabActive === "unfinished"){
          setFillterTask(tasks.filter((item)=> !item.completed))
        }
      }
      dispatch(taskFindAll())
    },[tabActive, tasks]);
  


  return (
    <>
    <ul className="nav nav-tabs mb-4 pb-2">
                <li className="nav-item" role="presentation" onClick={()=> setTabActive("all")}>
                  <a className={`nav-link ${tabActive=== "all" && "active"}`}>Tất cả</a>
                </li>
                <li className="nav-item" role="presentation" onClick={()=> setTabActive("completed")}>
                  <a className={`nav-link ${tabActive=== "completed" && "active"}`}>Đã hoàn thành</a>
                </li>
                <li className="nav-item" role="presentation" onClick={()=> setTabActive("unfinished")}>
                  <a className={`nav-link ${tabActive=== "unfinished" && "active"}`}>Chưa hoàn thành</a>
                </li>
              </ul>
              <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active">

                  <ul className="list-group mb-0">
                    {fillterTask && 
                    fillterTask.map((item)=> (<TaskItem key={item.id} item={item} handleShowConfirmDelete={handleShowConfirmDelete} handleEdit={handleEdit} />) )}
                   
                  </ul>
                  </div>
                  </div>
                  {currentId && <ModalConfirmDelete handleCancel={handleCancel} currentId={currentId}/>}
                
              
    </>
  )
}
