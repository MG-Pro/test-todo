import {EDIT_MODE} from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case EDIT_MODE:
      return action.payload;
    default:
      return state
  }
}
