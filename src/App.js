
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from "./Pages/Shared/Footer/Footer"
import Collections from './Pages/Collections/Collections';

function App() {
  return (
    <div className="app" >
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/collections">
            <Collections></Collections>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
