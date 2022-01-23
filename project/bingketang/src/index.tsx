import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.module.less';
import PageContainer from './pages/Container';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import 'antd/dist/antd.css';

const App = () => (
  <Routes>
    <Route path = '/:page' element={<PageContainer />} />
    <Route path = '*' element={<Navigate to="/home" />} />
  </Routes>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);