import React from "react";
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ICourse } from "@/constant/type";
import { getAvatarProps } from "@/services/actions";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  course: ICourse
  className?: string
}

const CourseCard = (props: Iprops) => {
  const { course } = props;
  return (
    <Card cover={<img alt={course.title} src={course.cover}/>} className={classnames(style.card, props.className)}>
      <div>
        <div className={classnames(style.title)}>{course.title}</div>
        <div className={classnames(style.description)}>{course.description}</div>
        <div className={classnames(style.follower)}>
          <UserOutlined className={classnames(style.icon)}/>  
          {course.follower}
        </div>
      </div>
      <div className={classnames(style.avatarwrapper)}>
        <Avatar className={classnames(style.avatar)} size={'large'} {...getAvatarProps(course.teacher.profile)} />
      </div>
    </Card>
  );
};

export default CourseCard;