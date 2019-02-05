import React from 'react';
import {connect} from 'react-redux';
import {updateTask} from '../store/actions/taskActions';


const TaskItem = ({task, editMode, actions}) => {


  return (
    <li className='mb-3'>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h5 className={`card-title ${task.status ? 'not-active-text' : ''}`}>{task.title}</h5>
            </div>
            <div className="col-4 text-right align-self-end">
              <div className="btn-group btn-group-sm">
                <button type="button" onClick={() => actions.view(task)} className="btn btn-secondary">View</button>
                <button type="button" disabled={!editMode} className="btn btn-dark">Edit</button>
                <button type="button" disabled={!task.status || !editMode} className="btn btn-danger">Delete</button>
                <button type="button" disabled={!editMode} className="btn btn-success">Complete</button>
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

export default connect(mapStateToProps, {updateTask})(TaskItem);
