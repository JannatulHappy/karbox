import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import MyOrders from "./MyOrders/MyOrders";
import AddReview from "./AddReview/AddReview";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddCollection from "./AddCollection/AddCollection";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import Home from "../Home/Home";
import Payment from "./Payment/Payment";
import ManageCollections from "./ManageCollections/ManageCollections";
import useAuth from "../hooks/useAuth";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, admin, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard mt-5 pt-3">
              <h5 className="d-none  d-lg-block">Dashboard</h5>

              <Link to={`/home`}>
                <li className="dashboard-menu mt-5">Home</li>
              </Link>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">my Orders</li>
              </Link>
              <Link to={`${url}/payment`}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>
              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Add Review</li>
              </Link>
              {user?.email && (
                <button
                  className=" btn text-white text-uppercase"
                  onClick={logout}
                >
                  Logout
                </button>
              )}

              <Link to={`${url}/addCollection`}>
                <li className="dashboard-menu mt-5">Add Collection</li>
              </Link>

              <div className="admin-dashboard">
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageAllOrders`}>
                  <li className="dashboard-menu">Manage Orders</li>
                </Link>
                <Link to={`${url}/manageAllCollections`}>
                  <li className="dashboard-menu">Manage Collections</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <p className="top ps-5 pt-2  text-white fs-4 fw-bold">Dashboard</p>
            <Switch>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/addCollection`}>
                <AddCollection></AddCollection>
              </Route>
              <Route path={`${path}/review`}>
                <AddReview></AddReview>
              </Route>

              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/addService`}>
                <AddCollection></AddCollection>
              </Route>
              <Route path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path={`${path}/manageAllCollections`}>
                <ManageCollections></ManageCollections>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
