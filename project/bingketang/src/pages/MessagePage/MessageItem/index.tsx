import React from "react";
import { IChat } from "@/constant/type";
import Avatar from "antd/lib/avatar/avatar";
import { getAvatarProps } from "@/services/actions";

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
      <Avatar className={classnames(style.avatar)} {...getAvatarProps(chat.toUser.profile)} />
      <div>{chat.toUser.nickname}</div>
    </li>
  );
};

export default MessageItem;