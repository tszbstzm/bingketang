import React, { useState } from 'react';
import FooterTab from './FooterTab';
import { HomeFilled, HomeOutlined, MessageFilled, MessageOutlined, ReadFilled, ReadOutlined, UserOutlined } from '@ant-design/icons';
import { MOBILE_HOME_PAGE, MOBILE_MESSAGE_LIST, MOBILE_MY_CENTER, MOBILE_MY_COURSES } from '@/constant/text';
import { useNavigate } from 'react-router-dom';
import { IUser } from '@/constant/type';
import { openLoginPanel } from '@/components/loginPanel';
import { pageType } from '@/pages/Container';

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  className?: string;
  currentUser: IUser
}

const FootToolbar = (props: Iprops) => {
  const { currentUser } = props;
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(pageType.HomePage);
  const { LoginPanelModal, handleLoginPanel } = openLoginPanel();

  const handleClick = (key: pageType) => {
    if (key !== pageType.HomePage && currentUser.id === '') {
      handleLoginPanel();
      return;
    }
    setCurrentTab(key);
    navigate(`/${key}`);
  };

  const footList = [
    { key: pageType.HomePage, outlinedContent: <HomeOutlined />, filledContent: <HomeFilled />, content: MOBILE_HOME_PAGE },
    { key: pageType.CoursesPage, outlinedContent: <ReadOutlined />, filledContent: <ReadFilled />, content: MOBILE_MY_COURSES },
    { key: pageType.MessagePage, outlinedContent: <MessageOutlined />, filledContent: <MessageFilled />, content: MOBILE_MESSAGE_LIST },
    { key: pageType.PersonalPage, outlinedContent: <UserOutlined />, content: MOBILE_MY_CENTER },
  ];

  return (
    <div className={classnames(style.foottoolbar, props.className, 'element--fixed')}>
      {footList.map((value) => (
        <FooterTab
          key={value.key}
          outlinedContent={value.outlinedContent}
          filledContent={value.filledContent}
          content={value.content}
          isSelected={currentTab === value.key}
          onClick={() => handleClick(value.key)} />
      ))}
      <LoginPanelModal />
    </div>
  );
};

export default FootToolbar;