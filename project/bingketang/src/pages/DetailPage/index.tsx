import React, { useCallback, useEffect, useState } from "react";
import { Button, Image } from "antd";
import { ICourse, IUser } from "@/constant/type";
import UserAvatar from "@/components/UserAvatar";
import { getCourse, nullCourse } from "@/services/courses";
import { JOIN_A_COURSE } from "@/constant/text";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  courseid: string;
  currentUser: IUser;
}

const DetailPage = (props: Iprops) => {
  const { currentUser, courseid } = props;
  const [course, setCourse] = useState<ICourse>(nullCourse);

  useEffect(() => {
    getCourse(courseid).then(
      value => {
        setCourse(value);
    });
  }, [courseid]);

  const handleClick = useCallback(() => {
    console.log('****', currentUser, course);
  }, [currentUser, course]);

  if (!course || !course.id || !props.currentUser || !props.currentUser.id) return null;

  return (
    <div className={classnames(style.detailpage)}>
      <div className={classnames(style.coursedes)}>
        <div className={classnames(style.coursetext)}>
          <div className={classnames(style.title)}>{course.title}</div>
          <div className={classnames(style.description)}>{course.description}</div>
        </div>
        <div className={classnames(style.courseinfo)}>
          <UserAvatar className={classnames(style.avatar)} size={'large'} profile={course.teacher.profile || ''} />
          <Button className={classnames(style.button)} onClick={handleClick}>{JOIN_A_COURSE}</Button>
        </div>
      </div>
      <div className={classnames(style.coverwrapper)}>
        <Image src={course.cover} preview={false}/>
      </div>
    </div>
  );
};

export default DetailPage;