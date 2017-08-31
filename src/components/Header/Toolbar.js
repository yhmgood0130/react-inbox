import React, { Component } from 'react';
import NewMessage from "../NewMessage"

const Toolbar = React.createClass ({
  getInitialState: function() {
    return ({isToggleOn: false,isSelectAll: false})
  },
  handleClick: function() {
    this.setState (prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  },
  checkboxClick: function() {
    this.setState (prevState => ({
      isSelectAll: !prevState.isSelectAll
    }));
  },
  render() {
    var view;
    if(this.state.isToggleOn){
      view = <NewMessage />;
    }
    return (
    <div>
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <a className="btn btn-danger" onClick={this.handleClick}>
              {this.state.isToggleOn ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
          </a>

          <button className="btn btn-default" onClick={this.checkboxClick}>
            {this.state.isSelectAll ? <i className="fa fa-check-square-o"></i> : <i className="fa fa-square-o"></i>}
          </button>

          <button className="btn btn-default">
            Mark As Read
          </button>

          <button className="btn btn-default">
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
      {view}
    </div>
    )
  }
 }
)

export default Toolbar
