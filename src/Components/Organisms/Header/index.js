import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Badge, Button, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DialogBox from "../DialogBox";
import Login from "../Login";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="container">
        <div className="rtNavContainer">
          <div className="topContainer">
            <div className="logoContainer">
              <img src="/assets/images/main_logo.png" />
            </div>
            <div className="srchContainer">
              <input className="srchInpt" placeholder="Search..." />
              <Button className="srchBtn">
                <span className="material-icons">search</span>
              </Button>
            </div>
            <div className="iconStack">
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <span className="material-icons-outlined">shopping_cart</span>
                </Badge>
              </IconButton>
              <div className="acVWCntnr">
                <span className="material-icons-outlined">account_circle</span>
                <a className="cursorDecoy" onClick={() => setLoginModal(true)}>
                  Login
                </a>{" "}
                &nbsp;/&nbsp;
                <a className="cursorDecoy" onClick={() => setLoginModal(true)}>
                  Signup
                </a>
              </div>
            </div>
          </div>
          <div className="bottomContainer">
            <div className="ltNav">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/trending_collections"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Trending Collections
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) => (isActive ? "inactive" : "")}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Skin Care
              </NavLink>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <NavLink
                to="/bath_body"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Bath & Body
              </NavLink>
              <NavLink
                to="/hair_care"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hair Care
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop All
              </NavLink>
            </div>
            <div className="rtSlMda d-flex align-items-center">
              <Link to="">
                <img src="/assets/svg/whatsapp.svg" />
              </Link>
              <Link to="">
                <img src="/assets/svg/fb.svg" />
              </Link>
              <Link to="">
                <img src="/assets/svg/insta.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DialogBox
        className="logPopup"
        open={loginModal}
        handleClose={() => setLoginModal(false)}
        maxWidth="md"
      >
        <Login />
      </DialogBox>
    </header>
  );
};

export default Header;
