import React, { useCallback, useState } from 'react';
import { Form, FormInstance, Input } from 'antd';
import { ACT_AFTER_LOGIN_TEXT, CANCEL_COMMEN, EMAIL_ADDRESS_TEXT, FORGET_PASSWORD, LOGIN_NEED_EMAIL, LOGIN_NEED_PASSWORD, LOGIN_NOTMATCH, LOGIN_TEXT, NEW_USER_REGISTER_TEXT, NICK_NAME_TEXT, PASSWORD_TEXT, REMEMBER_ME } from '@/constant/text';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useFormModal } from '../FormModal';
import { useNavigate } from 'react-router-dom';
import { pageType } from '@/pages/Container';
import { getLoginInfo } from '@/services/eggservices';
import emitter from '@/services/utils/events';

import style from './index.module.less';
import classnames  from 'classnames';

export const openLoginPanel = () => {
  
  interface Iprops {
    onClose: () => void;
  }

  const LoginPanel = (props: Iprops, ref: React.Ref<FormInstance<any>>) => {
    const navigate = useNavigate();
    const [errorVisible, setErrorVisible] = useState(false);
    
    const handleRegister = useCallback(() => {
      navigate(`/${pageType.RegisterPage}`);
      props.onClose();
    }, [props]);

    const handleSumbit = useCallback(async (value: any) => {
      const { result } = await getLoginInfo(value);
      if (result) {
        emitter.emit('CHANGE LOGIN USER', result);
        props.onClose();
      } else {
        setErrorVisible(true);
      }
    }, [props]);

    return (
      <Form
        className={classnames(style.loginpanel)}
        initialValues={{ remember: true }}
        ref={ref}
        onFinish={async (value) => {
          await handleSumbit(value);
        }}
      >
        {errorVisible && <Form.Item className={classnames(style.errormsg)}>{LOGIN_NOTMATCH}</Form.Item>}
        <Form.Item name="email" rules={[{ required: true, message: LOGIN_NEED_EMAIL }]}>
          <Input prefix={<MailOutlined />} type="email" placeholder={EMAIL_ADDRESS_TEXT} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: LOGIN_NEED_PASSWORD }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder={PASSWORD_TEXT} />
        </Form.Item>
        <Form.Item className={classnames(style.textwrapper)}>
          <div className={classnames(style.forget, style.text)}>{FORGET_PASSWORD}</div>
          <div className={classnames(style.text)}>{'|'}</div>
          <div className={classnames(style.register, style.text)} onClick={handleRegister}>{NEW_USER_REGISTER_TEXT}</div>
        </Form.Item>
      </Form>
    );
  };

  const { FormModal, open } = useFormModal({
    InnerForm: React.forwardRef(LoginPanel),
    title: ACT_AFTER_LOGIN_TEXT,
    okText: LOGIN_TEXT,
    cancelText: CANCEL_COMMEN
  });

  return { LoginPanelModal: FormModal, handleLoginPanel: open };
};