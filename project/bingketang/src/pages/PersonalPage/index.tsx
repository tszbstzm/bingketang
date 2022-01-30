import React, { useState } from "react";
import { getAvatarProps, getCurrentUser } from "@/services/actions";
import { Avatar, Button } from "antd";
import { CHANGE_PASSWORD, CHANGE_PROFILE, QUIT } from "@/constant/text";

import style from './index.module.less';
import classnames  from 'classnames';

const PersonalPage = () => {
  const currentUser = getCurrentUser();
  const handleQuit = () => {};
  const handleChangeProfile = () => {};
  const handlePassword = () => {};

  return (
    <div className={classnames(style.personalpage)}>
      <Avatar className={classnames(style.avatar)} size={'large'} {...getAvatarProps(currentUser.profile)} />
      <div className={classnames(style.nickname, style.text)}>{currentUser.nickname}</div>
      <div className={classnames(style.mail, style.text)}>{currentUser.mail}</div>
      <Button className={classnames(style.button)}>{CHANGE_PROFILE}</Button>
      <Button className={classnames(style.button)}>{CHANGE_PASSWORD}</Button>
      <Button className={classnames(style.button)}>{QUIT}</Button>
    </div>
  );
};

export default PersonalPage;