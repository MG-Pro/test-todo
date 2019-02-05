import React from 'react';
import {connect} from 'react-redux';
import {updateTask, deleteTask} from '../store/actions/taskActions';


const TaskItem = ({task, editMode, actions, updateTask, deleteTask}) => {

  const completeTask = () => {
    updateTask({
      ...task,
      complete: true,
    })
  };

  return (
    <li className='mb-3 task'>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h5 className={`card-title ${task.complete ? 'not-active-text' : ''}`}>{task.title}</h5>
            </div>
            <div className="col-4 text-right align-self-end">
              <div className="btn-group btn-group-sm">
                <button onClick={() => actions.view(task)} className="btn btn-dark">{!editMode ? 'View' : 'Edit'}</button>
                <button onClick={() => deleteTask(task)} disabled={!task.complete || !editMode} className="btn btn-danger">Delete</button>
                <button onClick={completeTask} disabled={task.complete || !editMode} className="btn btn-success">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
};

const mapStateToProps = state => ({
  editMode: state.editMode
});

export default connect(mapStateToProps, {updateTask, deleteTask})(TaskItem);
