import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';  // useParams to get the 'id' from the URL
import EmployeesService from '../Service/EmployeesService';  // Ensure EmployeesService is imported correctly

const ViewEmployee = () => {
  const { id } = useParams();  // Get 'id' from the URL params
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee data based on the 'id'
    EmployeesService.getEmployeebyId(id)
      .then(response => {
        setEmployee(response.data);  // Store the employee data in state
      })
      .catch(error => {
        console.error('Error fetching employee:', error);  // Handle any errors
      });
  }, [id]);  // Re-run effect when 'id' changes

  return (
    // <div>
    //   {employee ? (
    //     <div>
    //       <h1>Employee Details</h1>
    //       <p><strong>Name:</strong> {employee.name}</p>
    //       <p><strong>Email:</strong> {employee.emailId}</p>
    //       <p><strong>Contact:</strong> {employee.contact}</p>
    //       <p><strong>Department:</strong> {employee.department}</p>
    //       <p><strong>Designation:</strong> {employee.designation}</p>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>  // Display loading message while fetching data
    //   )}
    // </div>

    <>
        <div className="container  mt-5">
      {employee ? (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <h3>Employee Details</h3>
              </div>
              <div className="card-body ">
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Email:</strong> {employee.emailId}</p>
                <p><strong>Contact:</strong> {employee.contact}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Designation:</strong> {employee.designation}</p>
 <div className="d-flex w-100  align-item-center justify-content-center  ">

                <Link to={`/edit-employee/${employee.id}`} className="btn btn-primary mx-1 ">Update</Link>
                <Link to="/" className="btn btn-danger fw-bold text-light mx-2 ">Back</Link>
</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading...</p>  {/* Display loading message while fetching data */}
        </div>
      )}
    </div>

    </>
  );
};

export default ViewEmployee;
