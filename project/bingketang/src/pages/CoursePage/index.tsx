import React, { useState } from "react";
import { getCourses } from "@/services/actions";
import { filterType } from "../Container";
import { Button } from "antd";
import { MY_STUDY_COURSE, MY_TEACH_COURSE } from "@/constant/text";
import CourseCard from "@/components/CourseCard";

import style from './index.module.less';
import classnames  from 'classnames';

const CoursePage = () => {
  const [course, setCourse] = useState(getCourses(20));
  const [filter, setFilter] = useState(filterType.MyStudyCourse);

  const handleChangeFilter = (thisFilter: number) => {
    if (thisFilter === filter) {
      return;
    }
    if (thisFilter === filterType.MyStudyCourse) {
      setFilter(filterType.MyStudyCourse);
      setCourse(getCourses(20));
    } else if (thisFilter === filterType.MyTeachCourse) {
      setFilter(filterType.MyTeachCourse);
      setCourse(getCourses(5));
    }
  };

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