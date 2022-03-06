import React, { useMemo } from "react";
import { Avatar, AvatarProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

import style from './index.module.less';
import classnames  from 'classnames';

const UserAvatar = (props: AvatarProps & { profile: string }) => {
  const { profile, className, ...rest } = props;

  console.log('******', props, style.useravatar);
  
  const avatarContent = useMemo(() => {
    return profile !== '' ? { src: profile } : { icon: <UserOutlined /> };
  }, [profile]);

  return (
    <Avatar className={classnames(style.useravatar, className)} {...rest} {...avatarContent} />
  );
};

export default UserAvatar;