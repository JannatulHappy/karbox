import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageCollections = () => {
 
  const [collections,setCollections] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/allCollections`)
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, [ control,collections]);


  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteManageCollection/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(true);
            alert("Deleted successfully");
          } 
        });
    }
  };
  return (
    <div className="my-booking">
      <div className="text-center my-4 fw-bold fs-2">
        My Orders: {collections.length} Collections
      </div>
      <div className="row text-center my-5">
        {collections?.map((pd, index) => (
          <div className="col-12 ">
            <Table striped bordered hover>
              <thead className="fs-5 table-head">
                <tr>
                  <th>#</th>
                  <th>  Collection Name</th>

                  <th>price</th>
                  <th>image Link</th>
                 
                </tr>
              </thead>
              <tbody className="fw-bold">
                <tr>
                  <td>{index + 1}</td>
                  <td>{pd.name}</td>
                  <td>{pd.price}</td>
                  <td>{pd?.img}</td>
                  
                  <button
                    onClick={() => handleDelete(pd?._id)}
                    className="btn my-1 fw-bold fs-6 w-75 mx-auto bg-danger px-4"
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default ManageCollections;
