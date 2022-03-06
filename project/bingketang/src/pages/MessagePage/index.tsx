import React, { useEffect, useState } from "react";
import MessageDetail from "./MessageDetail";
import MessageItem from "./MessageItem";
import { IChat, IUser } from "@/constant/type";
import { getChats, nullChat } from "@/services/message";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  currentUser: IUser;
}

const MessagePage = (props: Iprops) => {
  const [chatList, setChatlist] = useState<IChat[]>([]);
  const [chat, setChat] = useState<IChat>(nullChat);
  const [chatActive, setChatActive] = useState(false);

  useEffect(() => {
    getChats(props.currentUser).then(
      value => {
        setChatlist(value);
        setChat(value[0]);
    });
  }, []);

  if (!props.currentUser || !props.currentUser.id) return null;

  return (
    <div className={classnames(style.messagepage)}>
      <ul className={classnames(style.messageitem, chatActive && 'xs_hidden')}>
        {chatList.map((value, index) => <MessageItem key={index} chat={value} onClick={() => {setChat(value); setChatActive(true);}}/>)}
      </ul>
      <MessageDetail
        className={classnames(style.messagedetail,  !chatActive && 'xs_hidden')}
        chat={chat} 
        onBack={() => setChatActive(false)}
        currentUser={props.currentUser}
      />
    </div>
  );
};

export default MessagePage;