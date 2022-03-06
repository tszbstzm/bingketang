import React from "react";
import { Button } from "antd";
import { CHANGE_PASSWORD, QUIT } from "@/constant/text";
import { IUser } from "@/constant/type";
import { quitCurrentUser } from "@/services/userinfo";
import emitter from '@/services/utils/events';
import { useNavigate } from "react-router-dom";
import { pageType } from "../Container";
import { openChangePwPanel } from "@/components/changePasswordPanel";
import UserAvatar from "@/components/UserAvatar";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  currentUser: IUser
}

const PersonalPage = (props: Iprops) => {
  const { currentUser } = props;
  const navigate = useNavigate();
  const { ChangePwPanelModal, handleChangePwPanel } = openChangePwPanel();

  const handleQuit = () => {
    quitCurrentUser();
    emitter.emit('QUIT LOGIN USER');
    navigate(`/${pageType.HomePage}`);
  };

  const handlePassword = () => {
    handleChangePwPanel();
  };

  if (!props.currentUser || !props.currentUser.id) return null;

  return (
    <div className={classnames(style.personalpage)}>
      <UserAvatar className={classnames(style.avatar)} size={'large'} profile={currentUser.profile || ''} />
      <div className={classnames(style.nickname, style.text)}>{currentUser.nickname}</div>
      <div className={classnames(style.mail, style.text)}>{currentUser.email}</div>
      <Button className={classnames(style.button)} onClick={handlePassword}>{CHANGE_PASSWORD}</Button>
      <Button className={classnames(style.button)} onClick={handleQuit}>{QUIT}</Button>
      <ChangePwPanelModal />
    </div>
  );
};

export default PersonalPage;