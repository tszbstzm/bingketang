import React, { useEffect, useState } from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';
import { useParams } from "react-router-dom";
import MessagePage from '../MessagePage';

import style from './index.module.less';
import classNames  from 'classnames/bind';
import classnames  from 'classnames/bind';

const cx = classNames.bind(style);

export enum pageType {
  HomePage = 'home',
  CoursesPage = 'course',
  MessagePage = 'message',
  PersonalPage = 'personal'
}

const PageContainer = () => {
  const params = useParams();

  const getContent = (_pageType?: string) => {
    console.log(_pageType);
    switch(_pageType) {
      case 'home':
        return <div>{"home"}</div>;
      case 'course':
        return <div>{"course"}</div>;
      case 'message':
        return <MessagePage />;
      case 'personal':
        return <div>{"personal"}</div>;
      default:
        // <HomeCoursesContainer/>
        return <div>{"content"}</div>;
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