import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './css/Home.css'

const Home = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');   // 로그인을 위한 휴대전화 번호
  const [isModalOpen, setIsModalOpen] = useState(false); // 팝업 상태
  
  // 팝업 열기/닫기 토글
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // 로그인
  const handleLogin = async() => {

    try {
      // 파이썬 서버 주소로 1개의 파라미터(phoneNumber) 전송
      const response = await axios.post('/api/login', { 
        phoneNumber: phoneNumber 
      });

      if (response.data.success) {
        // 성공 시 페이지 이동
        navigate('/userMain');
      } else {
        // 실패 시 알람
        alert('로그인 정보가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert('서버 연결에 실패했습니다.');
    }
  }
  return (
    <div id="wrap">

      <div id="header">
        <div className='logo'></div>
        <div className='links'>

        </div>
        <div className='actions'>
            <span className="btnLogin" onClick={toggleModal}>로그인</span>
        </div>
      </div>

      <div id="container">
        <div className='title'>
            <h1>이래저래</h1>
        </div>
      </div>

      <div id="footer"></div>

      {/* 로그인 팝업 레이아웃 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>로그인</h2>
            <input 
              type="text" 
              placeholder="휴대전화 번호 입력" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleLogin}>확인</button>
              <button onClick={toggleModal}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
