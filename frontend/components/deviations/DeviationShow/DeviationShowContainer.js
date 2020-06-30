import {connect} from 'react-redux';
import DeviationShow from './DeviationShow';
import { getDeviation } from '../../../actions/deviations_actions';
import { getUser } from '../../../actions/users.actions';

const mSTP = (state, ownProps) => {
    const deviation = state.entities.deviations[ownProps.match.params.id];
    return {
        deviation: deviation,
        artist: deviation && state.entities.users[deviation.artist_id],
    }
};

const mDTP = dispatch => ({
    getDeviation: (deviationId) => dispatch(getDeviation(deviationId)),
    getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(DeviationShow);