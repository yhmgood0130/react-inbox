import React, { Component } from 'react';
import MessageList from './MessageData'

const baseURL = 'https://inbox-react.herokuapp.com/api'

export default class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {subject: '', content: '', toggleOn: this.toggleOn}
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    let newData = {
      "subject": this.subject.value,
      "body":this.content.value
    };

    let settings = {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newData)
    }

    fetch(`${baseURL}/messages`,settings)
      .then(response => {
        if(response.ok){
          window.location.reload()
        }
      })
    MessageList.push({ id:MessageList.length + 1, subject:this.subject.value , read: false, starred: false, selected: false, labels:[]})

    event.preventDefault();
  };
  render() {
    return (
      <form className="form-horizontal well" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label for="subject" className="col-sm-2 control-label">Subject</label>
        <div className="col-sm-8">
          <input type="text" className="form-control" defaultValue="" ref={(subject) => this.subject = subject}  id="subject" placeholder="Enter a subject" name="subject"  />
        </div>
      </div>
      <div className="form-group">
        <label for="body" className="col-sm-2 control-label">Body</label>
        <div className="col-sm-8">
          <textarea name="body" id="body" defaultValue="" ref={(content) => this.content = content} className="form-control" ></textarea>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </div>
    </form>
    )
  }
}
