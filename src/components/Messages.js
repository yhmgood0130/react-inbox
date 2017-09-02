import React, { Component } from 'react';
import Message from './Message'

const Messages = ({messages, star, checkbox, emailCheck}) => {
  return (
    <div>
    {messages.map(message => (
      <Message key={message.id} message={ message } star={star} checkbox={checkbox} emailCheck={emailCheck}/>))
    }
    </div>
  )
}

export default Messages
