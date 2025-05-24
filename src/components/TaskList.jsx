import React from 'react'

export default function TaskList() {
  return (
    <>
                  <ul className="list-group mb-0">
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <s>Quét nhà</s>
                      </div>
                      <div className="d-flex gap-3">
                        <i className="fas fa-pen-to-square text-warning" />
                        <i className="far fa-trash-can text-danger" />
                      </div>
                    </li>
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                        />
                        <span>Giặt quần áo</span>
                      </div>
                      <div className="d-flex gap-3">
                        <i className="fas fa-pen-to-square text-warning" />
                        <i className="far fa-trash-can text-danger" />
                      </div>
                    </li>
                  </ul>
                
              
    </>
  )
}
