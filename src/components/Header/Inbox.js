import React, { Component } from 'react';
import Emails from '../Emails'

export default class Inbox extends Component {
  render() {
    return (<div>
      {Emails.map(email =>
      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {email.subject}
          </a>
        </div>
      </div>
        )}
        </div>
      )
  }
}
