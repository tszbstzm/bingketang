import React, { useMemo } from "react";
import { Avatar, AvatarProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserAvatar = (props: AvatarProps & { profile: string }) => {
  const { profile, ...rest } = props;
  
  const avatarContent = useMemo(() => {
    return profile !== '' ? { src: profile } : { icon: <UserOutlined /> };
  }, [profile]);

  return (
    <Avatar {...rest} {...avatarContent} />
  );
};

export default UserAvatar;