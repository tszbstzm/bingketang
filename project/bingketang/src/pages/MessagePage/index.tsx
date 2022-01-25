import React, { useState } from "react";
import MessageDetail from "./MessageDetail";
import MessageItem from "./MessageItem";
import { getChats } from "@/services/actions";

import style from './index.module.less';
import classnames  from 'classnames';

const MessagePage = () => {
  const messageList = getChats(8);
  const [chat, setChat] = useState(messageList[0] || null);
  const [chatActive, setChatActive] = useState(false);

  return (
    <div className={classnames(style.messagepage)}>
      <ul className={classnames(style.messageitem, chatActive && 'xs_hidden')}>
        {messageList.map((value, index) => <MessageItem key={index} chat={value} onClick={() => {setChat(value); setChatActive(true);}}/>)}
      </ul>
      <MessageDetail className={classnames(style.messagedetail,  !chatActive && 'xs_hidden')} chat={chat} onBack={() => setChatActive(false)}/>
    </div>
  );
};

export default MessagePage;