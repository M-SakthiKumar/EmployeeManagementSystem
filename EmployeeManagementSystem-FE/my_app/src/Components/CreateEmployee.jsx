import React, { useEffect, useState } from 'react';
import EmployeesService from '../Service/EmployeesService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [contact, setContact] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const navigation = useNavigate();
  const { id } = useParams();

  const handleSubmitOrhandleUpdate = (e) => {
    e.preventDefault();

    const employeeData = {
      name,
      emailId,
      contact,
      department,
      designation,
    };

    if (id) {
      EmployeesService.updateEmployee(id, employeeData)
        .then((response) => {
          navigation('/employeesData');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeesService.createEmployee(employeeData)
        .then((Response) => {
          console.log(Response.data);
          navigation('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // updateMethod
  useEffect(() => {
    if (id) {
      EmployeesService.getEmployeebyId(id)
        .then((Response) => {
          setName(Response.data.name);
          setEmailId(Response.data.emailId);
          setContact(Response.data.contact);
          setDepartment(Response.data.department);
          setDesignation(Response.data.designation);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = () => {
    if (id) {
      return (
        <h2 className="fs-3 fw-bold text-uppercase text-center mt-3">Update Employee</h2>
      );
    } else {
      return (
        <h2 className="fs-3 fw-bold text-uppercase text-center mt-3">Add Employee</h2>
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card">
              <div className="card-title">
                {title()}
              </div>
              <div className="card-body m-2">
                <form
                  className="row g-3 d-flex flex-column align-items-center"
                  onSubmit={(e) => handleSubmitOrhandleUpdate(e)}
                >
                  <div className="col-md-7">
                    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">
                      Register NO:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputAddress"
                      placeholder=" Register Number Will Auto Generate" disabled
                    />
                  </div>

                  <div className="col-md-7 mt-2">
                    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">
                      Enter the name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter the Employee Name"
                    />
                  </div>

                  <div className="col-md-7 mt-2">
                    <label htmlFor="inputState" className="form-label text-uppercase fw-bolder">
                      Employee EmailID:
                    </label>
                    <input
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                      type="email"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter the Employee EmailID"
                    />
                  </div>

                  <div className="col-md-7 mt-2">
                    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">
                      ContactNumber:
                    </label>
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      type="number"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter the Employee Contact Number"
                    />
                  </div>

                  <div className="col-md-7 mt-2">
                    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">
                      Department:
                    </label>
                    <input
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter the Employee Department"
                    />
                  </div>

                  <div className="col-md-7 mt-2">
                    <label htmlFor="inputState" className="form-label text-uppercase fw-bolder">
                      Designation:
                    </label>
                    <input
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Enter the Employee designation"
                    />
                  </div>

                  <div className="col-12 d-flex justify-content-center ">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <Link to="/" className="btn btn-danger mx-1">
                      Back
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
