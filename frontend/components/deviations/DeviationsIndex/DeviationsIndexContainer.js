import {connect} from 'react-redux';
import DeviationsIndex from './DeviationsIndex';
import {getAllDeviations} from '../../../actions/deviations_actions';
import { getAllUsers } from '../../../actions/users.actions';

const mSTP = (state) => ({
    deviations: Object.values(state.entities.deviations),
    users: state.entities.users,
});

const mDTP = dispatch => ({
    getAllDeviations: () => dispatch(getAllDeviations()),
    getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mSTP, mDTP)(DeviationsIndex);