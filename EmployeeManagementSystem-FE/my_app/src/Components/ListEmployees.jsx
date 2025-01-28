import React, { useState, useEffect } from 'react'
import EmployeesService from '../Service/EmployeesService'
import { Link } from 'react-router-dom';

const ListEmployees = () => {
    const[employees,setEmployees]=useState([])
   
    const getAllEmployees=()=>{
        EmployeesService.getAllEmployees() 
        .then((response) => {
            setEmployees(response.data);  
            console.log(response.data);    
        })
        .catch((error) => {
            console.error('Error fetching employees:', error);  // Log any error during fetch
        });
    }
    useEffect(() => {
        getAllEmployees();
      
  }, []);

  

const deleteEmployee=(employeeId)=>{
    EmployeesService.deleteEmployee(employeeId).then((response)=>{
        getAllEmployees();
    }).catch(error=>{
        console.log(error)
    })
    console.log(employeeId)
}
  return (
   <>
   <div className='container table-responsive'>
    <h2 className='text-center'>List Employees</h2>
    <Link to="/add-employee" className="btn btn-success m-2 fs-6 fw-bold">Add New Record (+)</Link>

    <table class="table table-bordered table-striped table-hover">
    <thead className='text-center'>
        <th>Employee ID</th>
        <th> Name</th>
        <th>Email </th>
        <th>ContactNumber</th>
        <th>Department</th>
        <th>Designation</th>
                  <th >Actions</th>
                  
    </thead>
<tbody>
    {
        employees.map(
            employee=>
                <tr key={employee.id}>
                    <td className='text-center'>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.emailId}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>
                    {/* onClick={()=>handelDetails(item.id)} */}
                      <Link to={`/edit-employee/${employee.id}`} className="btn btn-primary mx-1 ">Update</Link>
<Link to={`/view-employee/${employee.id}`} className="btn btn-success mx-1">View</Link>

<button  className="btn btn-danger mx-1 " onClick={()=> deleteEmployee(employee.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>
                    </td>

                </tr>


        )

        
    }
</tbody>
</table>
   </div>
   </>
  )
}

export default ListEmployees