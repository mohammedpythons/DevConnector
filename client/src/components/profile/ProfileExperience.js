import React, { Fragment } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ProfileExperience = ({ profile: { status, experience } }) => {
  const experienceMapped = experience.map((exper, inx) => (
    <div key={inx}>
      <h3 className="text-dark">{exper.title}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{exper.from}</Moment> -{" "}
        {exper.current === false ? (
          <Moment format="YYYY/MM/DD">{exper.to}</Moment>
        ) : (
          "Current"
        )}
      </p>
      <p>
        <strong>Position: </strong>
        {status}
      </p>
      <p>
        {exper.description && (
          <Fragment>
            <strong>Description: </strong>
            {exper.description}{" "}
          </Fragment>
        )}
      </p>
    </div>
  ));
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0 ? experienceMapped : "No Experience credentials"}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
