import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Saved() {
  return (
    <div className='container d-flex align-items-center justify-content-center my-5 flex-column'>
      <h1>All Saved Resumes</h1>
      <table className="table table-hover table-bordered table-stripped my-5 text-center">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={'/resume/:id'}>Name</Link></td>
            <td>Job</td>
            <td>
              <button className='btn btn-danger'><MdDelete className='fs-4' /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
