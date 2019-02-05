import {EDIT_MODE} from '../actions/types';


export const editModeToggle = (status) => dispatch => {
  dispatch({
    type: EDIT_MODE,
    payload: status,
  });
};
