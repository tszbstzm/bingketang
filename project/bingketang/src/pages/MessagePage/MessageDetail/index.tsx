import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IChat, IMessage } from "@/constant/type";
import { getCurrentUser, getMessages } from "@/services/actions";
import { Avatar, Button, Input, message } from 'antd';

import style from './index.module.less';
import classnames  from 'classnames';
import { CANCEL_COMMEN, SEND_COMMEN_MOBILE, SEND_COMMEN_PC } from "@/constant/text";

const { TextArea } = Input;

interface Iprops {
  chat: IChat,
  className: string
}

const messageDetail = (props: Iprops) => {
  const { chat, className } = props;
  const currentUser = getCurrentUser();
  const [messages, setMessages] = useState(getMessages(chat));
  const [value, setValue] = useState('');
  const messcontainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(getMessages(chat));
  }, [chat]);

  useLayoutEffect(() => {
    console.log(messcontainerRef.current);
    if (messcontainerRef.current) {
      messcontainerRef.current.scrollTop = messcontainerRef.current.scrollHeight;
    }
  }, [messages]);

  const renderMessages = () => {
    return (
      <ul>
        {messages.map((value, index) => 
          <li className={classnames(style.mess, value.sendUser.id === currentUser.id && style.fromme)} key={index}>
            <Avatar className={classnames(style.avatar)} src={value.sendUser.profile} />
            <div className={classnames(style.text)}>{value.text}</div>
          </li>
        )}
      </ul>
    );
  };

  const sendMessageValue = (text: string) => {
    return {
      id: String(Number(chat.id) + messages.length),
      chat,
      text,
      sendUser: currentUser,
      sendTime: new Date()
    } as IMessage;
  };

  const handleSend = () => {
    if (value.replace(/[ ]/g,"").replace(/[\r\n]/g,"").length) {
      setMessages(messages.concat(sendMessageValue(value)));
    }
    setValue('');
  };

  return (
    <div className={classnames(className, style.messagedetail)}>
      <div className={classnames(style.messcontainer)} ref={messcontainerRef}>{renderMessages()}</div>
      <div className={classnames(style.input)}>
        <TextArea 
          rows={6}
          value={value}
          bordered={false}
          className={classnames(style.textarea)}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              e.preventDefault();
              if (!e.ctrlKey && !e.metaKey) {
                handleSend();
              } else {
                setValue(value + '\n');
              }
            }
          }}
        />
        <div className={classnames(style.btgroup)}>
          <Button className={classnames(style.button)} onClick={() => setValue('')}>{CANCEL_COMMEN}</Button>
          <Button className={classnames(style.button, style.sendbutton, 'xs_hidden')} onClick={handleSend}>{SEND_COMMEN_PC}</Button>
          <Button className={classnames(style.button, style.sendbutton, 'sm_hidden', 'md_hidden', 'lg_hidden')} onClick={handleSend}>{SEND_COMMEN_MOBILE}</Button>
        </div>
      </div>
    </div>
  );
};

export default messageDetail;