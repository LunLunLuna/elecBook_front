import { useNavigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import React from 'react';
import '../css/UserHeader.css';

const UserHeader = () => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    const isConfirmed = window.confirm("정말 로그아웃 하시겠습니까?");
    
    if (isConfirmed) {
      navigate('/');
    }
  };

  return (
      <>
        <div className='logo'></div>
        <div className='links'>

        </div>
        <div className='actions'>
            <span className="btn-auth btnLogout" onClick={handleLogout}>로그아웃</span>
        </div>
      </>
  )
};

export default UserHeader;