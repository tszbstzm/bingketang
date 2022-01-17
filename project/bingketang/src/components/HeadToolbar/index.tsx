import React from 'react';
import SearchInput from './SearchInput';
import { Avatar, Dropdown, Menu } from 'antd';
import { MessageOutlined, UserOutlined, ReadOutlined, UsergroupAddOutlined, PlusCircleTwoTone, FundProjectionScreenOutlined } from '@ant-design/icons';
import { JOIN_A_COURSE, MY_CENTER, MY_COURSES, TEACH_A_COURSE } from '@/constant/text';

import style from './index.module.less';
import classnames  from 'classnames';


const HeadToolbar = () => {
  const handleMesseage = () => {};
  const handleAddCourse = () => {};
  const handlePersonal = () => {};
  const addCourseMenuList = [
    { Icon: FundProjectionScreenOutlined, content: TEACH_A_COURSE }, 
    { Icon: UsergroupAddOutlined, content: JOIN_A_COURSE }
  ];
  const personalMenuList = [
    { Icon: UserOutlined, content: MY_CENTER },
    { Icon: ReadOutlined, content: MY_COURSES }
  ];

  const getMenu = (list: {Icon: React.FC<any>, content: string}[], onClick: () => void) => {
    return (
      <Menu onClick={onClick} className={classnames(style.menuoverlay)}>
        {list.map((value, index) => (
          <Menu.Item key={index}>
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
    <div className={style.headtoolbar}>
      <SearchInput className={classnames(style.searchinput)} />
      <MessageOutlined onClick={handleMesseage} className={classnames(style.icon, 'xs_hidden')} />
      <Dropdown overlay={getMenu(addCourseMenuList, handleAddCourse)} trigger={["hover", "click"]} overlayClassName={classnames(style.dropdown)} placement="bottomRight">
        <PlusCircleTwoTone className={classnames(style.icon)} />
      </Dropdown>
      <Dropdown overlay={getMenu(personalMenuList, handlePersonal)} overlayClassName={classnames(style.dropdown)} placement="bottomRight">
      <div className={classnames(style.icon, 'xs_hidden')}>
        <Avatar icon={<UserOutlined />} />
      </div>
      </Dropdown>
    </div>
  );
};

export default HeadToolbar;