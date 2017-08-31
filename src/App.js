import React, { Component } from 'react';
import Toolbar from "./components/Header/Toolbar"
import Message from "./components/Message"
import Messages from "./components/Messages"
import MessageData from "./components/MessageData"
import './App.css';

const messageData = {
  "id": 1,
  "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
  "read": false,
  "starred": true,
  "labels": ["dev", "personal"]
}

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Toolbar />
            <div>
              <Messages messages={MessageData} />
            </div>
        </div>
      </div>
    );
  }
}
