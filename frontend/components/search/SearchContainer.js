import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import { getAllDeviations } from '../../util/deviations_api_util';
import { searchDeviations } from '../../actions/search_actions';

const mSTP = state => ({
    deviations: Object.values(state.entities.deviations)
});

const mDTP = dispatch => ({
    getAllDeviations: () => dispatch(getAllDeviations),
    searchDeviations: (title) => dispatch(searchDeviations(title))
});

export default connect(mSTP, mDTP)(SearchForm);