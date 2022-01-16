import React from 'react';
import SearchInput from '../SearchInput';
import { Avatar, Dropdown, Menu } from 'antd';
import { MessageOutlined, UserOutlined, ReadOutlined, UsergroupAddOutlined, PlusCircleTwoTone, FundProjectionScreenOutlined } from '@ant-design/icons';

import style from './index.module.less';
import classnames  from 'classnames';
import { JOIN_A_COURSE, MY_CENTER, MY_COURSES, TEACH_A_COURSE } from '@/constant/text';


const HeadToolbar = () => {
  const handleMesseage = () => {};
  const handleAddCourse = () => {};
  const handlePersonal = () => {};

  const addCourseMenu = (
    <Menu onClick={handleAddCourse} className={classnames(style.menuoverlay)}>
      <Menu.Item key="1" className={classnames(style.menuitem)}>
        <FundProjectionScreenOutlined className={classnames(style.menuitemicon)}/>{TEACH_A_COURSE}
      </Menu.Item>
      <Menu.Item key="2" className={classnames(style.menuitem)}>
        <UsergroupAddOutlined className={classnames(style.menuitemicon)}/>{JOIN_A_COURSE}
      </Menu.Item>
    </Menu>
  );

  const personalMenu = (
    <Menu onClick={handlePersonal} className={classnames(style.menuoverlay)}>
      <Menu.Item key="1" className={classnames(style.menuitem)}>
        <UserOutlined className={classnames(style.menuitemicon)}/>{MY_CENTER}
      </Menu.Item>
      <Menu.Item key="2" className={classnames(style.menuitem)}>
        <ReadOutlined className={classnames(style.menuitemicon)}/>{MY_COURSES}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.headtoolbar}>
      <SearchInput className={classnames(style.searchinput)} />
      <MessageOutlined onClick={handleMesseage} className={classnames(style.icon, 'xs_hidden')} />
      <Dropdown overlay={addCourseMenu} trigger={["hover", "click"]} overlayClassName={classnames(style.dropdown)}>
        <PlusCircleTwoTone className={classnames(style.icon)} />
      </Dropdown>
      <Dropdown overlay={personalMenu}>
        <div className={classnames(style.profilewrapper, 'xs_hidden')}>
          <Avatar icon={<UserOutlined />} className={classnames(style.profile)} />
        </div>
      </Dropdown>
    </div>
  );
};

export default HeadToolbar;