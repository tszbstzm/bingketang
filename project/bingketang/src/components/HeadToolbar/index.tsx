import React from 'react';
import SearchInput from './SearchInput';
import { Dropdown, Menu } from 'antd';
import { MessageOutlined, UserOutlined, ReadOutlined, UsergroupAddOutlined, PlusCircleTwoTone, FundProjectionScreenOutlined, HomeOutlined } from '@ant-design/icons';
import { JOIN_A_COURSE, MY_CENTER, MY_COURSES, TEACH_A_COURSE } from '@/constant/text';
import { useNavigate } from 'react-router-dom';
import { pageType } from '@/pages/Container';
import { IUser } from '@/constant/type';
import { openLoginPanel } from '@/components/loginPanel';
import UserAvatar from '../UserAvatar';

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  currentUser: IUser
}

const HeadToolbar = (props: Iprops) => {
  const { currentUser } = props;
  const navigate = useNavigate();
  const currentUserId = currentUser.id;
  const { LoginPanelModal, handleLoginPanel } = openLoginPanel();

  const handleHome = () => {
    navigate(`/${pageType.HomePage}`);
  };

  const handleMessage = () => {
    navigate(`/${pageType.MessagePage}`);
  };

  const handleAddCourse = () => {
  };

  const handlePersonal = (param: { key: string }) => {
    navigate(`/${param.key}`);
  };
  
  const addCourseMenuList = [
    { Icon: FundProjectionScreenOutlined, content: TEACH_A_COURSE }, 
    { Icon: UsergroupAddOutlined, content: JOIN_A_COURSE }
  ];
  const personalMenuList = [
    { Icon: UserOutlined, content: MY_CENTER, key: pageType.PersonalPage },
    { Icon: ReadOutlined, content: MY_COURSES, key: pageType.CoursesPage }
  ];

  const getMenu = (list: {Icon: React.FC<any>, content: string, key?: string}[], onClick: ({ key }: { key: string; }) => void) => {
    return (
      <Menu onClick={currentUserId !== '' ? onClick : handleLoginPanel} className={classnames(style.menuoverlay)}>
        {list.map((value, index) => (
          <Menu.Item key={value.key || index}>
            <div className={classnames(style.menuitem)}>
              <value.Icon className={classnames(style.menuitemicon)} />
              <div className={classnames('_text')}>{value.content}</div>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <div className={classnames(style.headtoolbar, 'element--fixed')}>
      <HomeOutlined onClick={handleHome} className={classnames(style.icon, style.homeicon, 'xs_hidden')} />
      <SearchInput className={classnames(style.searchinput)} />
      <MessageOutlined onClick={currentUserId !== '' ? handleMessage : handleLoginPanel} className={classnames(style.icon, 'xs_hidden')} />
      <Dropdown overlay={getMenu(addCourseMenuList, handleAddCourse)} trigger={["hover", "click"]} overlayClassName={classnames(style.dropdown)} placement="bottomRight">
        <PlusCircleTwoTone className={classnames(style.icon)} />
      </Dropdown>
      <Dropdown overlay={getMenu(personalMenuList, handlePersonal)} overlayClassName={classnames(style.dropdown)} placement="bottomRight">
      <div className={classnames(style.icon, 'xs_hidden')}>
        <UserAvatar profile={currentUser.profile || ''} />
      </div>
      </Dropdown>
      <LoginPanelModal />
    </div>
  );
};

export default HeadToolbar;