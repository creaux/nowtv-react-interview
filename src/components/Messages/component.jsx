import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => (
  <ul>
    {messages.map(({ id, userId, message, timestamp }) => (
      <Message key={id} userId={userId} timestamp={timestamp}>{message}</Message>
    ))}
  </ul>
);

export default Messages;
