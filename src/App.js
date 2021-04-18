import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Enroll from "./Components/Dashboard/Enroll/Enroll";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import MyCourse from "./Components/Dashboard/MyCourse/MyCourse";
import Reviews from "./Components/Dashboard/Reviews/Reviews";
import Orders from "./Components/Dashboard/Admin/Orders/Orders";
import AddAdmin from "./Components/Dashboard/Admin/AddAdmin/AddAdmin";
import AddCourse from "./Components/Dashboard/Admin/AddCourse/AddCourse";
import AllCourse from "./Components/Dashboard/Admin/AllCourse/AllCourse";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [enrollCourseInfo, setEnrollCourseInfo] = useState({});
  return (
    <UserContext.Provider
      value={[
        loggedInUser,
        setLoggedInUser,
        enrollCourseInfo,
        setEnrollCourseInfo,
      ]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/enroll">
            <Enroll></Enroll>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/my-course">
            <MyCourse></MyCourse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Reviews></Reviews>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addCourse">
            <AddCourse></AddCourse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/courses">
            <AllCourse></AllCourse>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
