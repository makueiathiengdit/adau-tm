import React from "react";
import { employees } from "@/app/data/employees";
import Link from "next/link";
const EmployeeList = () => {
  return (
    <div className="mt-4">
      <table className="table table-hover">
        <caption>All Employees</caption>
        <thead>
          <tr className="table-active">
            <th scope="col">S/NO</th>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Address</th>
            <th scope="col">Role</th>
            <th scope="col">Branch</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {employees.map((employee, id) => (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{employee.employee_id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.gender}</td>
              <td>{employee.mobile_number}</td>
              <td>{employee.address_city}</td>
              <td>{employee.role}</td>
              <td>{employee.branch}</td>

              <td>
                <Link
                  href={`/employees/edit/${employee.id}`}
                  className="btn btn-info "
                >
                  Edit
                </Link>
                {"   "}
                <Link
                  href={`/employees/delete/${employee.id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
