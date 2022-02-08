import React, { useEffect, useState } from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';
import { useParams } from "react-router-dom";
import MessagePage from '../MessagePage';
import PersonalPage from '../PersonalPage';
import CoursePage from '../CoursePage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage';
import { nullUser } from '@/test/test';
import { getCurrentUser } from '@/services/userinfo';
import emitter from '@/services/utils/events';
import { IUser } from '@/constant/type';

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

  const [currentUser, setCurrentUser] = useState(nullUser);
  
  useEffect(() => {
    getCurrentUser().then(user => setCurrentUser(user));
  }, []);

  useEffect(() => {
    const setEmailLoginUser = (user: IUser) => setCurrentUser(user);
    emitter.addListener('CHANGE LOGIN USER', setEmailLoginUser);
    return () => { emitter.removeListener('CHANGE LOGIN USER', setEmailLoginUser); };
  }, []);

  useEffect(() => {
    const setQuitLoginUser = () => setCurrentUser(nullUser);
    emitter.addListener('QUIT LOGIN USER', setQuitLoginUser);
    return () => { emitter.removeListener('QUIT LOGIN USER', setQuitLoginUser); };
  }, []);

  const getContent = (_pageType?: string) => {
    switch(_pageType) {
      case pageType.HomePage:
        return <HomePage />;
      case pageType.CoursesPage:
        return <CoursePage />;
      case pageType.MessagePage:
        return <MessagePage currentUser={currentUser} />;
      case pageType.PersonalPage:
        return <PersonalPage currentUser={currentUser} />;
      case pageType.RegisterPage:
        return <RegisterPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={style.pagecontainer}>
      <HeadToolbar currentUser={currentUser} />
      <div className={cx('maincontainer', `maincontainer--${params.page}`)}>{getContent(params.page)}</div>
      <FootToolbar className={classnames('sm_hidden', 'md_hidden', 'lg_hidden')} currentUser={currentUser} />
    </div>
  );
};

export default PageContainer;