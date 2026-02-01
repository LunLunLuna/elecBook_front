import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Home from './util/Home';
import UserMain from './user/UserMain';
import ProductDetail from './user/ProductDetail';

// 배포 후 서버의 config.js 값을 읽어오고, 없으면 기본값 사용

function App() {

  return (
    <Routes>
      {/* 최초 접속화면 */}
      <Route path="/" element={<Home />} />

      {/* 사업자 회원 화면 */}

      {/* 개인 회원 화면 */}
      <Route path="/userMain" element={<UserMain />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
