import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Collections from "./Pages/Collections/Collections";
import CollectionBooking from "./Pages/CollectionBooking/CollectionBooking";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Pages/Contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/collections">
              <Collections></Collections>
            </Route>
            <PrivateRoute path="/collection/:collectionId">
              <CollectionBooking></CollectionBooking>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
