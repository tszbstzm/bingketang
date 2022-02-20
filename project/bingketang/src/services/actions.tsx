import React from "react";
import { IChat } from "@/constant/type";
import { createCourse } from "@/test/test";
import { UserOutlined } from "@ant-design/icons";

export const getCourses = (num: number) => {
  return Array.from({ length: num }, (value, index) => createCourse(String(20000000 + index * 10000)));
};

export const getAvatarProps = (profile: string) => {
  return profile !== '' ? { src: profile } : { icon: <UserOutlined /> };
};