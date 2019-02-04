import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import {getTasks, addTask} from '../store/actions/taskActions'
import Task from './Task';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      taskModal: false,
      currentEditTask: null
    }
  }

  componentDidMount() {
    this.props.getTasks();
  }


  openTask = () => {
    this.setState({
      taskModal: true,
    })
  };

  closeTask = () => {
    this.setState({
      taskModal: false,
    })
  };

  saveTask = (task) => {
    console.log(task);
    this.closeTask();
    this.props.addTask(task);
  };

  editToggle = () => {
    this.setState({
      editMode: !this.state.editMode,
    })
  };

  render() {
    const {state, props} = this;
    return (
        <div className='list pt-3 pb-3'>
          <div className="container">
            <h3>Tasks</h3>
            <div className="row">
              <div className="col text-right font-weight-bold">
                <button onClick={this.openTask} className='btn btn-secondary mr-3'>Add Task</button>
                <label className='list-edit-action'>
                  <span className='mr-2'>Edit Mode</span>
                  <input type="checkbox" onChange={this.editToggle} checked={state.editMode}/>
                </label>
              </div>
            </div>
            <div className="row">
              <ul className='list-group-flush'>
                {!props.tasks.length && <h6 className='text-muted'>You don't have tasks</h6>}
                {props.tasks.map((item, i) => {
                  return <TaskItem task={item} key={i}/>
                })}
              </ul>
            </div>
          </div>
          {state.taskModal &&
          <Task editTask={state.currentEditTask} actions={{close: this.closeTask, save: this.saveTask}}/>}
        </div>
      )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, {getTasks, addTask})(List);
