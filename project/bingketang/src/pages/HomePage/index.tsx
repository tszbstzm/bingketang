import React, { useEffect, useMemo, useState } from "react";
import { Carousel, Pagination, Image } from "antd";
import CourseCard from "@/components/CourseCard";
import { createLongcovers } from "@/services/longcover";
import { getHomeCourses } from "@/services/courses";
import { ICourse } from "@/constant/type";

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  query?: string;
}

const HomePage = (props: Iprops) => {
  const COURSENUM = 12;
  const PAGENUM = 4;
  const [course, setCourse] = useState<ICourse[]>([]);
  const longcover = useMemo(() => createLongcovers(PAGENUM), []);
  const [page, setPage] = useState(0);
  const { query } = props;

  useEffect(() => {
    getHomeCourses(query || '').then(
      value => {
        setCourse(value);
    });
  }, [query]);

  const handlePageChange = (_page: number) => {
    setPage(_page - 1);
  };

  return (
    <div className={classnames(style.homepage)}>
      <Carousel autoplay>
        {longcover.map((value, index) => <Image key={index} className={classnames(style.poster)} src={value} preview={false}/>)}
      </Carousel>
      <div className={classnames(style.coursewrapper)}>
        {course.slice(COURSENUM * page, COURSENUM * (page + 1)).map((value, index) => <CourseCard course={value} key={index} className={classnames(style.course)}/>)}
      </div>
      <Pagination className={classnames(style.pager, 'xs_hidden')} current={page + 1} onChange={handlePageChange} pageSize={COURSENUM} total={course.length} showSizeChanger={false} />
      <Pagination className={classnames(style.pager, 'sm_hidden', 'md_hidden', 'lg_hidden')} simple current={page + 1} onChange={handlePageChange} pageSize={COURSENUM} total={course.length} showSizeChanger={false} />
    </div>
  );
};

export default HomePage;