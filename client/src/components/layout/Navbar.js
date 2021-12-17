import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Navbar = (props) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard </span>
        </Link>
      </li>
      <li>
        <a onClick={props.logout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm"> Logout </span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!props.auth.loading && (
        <div>{props.auth.isAuthenticated ? authLinks : guestLinks}</div>
      )}
    </nav>
  );
};

Navbar.propsTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(MapStateToProps, { logout })(Navbar);
