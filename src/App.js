import React, { Component } from 'react';
import Toolbar from "./components/Header/Toolbar"
import Messages from "./components/Messages"
import './App.css';

const baseURL = 'https://inbox-react.herokuapp.com/api'

export default class App extends Component {

  constructor() {
    super()
    this.state = { messages: [], newSub: ""}
  };

  componentDidMount () {
    fetch(`${baseURL}/messages`)
      .then(data => data.json())
      .then(response =>{
        this.setState({messages: response._embedded.messages});
      })
  }

  checkbox (message){
    this.setState((prevState) => {
      const currentChecked = prevState.messages.indexOf(message);
      prevState.messages[currentChecked].checked = !prevState.messages[currentChecked].checked})
    this.setState((prevState) => {
      const currentCheckBox = prevState.messages.indexOf(message);
      prevState.messages[currentCheckBox].checkbox = !prevState.messages[currentCheckBox].checkbox
    })
  };
  emailCheck (message){
    this.setState((prevState) => {
      const currentBodyStatus = prevState.messages.indexOf(message);
      prevState.messages[currentBodyStatus].bodyStatus = !prevState.messages[currentBodyStatus].bodyStatus;
    })
    this.setState((prevState) => {
      const currentRead = prevState.messages.indexOf(message);
      prevState.messages[currentRead].read = true;
      const data = {
        "messageIds": [message.id],
        "command" : "read",
        "read" : true
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${baseURL}/messages`,settings)
        .then(response => {
          if(response.ok){
            console.log(response);
          }
        })
    })
  };
  star (message){
    this.setState((prevState) => {
      const currentStar = prevState.messages.indexOf(message);
      prevState.messages[currentStar].starred = !prevState.messages[currentStar].starred
      const data = {
        "messageIds": [message.id],
        "command": "star",
        "star": prevState.messages[currentStar].starred
      };
      const settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${baseURL}/messages`, settings)
        .then(response => {
          if(response.ok){
            console.log(response);
          }
        })
    })

  };
  composeButton (){
    this.setState ((prevState) => {prevState.messages.composeForm = !prevState.messages.composeForm})
  };
  selectAllButton () {
    this.setState ((prevState) => {
      let selectedBoxCount = 0;
      prevState.messages.map(message => {
        if(message.checked){
          selectedBoxCount++;
        }
      })
      if(0 < selectedBoxCount){
        prevState.messages.map(message => {
          message.checkbox = false;
          message.checked = false;
        })
      }
      else if(selectedBoxCount === 0){
        prevState.messages.map(message => {
          message.checkbox = true;
          message.checked = true;
        })
      }
    })
  };
  markAsReadButton (){
    const msgIds = [];
    this.setState((prevState) => {prevState.messages.map(message => {
      if(message.checked){
        message.read = true;
        msgIds.push(parseInt(message.id));
      }
     })
     const data = {
       "messageIds" : msgIds,
       "command" : "read",
       "read" : true
     };
     const settings = {
       method: 'PATCH',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(data)
     };
     fetch(`${baseURL}/messages`,settings)
      .then(response => {
        if(response.ok){
          console.log(response);
        }
      })
   })
 };
 markAsUnreadButton (){
   const msgIds = [];

   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked){
       message.read = false;
       msgIds.push(message.id);
     }})
     const data = {
       "messageIds" : msgIds,
       "command" : "read",
       "read" : false
     };
     const settings = {
       method : 'PATCH',
       headers : {
         'content-type' : 'application/json'
       },
       body: JSON.stringify(data)
     };
     fetch(`${baseURL}/messages`,settings)
      .then(response => {
        if(response.ok){
          console.log(response);
        }
      })
  })
 };
 addLabel(label) {
   let msgIds = [];
   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked && !message.labels.includes(label)){
       message.labels.push(label)
       msgIds.push(message.id)
     }
    })
    const data = {
      "messageIds" : msgIds,
      "command" : "addLabel",
      "label" : label
    };
    const settings = {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    };
    fetch(`${baseURL}/messages`,settings)
      .then(response => {
        if(response.ok){
          console.log(response);
        }
      })
   })
  };
 removeLabel(label) {
   let msgIds = [];
   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked && message.labels.includes(label)){
       message.labels.splice(message.labels.indexOf(label) ,1);
       msgIds.push(message.id)
     }
   })
   const data = {
     "messageIds" : msgIds,
     "command" : "removeLabel",
     "label" : label
   };
   const settings = {
     method: 'PATCH',
     headers: {
       'content-type' : 'application/json'
     },
     body: JSON.stringify(data)
   }
   fetch(`${baseURL}/messages`,settings)
    .then(response => {
      if(response.ok){
        console.log(response);
      }
    })
  })
 };
 deleteEmail(){
   let msgIds = [];
   this.setState((prevState) => {prevState.messages= prevState.messages.filter(message => {
     if(!message.checked){
       return message
     }
     else {
       msgIds.push(message.id)
     }
    })
    const data = {
      "messageIds" : msgIds,
      "command" : 'delete'
    };
    console.log(data);
    const settings = {
      method : 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    };
    fetch(`${baseURL}/messages`,settings)
      .then(response => {
        if(response.ok){
          console.log(response);
        }
      })
   })
 }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Toolbar messages={this.state.messages} composeButton={this.composeButton.bind(this)}
                   selectAllButton={this.selectAllButton.bind(this)} markAsReadButton={this.markAsReadButton.bind(this)}
                   markAsUnreadButton={this.markAsUnreadButton.bind(this)} addLabel={this.addLabel.bind(this)} removeLabel={this.removeLabel.bind(this)}
                   deleteEmail={this.deleteEmail.bind(this)}/>
          <div>
            <Messages messages={this.state.messages} star={this.star.bind(this)} checkbox={this.checkbox.bind(this)} emailCheck={this.emailCheck.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
