import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Route,Routes,NavLink,Link} from 'react-router-dom';
import Aboutus from './components/aboutus';
import Signup from './components/signup';
import Home from './home';
import logo from './components/images/logo.png';
import Astronomyterms from './components/astronomyterms';
import Planets from './planets';
import Login from './components/login';
import Dwarfplanets from './dwarfplanets';
import Exoplanets from './exoplanets';
import Afterlogin from './components/afterlogin';
import Iss from './components/iss';
import { useSelector } from "react-redux";
import { clearLoginStatus } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

function App() {
  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispatch function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };

  return (
   <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     {isSuccess !== true ? (
                <>
        <div class="container-fluid">
        <div class="container">
          <a class="navbar-brand" href="">
          <Link className="nav-link fs-4" to=""><img src={logo} className="img-fluid animated pulse p-0 "alt="" width="90" height="30"></img></Link>
          </a>
        </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-4" to="">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="astronomyterms">ASTRONOMYTERMS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="aboutus">ABOUTUS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="signup">SIGNUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="login">LOGIN</Link>
              </li>
            </ul>
          </div>
          </div>
          </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown
                    title={userObj.username}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/astronomyterms" element={<Astronomyterms/>}></Route>
      <Route path="/planets" element={<Planets/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dwarfplanets" element={<Dwarfplanets/>}></Route>
      <Route path="/exoplanets" element={<Exoplanets/>}></Route>
      <Route path="/afterlogin" element={<Afterlogin/>}></Route>
      <Route path="/iss" element={<Iss/>}></Route>
    </Routes>
    </div>   
  );
}

export default App;
