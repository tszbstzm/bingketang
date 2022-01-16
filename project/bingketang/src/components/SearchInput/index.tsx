import React from 'react';
import { Input } from 'antd';
import { SEARCH_THE_COURSES_OF_INTEREST } from '@/constant/text';

// import style from './index.module.less';
// import classnames  from 'classnames';

const { Search } = Input;

interface Iprops {
  className: string;
}

const HeadToolbar = (props: Iprops) => {
  const handleSearch = () => {};

  return (
    <Search placeholder={SEARCH_THE_COURSES_OF_INTEREST} allowClear onSearch={handleSearch} size="large" {...props} />
  );
};

export default HeadToolbar;