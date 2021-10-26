import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from 'prop-types'


const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onSubmit = async (e) => {
      e.preventDefault();
      if (password !== password2) {
          props.setAlert("Password do not match", "danger");
      } else{
          props.register({name, email, password})
      }
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            placeholder="Name"
            name="name"

          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            name="password"

          />
        </div>
        <div className="form-group">
          <input
          value={password2}
          onChange={(e) => setFormData({...formData, password2: e.target.value})}
            type="password"
            placeholder="Confirm Password"
            name="password2"

          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}
export default connect(null, { setAlert, register })(Register);
