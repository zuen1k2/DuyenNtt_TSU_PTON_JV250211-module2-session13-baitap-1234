import React from 'react'
import { useDispatch } from 'react-redux'
import { taskCheck, taskFindAll } from '../redux/api/sevices/taskSevice';

export default function TaskItem({item,handleShowConfirmDelete, handleEdit}) {
    const dispatch = useDispatch();
    const HandleCheckTask = async (id,oldStatus)=> {
        await taskCheck(id,oldStatus).then(()=> dispatch(taskFindAll()));
     }

  return (
    <>
     <li
                      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                       defaultChecked ={item.completed}
                        onClick={()=> HandleCheckTask(item.id, item.completed)}
                        />
                          <span>{item.completed ? <s>{item.taskName}</s>: item.taskName}</span>
                      </div>
                      <div className="d-flex gap-3">
                        <i className="fas fa-pen-to-square text-warning" onClick={()=> handleEdit(item.id)} />
                        <i className="far fa-trash-can text-danger" onClick={()=> handleShowConfirmDelete(item.id)} />
                      </div>
                    </li>
    </>
  )
}
