import React, { useEffect, useState } from "react";
import { filterType } from "../Container";
import { Button } from "antd";
import { MY_STUDY_COURSE, MY_TEACH_COURSE } from "@/constant/text";
import CourseCard from "@/components/CourseCard";
import { ICourse, IUser } from "@/constant/type";
import { getMyStudyCourses, getMyTeachCourses } from "@/services/courses";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  currentUser: IUser;
}

const CoursePage = (props: Iprops) => {
  const [course, setCourse] = useState<ICourse[]>([]);
  const [filter, setFilter] = useState(filterType.MyStudyCourse);

  useEffect(() => {
    if (filter === filterType.MyStudyCourse) {
      getMyStudyCourses(props.currentUser).then(
        value => {
          setCourse(value);
      });
    } else if (filter === filterType.MyTeachCourse) {
      getMyTeachCourses(props.currentUser).then(
        value => {
          setCourse(value);
      });
    }
  }, [filter]);

  const handleChangeFilter = (thisFilter: number) => {
    if (thisFilter === filter) {
      return;
    }
    if (thisFilter === filterType.MyStudyCourse) {
      setFilter(filterType.MyStudyCourse);
    } else if (thisFilter === filterType.MyTeachCourse) {
      setFilter(filterType.MyTeachCourse);
    }
  };

  if (!props.currentUser || !props.currentUser.id) return null;

  return (
    <div className={classnames(style.coursepage)}>
      <Button 
        onClick={() => handleChangeFilter(filterType.MyStudyCourse)} 
        className={classnames(style.button, filter === filterType.MyStudyCourse && style.activebutton)}>
        {MY_STUDY_COURSE}
      </Button>
      <Button 
        onClick={() => handleChangeFilter(filterType.MyTeachCourse)} 
        className={classnames(style.button, filter === filterType.MyTeachCourse && style.activebutton)}>
        {MY_TEACH_COURSE}
      </Button>
      <div className={classnames(style.coursewrapper)}>
        {course.map((value, index) => <CourseCard course={value} key={index} className={classnames(style.course)}/>)}
      </div>
    </div>
  );
};

export default CoursePage;