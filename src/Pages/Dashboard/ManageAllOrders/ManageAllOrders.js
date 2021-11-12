import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [control, setControl] = useState(false);

  const [orderId, setOrderId] = useState("");

  
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control,orders]);

  const handleOrderId = (id) => {
    setOrderId(id);
  };

  const onSubmit = (data) => {
   
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`http://localhost:5000/DeleteManageBooking/${id}`, {
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
        All Orders: {orders.length} Collections
      </div>
      <div className="row text-center my-5">
        {orders?.map((pd, index) => (
          <div className="col-12 ">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order Collection</th>

                  
                  <th>Address</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
             
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
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
                          <option value="approve">approve</option>
                          
                        </select>
                        <input
                          value="Update"
                          type="submit"
                          className="btn bg-success w-25 fw-bold ms-2  py-2"
                        />
                      </form>
                    </td>
                    <button
                      onClick={() => handleDelete(pd?._id)}
                      className="btn bg-danger w-75 fw-bold py-2"
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

export default MangeAllOrders;
