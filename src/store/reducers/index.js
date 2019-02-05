import {combineReducers} from 'redux';
import taskReducer from './taskReducer';
import messageReducer from './messageReducer';
import editModeReducer from './editModeReducer';


export default combineReducers({
  tasks: taskReducer,
  message: messageReducer,
  editMode: editModeReducer,

});
