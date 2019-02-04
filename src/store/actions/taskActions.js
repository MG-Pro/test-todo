import {ADD_TASK, UPD_TASK, TASK_LIST, DEL_TASK} from '../actions/types';
import database from '../../firebase/firebase';

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
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_TASK,
        payload: res
      });
      //dispatch(getTasks())
    })
};
