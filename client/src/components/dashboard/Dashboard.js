import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardAction from "./DashboardAction";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = (props) => {
  console.log("look for experience", props);
  useEffect(() => {
    props.getCurrentProfile();
  }, []);
  return props.profile.loading && props.profile.profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i>Welcome{" "}
        {props.auth.user && props.auth.user.name}{" "}
      </p>
      {props.profile.profile !== null ? (
        <Fragment>
          <DashboardAction />
          { props.profile.profile.experience.length !== 0 ? <Experience experience={props.profile.profile.experience} />: " "}
         { props.profile.profile.education.length !== 0 ? <Education education={props.profile.profile.education} /> : " "}
          <div className="my-2">
          <button
            className="btn btn-danger"
            onClick={() => props.deleteAccount()}
          >
            <i className="fas fa-user-minus"></i> Delete My Account
          </button>
        </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" classname="btn btn-primary my-1">
            create profile
          </Link>
        </Fragment>
      )}
       <Fragment>

      </Fragment>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
