import React from 'react';
import HeadToolbar from '@/components/HeadToolbar';
import FootToolbar from '@/components/FootToolbar';

import style from './index.module.less';
import classnames  from 'classnames';

export enum pageType {}


export interface Iprops {
  pageType: string;
}

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
      <FootToolbar className={classnames('sm_hidden', 'md_hidden', 'lg_hidden')} />
    </div>
  );
};

export default PageContainer;