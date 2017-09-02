import React, { Component } from 'react';
import Toolbar from "./components/Header/Toolbar"
import Message from "./components/Message"
import Messages from "./components/Messages"
import MessageData from "./components/MessageData"
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: MessageData}
  };

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
      prevState.messages[currentBodyStatus].bodyStatus = !prevState.messages[currentBodyStatus].bodyStatus
    })
    this.setState((prevState) => {
      const currentRead = prevState.messages.indexOf(message);
      prevState.messages[currentRead].read = true
    })
  };
  star (message){
    this.setState((prevState) => {
      const currentStar = prevState.messages.indexOf(message);
      prevState.messages[currentStar].starred = !prevState.messages[currentStar].starred
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
      else if(selectedBoxCount == 0){
        prevState.messages.map(message => {
          message.checkbox = true;
          message.checked = true;
        })
      }
    })
  };
  markAsReadButton (){
    this.setState((prevState) => {prevState.messages.map(message => {
      if(message.checked){
        message.read = true;
      }
     }
    )
   })
 };
 markAsUnreadButton (){
   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked){
       message.read = false;
     }})
  })
 };
 addLabel(label) {
   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked && !message.labels.includes(label)){
       message.labels.push(label)
     }
    })}
   )
  };
 removeLabel(label) {
   this.setState((prevState) => {prevState.messages.map(message => {
     if(message.checked && message.labels.includes(label)){
       console.log(label);
       message.labels.splice(prevState.messages.indexOf(label),1);
     }
   })}
  )
 };
 deleteEmail(){
   this.setState((prevState) => {prevState.messages= prevState.messages.filter(message => {
     if(!message.checked){
       return message
     }
   }
  )})
 }
 addEmail(){

 }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Toolbar messages={this.state.messages} composeButton={this.composeButton.bind(this)} selectAllButton={this.selectAllButton.bind(this)} markAsReadButton={this.markAsReadButton.bind(this)} markAsUnreadButton={this.markAsUnreadButton.bind(this)} addLabel={this.addLabel.bind(this)} removeLabel={this.removeLabel.bind(this)} deleteEmail={this.deleteEmail.bind(this)}/>
          <div>
            <Messages messages={this.state.messages} star={this.star.bind(this)} checkbox={this.checkbox.bind(this)} emailCheck={this.emailCheck.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
