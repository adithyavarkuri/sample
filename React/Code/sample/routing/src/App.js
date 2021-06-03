import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import SideNav from './Components/SideNav';
import Home from "./Components/Home";
import About from "./Components/About";
import User from './Components/User';
import NotFound from './Components/NotFound';
export default function App() {
  //Acces using http://localhost:3000/about
  return (
    <div>
      <SideNav></SideNav>
     <Routes>
        <Route path="/" ><Home></Home></Route>
        <Route path="/about"  > <About name ="Adithya"></About></Route>
        <Route path="/home" ><Home></Home></Route>
        <Route path="/user/:name" ><User></User></Route>
        <Route  path='*' ><NotFound></NotFound></Route>
   </Routes>
   </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}