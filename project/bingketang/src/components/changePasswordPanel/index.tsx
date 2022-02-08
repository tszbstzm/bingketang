import React, { useState } from 'react';
import { Form, FormInstance, Input } from 'antd';
import { CANCEL_COMMEN, CHANGE_PASSWORD, CHANGREPW_NOTMATCH, CONFIRM_TEXT, ERROR_PASSWORD, ERROR_PASSWORD_AGAIN, NEW_NEED_PASSWORD, NEW_NEED_PASSWORD_AGAIN, NEW_PASSWORD_AGAIN, NEW_PASSWORD_TEXT, OLD_NEED_PASSWORD, OLD_PASSWORD_TEXT } from '@/constant/text';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useFormModal } from '../FormModal';
import { getChangePassword } from '@/services/eggservices';
import { getCurrentUserNow } from '@/services/userinfo';

import style from './index.module.less';
import classnames  from 'classnames';

export const openChangePwPanel = () => {
  
  interface Iprops {
    onClose: () => void;
  }

  const ChangePwPanel = (props: Iprops, ref: React.Ref<FormInstance<any>>) => {
    const [errorVisible, setErrorVisible] = useState(false);
    const currentUser = getCurrentUserNow();

    const handleSumbit = async (value: any) => {
      const { code } = await getChangePassword(value);
      if (!code) {
        props.onClose();
      } else {
        setErrorVisible(true);
      }
    };

    return (
      <Form
        className={classnames(style.changepwpanel)}
        initialValues={{ remember: true }}
        ref={ref}
        onFinish={async (value) => {
          await handleSumbit(value);
        }}
      >
        {errorVisible && <Form.Item className={classnames(style.errormsg)}>{CHANGREPW_NOTMATCH}</Form.Item>}
        <Form.Item name="email">
          <Input prefix={<MailOutlined />} type="email" value={currentUser.email} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: OLD_NEED_PASSWORD }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder={OLD_PASSWORD_TEXT} />
        </Form.Item>
        <Form.Item name="newpassword" rules={[{ required: true, whitespace: true, message: NEW_NEED_PASSWORD }, { pattern: /^[A-Za-z0-9]{8,20}$/, message: ERROR_PASSWORD }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder={NEW_PASSWORD_TEXT} />
        </Form.Item>
        <Form.Item name="newpasswordagin"
          rules={[{ required: true, whitespace: true, message: NEW_NEED_PASSWORD_AGAIN }, 
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newpassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(ERROR_PASSWORD_AGAIN));
              },
            })
          ]}>
          <Input prefix={<LockOutlined />} type="password" placeholder={NEW_PASSWORD_AGAIN} />
        </Form.Item>
      </Form>
    );
  };

  const { FormModal, open } = useFormModal({
    InnerForm: React.forwardRef(ChangePwPanel),
    title: CHANGE_PASSWORD,
    okText: CONFIRM_TEXT,
    cancelText: CANCEL_COMMEN
  });

  return { ChangePwPanelModal: FormModal, handleChangePwPanel: open };
};