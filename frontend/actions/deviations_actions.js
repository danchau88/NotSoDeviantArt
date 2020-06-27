import * as APIUtil from '../util/deviations_api_util';

export const RECEIVE_ALL_DEVIATIONS = 'RECEIVE_ALL_DEVIATIONS';
export const RECEIVE_DEVIATION = 'RECEIVE_DEVIATION';
export const REMOVE_DEVIATION = 'REMOVE_DEVIATION';
export const RECEIVE_DEVIATION_ERRORS = 'RECEIVE_DEVIATION_ERRORS';

export const receiveAllDeviations = deviations => {
    return { 
        type: RECEIVE_ALL_DEVIATIONS,
        deviations
    };
};

export const receiveDeviation = deviation => {
    return {
        type: RECEIVE_DEVIATION,
        deviation
    };
};

export const removeDeviation = deviationId => {
    return {
        type: REMOVE_DEVIATION,
        deviationId
    };
};

export const receiveDeviationErrors = errors => {
    return {
        type: RECEIVE_DEVIATION_ERRORS,
        errors
    }
};

export const getAllDeviations = () => dispatch => ( 
    APIUtil.getAllDeviations()
    .then(deviations => dispatch(receiveAllDeviations(deviations)))
    .fail((errors) => dispatch(receiveDeviationErrors(errors.responseJSON)))
); 

export const getDeviation = deviationId => dispatch => ( 
    APIUtil.getDeviation(deviationId)
    .then(deviation => dispatch(receiveDeviation(deviation)))
    .fail((errors) => dispatch(receiveDeviationErrors(errors.responseJSON)))
);

export const createDeviation = deviation => dispatch => (
    APIUtil.postDeviation(deviation)
    .then(newDeviation => dispatch(receiveDeviation(newDeviation)))
    .fail((errors) => dispatch(receiveDeviationErrors(errors.responseJSON)))
);

export const updateDeviation = deviation => dispatch => (
    APIUtil.patchDeviation(deviation)
    .then(updatedDeviation => dispatch(receiveDeviation(updatedDeviation)))
    .fail((errors) => dispatch(receiveDeviationErrors(errors.responseJSON)))
);

export const deleteDeviation = deviationId => dispatch => (
    APIUtil.deleteDeviation(deviationId)
    .then(() => dispatch(removeDeviation(deviationId)))
    .fail((errors) => dispatch(receiveDeviationErrors(errors.responseJSON)))
);