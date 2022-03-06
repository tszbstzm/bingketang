import React, { useCallback } from "react";
import { Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ICourse } from "@/constant/type";
import UserAvatar from "../UserAvatar";
import { useNavigate } from "react-router-dom";

import style from './index.module.less';
import classnames  from 'classnames';
import { pageType } from "@/pages/Container";

interface Iprops {
  course: ICourse
  className?: string
}

const CourseCard = (props: Iprops) => {
  const { course } = props;
  const navigate = useNavigate();
  
  const handleClick = useCallback(() => {
    navigate(`/${pageType.DetailPage}/${course.id}`);
  }, [course]);

  return (
    <Card cover={<img alt={course.title} src={course.cover}/>} className={classnames(style.card, props.className)} onClick={handleClick}>
      <div>
        <div className={classnames(style.title)}>{course.title}</div>
        <div className={classnames(style.description)}>{course.description}</div>
        <div className={classnames(style.follower)}>
          <UserOutlined className={classnames(style.icon)}/>  
          {course.follower}
        </div>
      </div>
      <div className={classnames(style.avatarwrapper)}>
        <UserAvatar className={classnames(style.avatar)} size={'large'} profile={course.teacher.profile || ''} />
      </div>
    </Card>
  );
};

export default CourseCard;