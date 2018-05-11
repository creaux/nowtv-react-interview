import React from 'react';

const Message = ({ children, email, avatar, date, onMessageOver, onMessageLeave, isMessageOver }) => (
  <li>
    <div>{date}</div>
    <div onMouseOver={onMessageOver} onMouseLeave={onMessageLeave}>{children}</div>
    <div style={{ display: isMessageOver ? 'block' : 'none' }}>{email}</div>
    {avatar ? <img src={avatar} alt='' /> : null}
  </li>
);

export default Message;
