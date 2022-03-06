import React, { useCallback } from "react";
import { IChat } from "@/constant/type";
import UserAvatar from "@/components/UserAvatar";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  chat: IChat,
  onClick?: () => void
}

const MessageItem = (props: Iprops) => {
  const { chat, onClick } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <li className={classnames(style.item)} onClick={handleClick}>
      <UserAvatar className={classnames(style.avatar)} profile={chat.toUser.profile || ''} />
      <div>{chat.toUser.nickname}</div>
    </li>
  );
};

export default MessageItem;