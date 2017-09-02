import React, { Component } from 'react';

const Message = ({message, star, checkbox, emailCheck}) => {
    const stars = message.starred ? "star fa fa-star" : "star fa fa-star-o"
    const starButton = message.starred ? <i className={stars} onClick={() => star(message)} ></i> : <i className={stars} onClick={() => star(message)} ></i>
    const reads = message.read ? "row message read" : "row message unread"
    const checkBox = message.checkbox ? " selected" : ""
    const checked = message.checked ? "checked" : ""
    const bodyStatus = message.bodyStatus ?
                        <div className="row message-body">
                          <div className="col-xs-11 col-xs-offset-1">
                            {message.subject}
                          </div>
                        </div>
                        :
                        " "
    const readStatus = reads
    const labels = message.labels ? message.labels.map(lab => <span key={lab.id} className="label label-warning">{lab}</span>) : " "
    return (
            <div>
              <div className={readStatus + checkBox}>
                <div className="col-xs-1">
                  <div className="row">
                    <div className="col-xs-2">
                      <input type="checkbox" checked={checked} onClick={() => checkbox(message)} />
                    </div>
                    <div className="col-xs-2">
                      {starButton}
                    </div>
                  </div>
                </div>
                <div className="col-xs-11">
                  {labels}
                  <a onClick={() => emailCheck(message)}>
                    {message.subject}
                  </a>
                </div>
              </div>
              {bodyStatus}
            </div>
    )
}

export default Message
