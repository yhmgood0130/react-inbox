import React from 'react';
import NewMessage from "../NewMessage"

const Toolbar = ({messages,composeButton, selectAllButton, markAsReadButton, markAsUnreadButton, addLabel, removeLabel, deleteEmail}) => {

    var view;
    if(messages.composeForm){
        view = <NewMessage toggleOn={messages.composeForm}/>;
    }


    let count = 0;
    const NumOfUnreadMsg = messages.filter(message => !message.read).length
    const composeBox = messages.composeForm ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>
    let selectBox;
    let countSelectBox = 0;
    messages.map(message => { if(message.checked){countSelectBox++} });
    if(countSelectBox === 0){
      selectBox = <i className="fa fa-square-o"></i>
    }
    else if(countSelectBox === messages.length){
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
