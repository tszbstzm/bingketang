import React from "react";
import { IChat } from "@/constant/type";
import { pageType } from "@/pages/Container";
import { useNavigate } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  chat: IChat,
  onClick?: () => void
}

const MessageItem = (props: Iprops) => {
  const { chat, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li className={classnames(style.item)} onClick={handleClick}>
      <Avatar className={classnames(style.avatar)} src={chat.toUser.profile} />
      <div className={classnames('xs_hidden')}>{chat.toUser.nickname}</div>
    </li>
  );
};

export default MessageItem;