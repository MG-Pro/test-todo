import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import {getTasks, addTask} from '../store/actions/taskActions'
import {editModeToggle} from '../store/actions/editModeAction'
import Task from './Task';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskModal: false,
      currentEditTask: null
    }
  }

  componentDidMount() {
    this.props.getTasks();
  }


  openTask = (task = null) => {
    this.setState({
      taskModal: true,
      currentEditTask: task
    })
  };

  closeTask = () => {
    this.setState({
      taskModal: false
    })
  };

  editToggle = e => {
    this.props.editModeToggle(e.currentTarget.checked);
  };

  render() {
    const {state, props} = this;
    return (
      <div className='list pt-3 pb-3'>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h3>Tasks</h3>
            </div>
            <div className="col">
              {props.message &&
              <h4 className={props.message.type === 'err' ? 'text-danger' : 'text-success'}>
                {props.message.text}
              </h4>}
            </div>
            <div className="col-2">
              <p className="text-right">Task count: {props.tasks.length}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-right font-weight-bold mb-3">
              <button onClick={this.openTask} className='btn btn-secondary mr-3'>Add Task</button>
              <label className='list-edit-action'>
                <span className='mr-2'>Edit Mode</span>
                <input type="checkbox" onChange={this.editToggle} checked={props.editMode}/>
              </label>
            </div>
          </div>
          <div className="row">
            <ul className='w-100 col' style={{listStyle: 'none'}}>
              {!props.tasks.length && <h6 className='text-muted'>You don't have tasks</h6>}
              {props.tasks.map((item, i) => {
                return <TaskItem task={item} key={i} actions={{view: this.openTask}}/>
              })}
            </ul>
          </div>
        </div>
        {state.taskModal &&
        <Task task={state.currentEditTask} close={this.closeTask}/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  message: state.message,
  editMode: state.editMode
});

export default connect(mapStateToProps, {getTasks, addTask, editModeToggle})(List);
