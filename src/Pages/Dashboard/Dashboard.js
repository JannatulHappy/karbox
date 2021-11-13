import React from "react";
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
import AdminRoute from "../AdminRoute/AdminRoute";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, admin, logout } = useAuth();

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard mt-5 pt-3">
              <h5 className="text-black ms-2  fw-bold fs-4">Dashboard</h5>
              {/* link for nested route */}
              <div className="admin-dashboard mt-0">
                {!admin && (
                  <div>
                    <Link to={`/home`}>
                      <li className="dashboard-menu "><i className="fas fa-home me-2"></i>Home</li>
                    </Link>
                    <Link to={`${url}`}>
                      <li className="dashboard-menu "><i className="fab fa-first-order me-2"></i>My Orders</li>
                    </Link>
                    <Link to={`${url}/payment`}>
                      <li className="dashboard-menu "><i className="fas fa-shopping-cart me-2"></i>Payment</li>
                    </Link>
                    <Link to={`${url}/review`}>
                      <li className="dashboard-menu mb-4"><i className="fas fa-user-edit me-2"></i>Add Review</li>
                    </Link>
                    {user?.email && (
                      <button
                        className=" btn dashboard-btn  text-uppercase"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                )}

                {admin && (
                  <div>
                    {admin && (
                      <Link to={`${url}`}>
                        <li className="dashboard-menu "><i className="fas fa-car me-2"></i>Add Collection</li>
                      </Link>
                    )}
                    {admin && (
                      <Link to={`${url}/makeAdmin`}>
                        <li className="dashboard-menu "><i className="fas fa-unlock-alt me-2"></i>Make Admin</li>
                      </Link>
                    )}
                    {admin && (
                      <Link to={`${url}/manageAllOrders`}>
                        <li className="dashboard-menu "><i className="fab fa-first-order-alt me-2"></i>Manage Orders</li>
                      </Link>
                    )}
                    {admin && (
                      <Link to={`${url}/manageAllCollections`}>
                        <li className="dashboard-menu mb-4"><i className="fas fa-tasks me-2"></i>Manage Collections</li>
                      </Link>
                    )}
                    {admin && (
                      <button
                        className=" btn  dashboard-btn  text-uppercase"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* nested route */}
          <div className="col-md-9">
            <p className="top ps-5 pt-2  text-white fs-4 fw-bold"></p>
            {/* for user */}
            {!admin && (
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
                <Route path={`${path}/review`}>
                  <AddReview></AddReview>
                </Route>
              </Switch>
            )}
            {/* for admin */}
            {admin && (
              <Switch>
                <AdminRoute exact path={ path }>
                  <AddCollection></AddCollection>
                </AdminRoute>

                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addService`}>
                  <AddCollection></AddCollection>
                </AdminRoute>
                <AdminRoute path={`${path}/manageAllOrders`}>
                  <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/manageAllCollections`}>
                  <ManageCollections></ManageCollections>
                </AdminRoute>
              </Switch>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
