import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import axios from "axios";

const MangeAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  // get all orders
  useEffect(() => {
    fetch("https://limitless-gorge-71694.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control, orders]);

  //Handle Status
  const handleApprove = (id) => {
    setControl(false);
    const proceed = window.confirm(
      "Want to Status shipped the collection from Status Pending??"
    );
    if (proceed) {
      axios
        .put(`https://limitless-gorge-71694.herokuapp.com/approveBooking/${id}`)
        .then((result) => {
          if (result.data.modifiedCount) {
            setControl(true);
          }
        });
    }
  };
  // delete users order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(
        `https://limitless-gorge-71694.herokuapp.com/DeleteManageBooking/${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(true);
            alert("Deleted successfully");
          }
        });
    }
  };
  window.scroll(0, 0);
  return (
    <div className="my-booking">
      <div className="text-center my-4 fw-bold fs-2">
        All Orders: {orders.length} Collections
      </div>
      <div className="row text-center my-5">
        {orders?.map((pd, index) => (
          <div key={index} className="col-12 ">
            <Table striped bordered hover>
              <thead className="fs-5 table-head">
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Order Collection</th>

                  <th>Address</th>
                  <th>City</th>
                  <th>Shipping Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="fw-bold">
                <tr>
                  <td>{index + 1}</td>
                  <td>{pd.userEmail}</td>
                  <td>{pd.name}</td>
                  <td>{pd.address}</td>
                  <td>{pd.city}</td>
                  <td>
                    <Button
                      variant="success"
                      className="text-black w-50 fw-bold"
                      onClick={() => handleApprove(pd._id)}
                    >
                      {pd?.status}
                    </Button>
                  </td>
                  <td
                    onClick={() => handleDelete(pd?._id)}
                    className="btn bg-danger mt-2 w-75 fw-bold py-2"
                  >
                    Delete
                  </td>
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

export default MangeAllOrders;
