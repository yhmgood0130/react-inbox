import React, { Component } from 'react';
import Message from "../Message";

const Toolbar = ({messages,composeButton, selectAllButton, markAsReadButton, markAsUnreadButton, addLabel, removeLabel, deleteEmail}) => {

    var view;
    if(messages.composeForm){
        view = <form className="form-horizontal well">
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label for="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" />
          </div>
        </div>
        <div className="form-group">
          <label for="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </div>
      </form>;
    }

    let count = 0;
    const NumOfUnreadMsg = messages.filter(message => !message.read).length
    const composeBox = messages.composeForm ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>
    let selectBox;
    let countSelectBox = 0;
    messages.map(message => { if(message.checked){countSelectBox++} });
    if(countSelectBox == 0){
      selectBox = <i className="fa fa-square-o"></i>
    }
    else if(countSelectBox == messages.length){
      selectBox = <i className="fa fa-check-square-o"></i>
    }
    else {
      selectBox = <i className="fa fa-minus-square-o"></i>
    }

    return (
    <div>
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{NumOfUnreadMsg}</span>
            unread messages
          </p>

          <a className="btn btn-danger" onClick={() => composeButton(messages)}>{composeBox}</a>

          <button className="btn btn-default" onClick={() => selectAllButton(messages)}>{selectBox}</button>


          <button className="btn btn-default" onClick={() => markAsReadButton(messages)}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={() => markAsUnreadButton(messages)}>
            Mark As Unread
          </button>

          <select className="form-control label-select" onChange={(event) => addLabel(event.target.value)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={(event) => removeLabel(event.target.value)}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={() => deleteEmail(messages)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
      {view}
    </div>
  )
}

export default Toolbar
