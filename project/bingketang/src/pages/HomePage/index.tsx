import React, { useState } from "react";
import { getCourses } from "@/services/actions";
import { Carousel, Pagination, Image } from "antd";
import CourseCard from "@/components/CourseCard";

import style from './index.module.less';
import classnames  from 'classnames';

const HomePage = () => {
  const COURSENUM = 12;
  const SIXNUM = 6;
  const [course, setCourse] = useState(getCourses(COURSENUM * SIXNUM + SIXNUM));
  const [page, setPage] = useState(0);

  const handlePageChange = (_page: number) => {
    setPage(_page - 1);
  };

  return (
    <div className={classnames(style.homepage)}>
      <Carousel autoplay>
        {course.slice(-SIXNUM).map((value, index) => <Image key={index} className={classnames(style.poster)} src={value.longCover} preview={false}/>)}
      </Carousel>
      <div className={classnames(style.coursewrapper)}>
        {course.slice(COURSENUM * page, COURSENUM * (page + 1)).map((value, index) => <CourseCard course={value} key={index} className={classnames(style.course)}/>)}
      </div>
      <Pagination className={classnames(style.pager, 'xs_hidden')} current={page + 1} onChange={handlePageChange} pageSize={COURSENUM} total={COURSENUM * SIXNUM} showSizeChanger={false} />
      <Pagination className={classnames(style.pager, 'sm_hidden', 'md_hidden', 'lg_hidden')} simple current={page + 1} onChange={handlePageChange} pageSize={COURSENUM} total={COURSENUM * SIXNUM} showSizeChanger={false} />
    </div>
  );
};

export default HomePage;