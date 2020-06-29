import {connect} from 'react-redux';
import DeviationsIndex from './DeviationsIndex';
import {getAllDeviations} from '../../../actions/deviations_actions';

const mSTP = (state) => ({
    deviations: Object.values(state.entities.deviations),
});

const mDTP = dispatch => ({
    getAllDeviations: () => dispatch(getAllDeviations()),
});

export default connect(mSTP, mDTP)(DeviationsIndex);