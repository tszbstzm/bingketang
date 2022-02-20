import React from "react";
import { Button, Form, Input } from "antd";
import { EMAIL_ADDRESS_TEXT, ERROR_EMAIL, ERROR_NICKNAME, ERROR_PASSWORD, ERROR_PASSWORD_AGAIN, NICK_NAME_TEXT, PASSWORD_AGAIN_TEXT, PASSWORD_TEXT, REGISTER_NEED_EMAIL, REGISTER_NEED_NICKNAME, REGISTER_NEED_PASSWORD, REGISTER_NEED_PASSWORD_AGAIN, REGISTER_TEXT } from "@/constant/text";
import { useNavigate } from "react-router-dom";
import { pageType } from "../Container";
import emitter from '@/services/utils/events';
import { getRegisterInfo } from "@/services/eggservices";

import style from './index.module.less';
import classnames  from 'classnames';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (value: any) => {
    const { result } = await getRegisterInfo(value);
    if (result) {
      emitter.emit('CHANGE LOGIN USER', result);
    }
    navigate(`/${pageType.HomePage}`);
  };

  return (
    <Form className={classnames(style.registerpage)} onFinish={async (value) => { await handleRegister(value); }}>
    <Form.Item className={classnames(style.formitem, style.email)} name="email" label={EMAIL_ADDRESS_TEXT}
      rules={[{ required: true, message: REGISTER_NEED_EMAIL }, { type: 'email', message:  ERROR_EMAIL }]}>
      <Input />
    </Form.Item>
    <Form.Item className={classnames(style.formitem)} name="nickname" label={NICK_NAME_TEXT}
      rules={[{ required: true, whitespace: true, message: REGISTER_NEED_NICKNAME }, { pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]{4,20}$/, message: ERROR_NICKNAME }]}>
      <Input />
    </Form.Item>
    <Form.Item className={classnames(style.formitem)} name="password" label={PASSWORD_TEXT}
      rules={[{ required: true, whitespace: true, message: REGISTER_NEED_PASSWORD }, { pattern: /^[A-Za-z0-9]{8,20}$/, message: ERROR_PASSWORD }]}>
      <Input.Password />
    </Form.Item>
    <Form.Item className={classnames(style.formitem)} name="passwordagin" label={PASSWORD_AGAIN_TEXT}
      rules={[{ required: true, whitespace: true, message: REGISTER_NEED_PASSWORD_AGAIN }, 
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(ERROR_PASSWORD_AGAIN));
          },
        })
      ]}>
      <Input.Password />
    </Form.Item>
    <Form.Item className={classnames(style.formitem)} >
      <Button className={classnames(style.submitbutton)} type="primary" htmlType="submit">{REGISTER_TEXT}</Button>
    </Form.Item>
  </Form>
  );
};

export default RegisterPage;