import React, { useEffect, useState } from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';
import { useParams, useSearchParams } from "react-router-dom";
import { getCurrentUser, nullUser } from '@/services/userinfo';
import emitter from '@/services/utils/events';
import { IUser } from '@/constant/type';
import { Spin } from 'antd';

import style from './index.module.less';
import classNames  from 'classnames/bind';
import classnames  from 'classnames';

const cx = classNames.bind(style);

export enum pageType {
  HomePage = 'home',
  CoursesPage = 'course',
  MessagePage = 'message',
  PersonalPage = 'personal',
  RegisterPage = 'register',
  DetailPage = 'detail'
}

export enum filterType {
  MyStudyCourse,
  MyTeachCourse
}

const MessagePage = React.lazy(() => import('../MessagePage'));
const PersonalPage = React.lazy(() => import('../PersonalPage'));
const CoursePage = React.lazy(() => import('../CoursePage'));
const HomePage = React.lazy(() => import('../HomePage'));
const RegisterPage = React.lazy(() => import('../RegisterPage'));
const DetailPage = React.lazy(() => import('../DetailPage'));

const PageContainer = () => {
  const params = useParams();
  const { page, id } = params;
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

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

  const ContentPage = (props: { page?: string; course?: string; query?: string }) => {
    const { page, course, query } = props;
    if (query) return <HomePage query={query} />;
    if (page === pageType.DetailPage && course) return <DetailPage currentUser={currentUser} courseid={course} />;
    switch(props.page) {
      case pageType.HomePage:
        return <HomePage />;
      case pageType.CoursesPage:
        return <CoursePage currentUser={currentUser} />;
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
    <React.Suspense fallback={<Spin size='large' className={cx('spin')} />}>
      <div className={style.pagecontainer}>
        <HeadToolbar currentUser={currentUser} />
        <div className={cx('maincontainer', `maincontainer--${params.page}`)}>{<ContentPage page={page} course={id} query={query}/>}</div>
        <FootToolbar className={classnames('sm_hidden', 'md_hidden', 'lg_hidden')} currentUser={currentUser} />
      </div>
    </React.Suspense>
  );
};

export default PageContainer;