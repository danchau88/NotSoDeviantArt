import {connect} from 'react-redux';
import {createDeviation} from '../../../actions/deviations_actions';
import DeviationCreateForm from './deviationCreateForm';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
  createDeviation: (deviation) => dispatch(createDeviation(deviation)),
})

export default connect(mSTP, mDTP)(DeviationCreateForm);