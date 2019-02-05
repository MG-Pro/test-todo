import {TASK_LIST} from '../actions/types';
import database from '../../firebase/firebase';
import {showMessage} from './messageAction';


export const getTasks = () => dispatch => {
  database.ref('tasks').once('value').then(res => {
    const tasks = [];
    res.forEach(item => {
      tasks.push({
        id: item.key,
        ...item.val()
      });
    });
    dispatch({
      type: TASK_LIST,
      payload: tasks
    });
  });
};

export const addTask = (task) => dispatch => {
  database.ref('tasks').push(task)
    .then(() => {
      dispatch(showMessage({type: 'OK', text: 'Task added'}));
      dispatch(getTasks())
    })
    .catch(err => {
      dispatch(showMessage({type: 'err', text: 'Task add error'}));
      console.log(err);
    })
};

export const updateTask = (task) => dispatch => {
  database.ref(`tasks/${task.id}`).update(task)
    .then(() => {
      dispatch(showMessage({type: 'OK', text: 'Task updated'}));
      dispatch(getTasks())
    })
    .catch(err => {
      dispatch(showMessage({type: 'err', text: 'Task update error'}));
      console.log(err);
    })
};
