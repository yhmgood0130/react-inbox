import React, { Component } from 'react';
import NewMessage from "../NewMessage";
import Message from "../Message";

const Toolbar = ({messages,composeButton, selectAllButton}) => {
    props: {
      composeButton:composeButton
    }

    var view;
    if(messages.composeForm){
      view = <NewMessage />;
    }

    const composeBox = messages.composeForm ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>
    let selectBox;
    let countSelectBox = 0;
    messages.map(message => { if(message.checked){countSelectBox++ } });
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
            <span className="badge badge">2</span>
            unread messages
          </p>

          <a className="btn btn-danger" onClick={() => composeButton(messages)}>{composeBox}</a>

          <button className="btn btn-default" onClick={() => selectAllButton(messages)}>{selectBox}</button>


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

export default Toolbar
