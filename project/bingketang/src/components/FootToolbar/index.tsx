import React, { useState } from 'react';
import FooterTab from './FooterTab';
import { HomeFilled, HomeOutlined, MessageFilled, MessageOutlined, ReadFilled, ReadOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { MOBILE_HOME_PAGE, MOBILE_MESSEAGE_LIST, MOBILE_MY_CENTER, MOBILE_MY_COURSES } from '@/constant/text';

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  className?: string;
}

enum footTabType {
  HomePage,
  CoursesPage,
  MessagePage,
  PersonalPage
}

const FootToolbar = (props: Iprops) => {
  const [currentTab, setCurrentTab] = useState(footTabType.HomePage);

  const handleHome = () => {
    setCurrentTab(footTabType.HomePage);
  };
  const handleCourse = () => {
    setCurrentTab(footTabType.CoursesPage);
  };
  const handleMesseage = () => {
    setCurrentTab(footTabType.MessagePage);
  };
  const handlePersonal = () => {
    setCurrentTab(footTabType.PersonalPage);
  };

  return (
    <div className={classnames(style.foottoolbar, props.className)}>
      <FooterTab 
        outlinedContent={<HomeOutlined />}
        filledContent={<HomeFilled />}
        content={MOBILE_HOME_PAGE}
        isSelected={currentTab === footTabType.HomePage}
        onClick={handleHome} />
      <FooterTab 
        outlinedContent={<ReadOutlined />}
        filledContent={<ReadFilled />}
        content={MOBILE_MY_COURSES}
        isSelected={currentTab === footTabType.CoursesPage}
        onClick={handleCourse} />
      <FooterTab 
        outlinedContent={<MessageOutlined />}
        filledContent={<MessageFilled />}
        content={MOBILE_MESSEAGE_LIST}
        isSelected={currentTab === footTabType.MessagePage}
        onClick={handleMesseage} />
      <FooterTab 
        outlinedContent={<Avatar size="small" icon={<UserOutlined />} />}
        content={MOBILE_MY_CENTER}
        isSelected={currentTab === footTabType.PersonalPage}
        onClick={handlePersonal} />
    </div>
  );
};

export default FootToolbar;