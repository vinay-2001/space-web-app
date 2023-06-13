import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Aboutus from "./aboutus";
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Astronomyterms from "./astronomyterms";
import Dwarfplanets from '../dwarfplanets';
import Exoplanets from '../exoplanets';
import Afterlogin from './afterlogin';
import Iss from './iss';
import logo from './images/logo.png';
import Planets from './planets';

function Header() {
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
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
        <div class="container">
          <a class="navbar-brand" href="">
            <Link className="nav-link fs-4" to=""><img src={logo} className="img-fluid animated pulse p-0 "alt="" width="90" height="30"></img></Link>
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/astronomyterms">
                      Astronomyterms
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/aboutus">
                      Aboutus
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="5" as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

export default Header;