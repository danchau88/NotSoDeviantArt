import {connect} from 'react-redux';
import {login} from './../../actions/session_actions';
import LoginForm from './LoginForm';

const mSTP = (state) => ({
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(LoginForm);
