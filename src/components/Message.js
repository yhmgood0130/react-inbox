import React, { Component } from 'react';
import Toolbar from './Header/Toolbar'

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.checkbox = this.checkbox.bind(this);
    this.star = this.star.bind(this);
    this.body = this.body.bind(this);
    this.state = {
        labels: props.message.labels,
        bodyStatus:false,
        checked: false,
        checkbox: false,
        starred: props.message.starred,
        read: props.message.read
    };
  };
  checkbox (){
    const currentCheckBox = this.state.checkbox;
    const currentChecked = this.state.checked;
    this.setState({checked:!currentChecked})
    this.setState({checkbox:!currentCheckBox})
  };
  body (){
    const currentBodyStatus = this.state.bodyStatus;
    const currentRead = this.state.read;
    this.setState({read: true})
    this.setState({bodyStatus:!currentBodyStatus})
  }
  star (){
    const currentStar = this.state.starred;
    this.setState({starred:!currentStar})
  };
  
  render(){
    const stars = this.state.starred ? "star fa fa-star" : "star fa fa-star-o"
    const starButton = this.state.starred ? <i className={stars} onClick={this.star} ></i> : <i className={stars} onClick={this.star} ></i>
    const reads = this.state.read ? "row message read" : "row message unread"
    const checkbox = this.state.checkbox ? " selected" : ""
    const checked = this.state.checked ? "checked" : ""
    const bodyStatus = this.state.bodyStatus ?
                        <div className="row message-body">
                          <div className="col-xs-11 col-xs-offset-1">
                            {this.props.message.subject}
                          </div>
                        </div>
                        :
                        " "
    const readStatus = reads
    const labels = this.state.labels ? this.props.message.labels.map(lab => <span key={lab.id} className="label label-warning">{lab}</span>) : " "
    return (
            <div>
              <div className={readStatus + checkbox}>
                <div className="col-xs-1">
                  <div className="row">
                    <div className="col-xs-2">
                      <input type="checkbox" checked={checked} onClick={this.checkbox} />
                    </div>
                    <div className="col-xs-2">
                      {starButton}
                    </div>
                  </div>
                </div>
                <div className="col-xs-11">
                  {labels}
                  <a href="#" onClick={this.body}>
                    {this.props.message.subject}
                  </a>
                </div>
              </div>
              {bodyStatus}
            </div>
    )
  }
}
