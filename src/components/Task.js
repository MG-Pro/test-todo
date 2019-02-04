import React, {Component} from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      title: props.task && props.task.title || '',
      desc: props.task && props.task.desc || '',
      complete: props.task && props.task.complete || false
    }
  }

  close = e => {
    e.preventDefault();
    this.props.actions.close();
  };

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  };

  completeChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.checked
    })
  };

  submit = e => {
    e.preventDefault();
    let errorMsg = '';
    const {title, desc, complete} = this.state;

    if (title.length < 3) {
      errorMsg += 'Title invalid: min 3 char. '
    }
    if (desc.length < 5) {
      errorMsg += 'Description invalid: min 5 char.'
    }

    if (errorMsg) {
      this.setState({
        errorMsg
      })
    } else {
      this.props.actions.save({
        title,
        desc,
        complete
      });
    }
  };

  render() {
    const {props, state} = this;
    return (
      <div className='task'>
        <div className='modal fade show' style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{!props.task ? 'Add Task' : 'Edit Task'}</h5>
              </div>
              <form onSubmit={this.submit}>
                <div className="modal-body">
                  <div className="form-group">
                    <p className="text-danger">{state.errorMsg}</p>
                  </div>
                  <div className="form-group">
                    <label>Task Title</label>
                    <input className="form-control" name='title' value={state.title} onChange={this.inputChange}/>
                  </div>
                  <div className="form-group">
                    <label>Task Description</label>
                    <textarea className="form-control" rows="3" name='desc' value={state.desc}
                      onChange={this.inputChange}/>
                  </div>
                  {props.task &&
                  <div className="form-group">
                    <label className='list-edit-action'>
                      <span className='mr-2'>Status</span>
                      <input type="checkbox" onChange={this.completeChange} name='complete' checked={state.complete}/>
                    </label>
                  </div>
                  }
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={this.close}>Close</button>
                  <button className="btn btn-dark">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </div>
    )
  }
}

export default Task;
