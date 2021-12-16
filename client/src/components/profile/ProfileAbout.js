import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function ProfileAbout({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) {
  const mappedSkills = skills.map((skill, inx) => (
    <div key={inx} className="p-1">
      <i className="fa fa-check"></i> {skill}
    </div>
  ));
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name}'s Bio</h2>
          <p>{bio}</p> <div className="line"></div>
        </Fragment>
      )}
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">{mappedSkills}</div>
    </div>
  );
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
