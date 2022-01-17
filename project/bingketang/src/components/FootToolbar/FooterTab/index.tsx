import React, { ReactNode } from 'react';

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  className?: string;
  outlinedContent: ReactNode;
  filledContent?: ReactNode;
  content: string;
  isSelected: boolean;
  onClick: () => void;
  size?: number;
}

const FootTab = (props: Iprops) => {
  const { className, outlinedContent, filledContent, content, isSelected, onClick } = props;

  return (
    <div onClick={onClick} className={classnames(style.tab, className)}>
      <div className={classnames(style.icon)}>{(filledContent && isSelected) ? filledContent : outlinedContent}</div>
      <div className={classnames(style.text, '_text')}>{content}</div>
    </div>
  );
};

export default FootTab;