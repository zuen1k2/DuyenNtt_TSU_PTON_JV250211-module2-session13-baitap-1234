import React from 'react'
import { useDispatch } from 'react-redux'
import { taskDelete, taskFindAll } from '../redux/api/sevices/taskSevice';


export default function ModalConfirmDelete({handleCancel, currentId}) {
    const dispatch = useDispatch();
    const handleDelete = async ()=> {
        await taskDelete(currentId).then(()=>{
            dispatch(taskFindAll());
            handleCancel();
        });

    }
   
  return (
    <>
    <div className="overlay"  >
    <div className="modal-custom">
      <div className="modal-header-custom">
        <h5>Xác nhận</h5>
        <i className="fas fa-xmark" onClick={handleCancel} />
      </div>
      <div className="modal-body-custom">
        <p>Bạn chắc chắn muốn xóa công việc không ?</p>
      </div>
      <div className="modal-footer-footer">
        <button className="btn btn-light" onClick={handleCancel}>Hủy</button>
        <button className="btn btn-danger" onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  </div> 

    </>
  )
}
