import {SHOW_MESSAGE} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    default:
      return state
  }
}
