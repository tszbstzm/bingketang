import React from 'react';
import HeadToolbar from '@/components/HeadToolbar';

import style from './index.module.less';
import classnames  from 'classnames';

export interface Iprops {
  pageType: string;
};

const PageContainer = (props: Iprops) => {
  const { pageType } = props;

  const getContent = (_pageType: string) => {
    switch(_pageType) {
      case 'home':
      default:
        // <HomeCoursesContainer/>
        return <div>{"content"}</ div>;
    }
  }

  return (
    <div className={style.pagecontainer}>
      <HeadToolbar />
      {/* {getContent(pageType)} */}
      {/* <FooterToolbar className={classnames('.sm_hidden', '.md_hidden', '.lg_hidden')}/> */}
    </div>
  );
};

export default PageContainer;