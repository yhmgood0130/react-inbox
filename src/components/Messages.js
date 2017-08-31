import React, { Component } from 'react';
import Message from './Message'

const Messages = ({messages}) => {
  return (
    <div>
    {messages.map(message =>
      <Message key={message.id} message={ message } />
     )
    }
    </div>
  )
}

export default Messages
