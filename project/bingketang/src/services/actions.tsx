import React from "react";
import { IChat } from "@/constant/type";
import { createChat, createMessage, currentUser, createCourse, nullUser } from "@/test/test";
import { UserOutlined } from "@ant-design/icons";

export const getCurrentUser = () => {
  return nullUser;
  // return currentUser;
};

export const getChats = (num: number) => {
  return Array.from({ length: num }, (value, index) => createChat(String(10000000 + index * 10000)));
};

export const getMessages = (chat: IChat) => {
  const randomNumber = Math.ceil(Math.random() * 20);
  return Array.from({ length: randomNumber },
    (value, index) => createMessage(String(Number(chat.id) + index), chat));
};

export const getCourses = (num: number) => {
  return Array.from({ length: num }, (value, index) => createCourse(String(20000000 + index * 10000)));
};

export const getAvatarProps = (profile: string) => {
  return profile !== '' ? { src: profile } : { icon: <UserOutlined /> };
};