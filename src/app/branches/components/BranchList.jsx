import Link from "next/link";
import React from "react";
import { branches } from "@/app/data/branches";
const BranchList = () => {
  return (
    <div>
      <table className="table table-hover">
        <caption>All Branches</caption>
        <thead>
          <tr>
            <th scope="col">S/NO</th>
            <th scope="col">Branch Name</th>
            <th scope="col">Location</th>
            <th scope="col">Manager</th>
            <th scope="col">Status</th>
            <th scope="col">Opening Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {branches.map((branch, id) => (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{branch.name}</td>
              <td>{branch.city}</td>
              <td>{branch.manager}</td>
              <td>{branch.status}</td>
              <td>{branch.date_create}</td>
              <td>
                <Link
                  href={`/branches/edit/${branch.id}`}
                  className="btn btn-info "
                >
                  Edit
                </Link>
                {"   "}
                <Link
                  href={`/branches/delete/${branch.id}`}
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

export default BranchList;
