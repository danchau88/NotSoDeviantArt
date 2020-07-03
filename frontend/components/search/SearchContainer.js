import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import { getAllDeviations, findDeviations } from '../../actions/deviations_actions';


const mSTP = state => ({
    deviations: Object.values(state.entities.deviations)
});

const mDTP = dispatch => ({
    getAllDeviations: () => dispatch(getAllDeviations()),
    findDeviations: (string) => dispatch(findDeviations(string))
});

export default connect(mSTP, mDTP)(SearchForm);