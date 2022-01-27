import React from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';
import { useParams } from "react-router-dom";
import MessagePage from '../MessagePage';
import PersonalPage from '../PersonalPage';
import CoursePage from '../CoursePage';
import HomePage from '../HomePage';

import style from './index.module.less';
import classNames  from 'classnames/bind';
import classnames  from 'classnames';

const cx = classNames.bind(style);

export enum pageType {
  HomePage = 'home',
  CoursesPage = 'course',
  MessagePage = 'message',
  PersonalPage = 'personal'
}

export enum filterType {
  MyStudyCourse,
  MyTeachCourse
}

const PageContainer = () => {
  const params = useParams();

  const getContent = (_pageType?: string) => {
    console.log(_pageType);
    switch(_pageType) {
      case 'home':
        return <HomePage />;
      case 'course':
        return <CoursePage />;
      case 'message':
        return <MessagePage />;
      case 'personal':
        return <PersonalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={style.pagecontainer}>
      <HeadToolbar />
      <div className={cx('maincontainer', `maincontainer--${params.page}`)}>{getContent(params.page)}</div>
      <FootToolbar className={classnames('sm_hidden', 'md_hidden', 'lg_hidden')} />
    </div>
  );
};

export default PageContainer;