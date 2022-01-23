import React, { useState } from "react";
import MessageDetail from "./MessageDetail";
import MessageItem from "./MessageItem";
import { getChats } from "@/services/actions";

import style from './index.module.less';
import classnames  from 'classnames';

const messagePage = () => {
  const messageList = getChats(8);
  const [chat, setChat] = useState(messageList[0] || null);

  return (
    <div className={classnames(style.messagepage)}>
      <ul className={classnames(style.messageitem)}>
        {messageList.map((value, index) => <MessageItem key={index} chat={value} onClick={() => {setChat(value);}}/>)}
      </ul>
      <MessageDetail className={classnames(style.messagedetail)} chat={chat}/>
    </div>
  );
};

export default messagePage;