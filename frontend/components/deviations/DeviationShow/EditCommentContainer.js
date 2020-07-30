import { connect } from 'react-redux';
import EditComment from './EditComment';
import { getAllComments, updateComment } from '../../../actions/comments_actions';

const mSTP = (state, ownProps) => ({
  comment: state.entities.comments[ownProps.match.params.id],
}); 

const mDTP = dispatch => ({
  getAllComments: (deviationId) => dispatch(getAllComments(deviationId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
})

export default connect(mSTP, mDTP)(EditComment);