import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/post";

const CommentItem = ({ post: { comments, _id }, auth, deleteComment }) => {
  const mappedComments = comments.map((comment) => (
    <div key={comment._id} className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${comment.user}`}>
          <img className="round-img" src={comment.avatar} alt="avatar" />
          <h4>{comment.name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{comment.text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{comment.date}</Moment>
        </p>
        {!auth.loading && comment.user === auth.user._id ? (
          <Fragment>
            <button
              onClick={() => deleteComment(_id, comment._id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times"></i>
            </button>
          </Fragment>
        ) : (
          " "
        )}
      </div>
    </div>
  ));
  return <div className="comments">{mappedComments}</div>;
};

CommentItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteComment })(CommentItem);
