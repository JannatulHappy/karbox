import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [control, setControl] = useState(false);

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    fetch("https://limitless-gorge-71694.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control, orders]);

  const handleOrderId = (id) => {
    setOrderId(id);
  };

  const onSubmit = (data) => {
    fetch(
      `https://limitless-gorge-71694.herokuapp.com/statusUpdate/${orderId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
       
        if(result.modifiedCount){
          alert("status updated")
        }
      });
  };

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
                  <th>Status</th>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <select
                        onClick={() => handleOrderId(pd?._id)}
                        {...register("status")}
                      >
                        <option value={pd?.status}>{pd?.status}</option>
                        <option value="Shipped">Shipped</option>
                      </select>
                      <input
                        value="Update"
                        type="submit"
                        className="btn bg-success px-2 w-25 fw-bold ms-2  py-2"
                      />
                    </form>
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
