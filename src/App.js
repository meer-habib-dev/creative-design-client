import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import NotFound from "./Components/Pages/404Page/NotFound";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import DesignDetails from "./Components/Pages/DesignDetails/DesignDetails";
import Designs from "./Components/Pages/Designs/Designs/Designs";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login/Login";
import AdminRoute from "./Components/Pages/Login/PrivateRoute/AdminRoute";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Pages/Login/Register/Register";
import PlaceOrder from "./Components/Pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/design">
            <Designs></Designs>
          </Route>
          <Route path="/designDetails/:designId">
            <DesignDetails></DesignDetails>
          </Route>
          <PrivateRoute path="/placeorder/:designId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
