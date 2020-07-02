
export const SEARCH_DEVIATIONS = "SEARCH_DEVIATIONS";

export const searchDeviations = title => dispatch => {
    dispatch({
        type: SEARCH_DEVIATIONS,
        title: title
    })
}