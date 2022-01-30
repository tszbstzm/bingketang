import React from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';
import { useParams } from "react-router-dom";
import MessagePage from '../MessagePage';
import PersonalPage from '../PersonalPage';
import CoursePage from '../CoursePage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage';

import style from './index.module.less';
import classNames  from 'classnames/bind';
import classnames  from 'classnames';

const cx = classNames.bind(style);

export enum pageType {
  HomePage = 'home',
  CoursesPage = 'course',
  MessagePage = 'message',
  PersonalPage = 'personal',
  RegisterPage = 'register'
}

export enum filterType {
  MyStudyCourse,
  MyTeachCourse
}

const PageContainer = () => {
  const params = useParams();

  const getContent = (_pageType?: string) => {
    switch(_pageType) {
      case pageType.HomePage:
        return <HomePage />;
      case pageType.CoursesPage:
        return <CoursePage />;
      case pageType.MessagePage:
        return <MessagePage />;
      case pageType.PersonalPage:
        return <PersonalPage />;
      case pageType.RegisterPage:
        return <RegisterPage />;
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