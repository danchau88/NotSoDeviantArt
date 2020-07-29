import { connect } from 'react-redux';
import EditCommentForm from './EditCommentForm';

const mSTP = (state, ownProps) => ({
  comment: state.entities.comments[ownProps.match.params.id],
}); 