import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({ profile: { education } }) => {
  const mappedEducation = education.map((edu, inx) => (
    <div key={inx}>
      <h3>{edu.school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.current == false ? (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        ) : (
          "Current"
        )}
      </p>
      <p>
        <strong>Degree: </strong>
        {edu.degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {edu.fieldofstudy}
      </p>
      <p>
        {edu.description && (
          <Fragment>
            {" "}
            <strong>Description: </strong>
            {edu.description}
          </Fragment>
        )}
      </p>
    </div>
  ));
  return (
    <div class="profile-edu bg-white p-2">
      <h2 class="text-primary">Education</h2>
      {education.length > 0 ? mappedEducation : "No education credentials"}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
