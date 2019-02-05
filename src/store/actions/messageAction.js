import {SHOW_MESSAGE} from '../actions/types';


export const showMessage = (msg) => dispatch => {
  dispatch({
    type: SHOW_MESSAGE,
    payload: msg
  });
};
