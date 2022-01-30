import React, { useEffect, useRef, useState } from 'react';
import { Modal, FormInstance } from 'antd';

import style from './index.module.less';
import classnames  from 'classnames';

interface Iprops {
  InnerForm: React.FC<any>;
  title: string;
  okText: string;
  cancelText: string;
}

export const useFormModal = (props: Iprops) => {
  const { InnerForm, title, okText, cancelText } = props;
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useEffect(() => {
    const bodyElement = document.getElementsByTagName('body')[0];
    const widthStyle = bodyElement.getAttribute('style');
    if (widthStyle) {
      Array.from(document.getElementsByClassName('element--fixed')).forEach((element) => { element.setAttribute('style', widthStyle); });
    } else {
      Array.from(document.getElementsByClassName('element--fixed')).forEach((element) => { element.removeAttribute('style'); });
    }
  }, [visible]);

  const FormModal = () => {
    const formref = useRef<FormInstance>();

    return (
      <Modal
        className={classnames(style.modal)}
        visible={visible}
        title={title}
        okText={okText}
        cancelText={cancelText}
        onCancel={close}
        onOk={() => {
          if (formref.current) {
            formref.current?.submit();
          }
        }}
      >
        <InnerForm onClose={close} ref={formref}/>
      </Modal>
    );
  };

  return {
    FormModal,
    open,
    close
  };
};