import { useNavigate } from 'react-router-dom';
import { useState, type ChangeEvent } from 'react';
import UserHeader from './utils/UserHeader';

const UserMain = () => {
  const navigate = useNavigate();

  const [mainCategory, setMainCategory] = useState(''); // 대분류 상태
  const [middleCategory, setMiddleCategory] = useState(''); // 중분류 상태
  const categories = ['전체', '필기', '실기'];

  // 대분류 변경 이벤트
  const handleMainChange = (e) => {
    const value = e.target.value;
    setMainCategory(value);
    
    // "선택 안 함" 또는 기본 옵션을 골랐을 때 중분류 초기화
    if (value === '') {
      setMiddleCategory(''); 
    } else {
      setMiddleCategory('전체'); 
    }
  };

  // 중분류 변경 이벤트
  const handleMiddleClick = (item) => {
    // 대분류가 선택되지 않았을 때 (빈 문자열일 때)
    if (!mainCategory) alert("대분류를 먼저 선택해주세요!");
    else setMiddleCategory(item);
  };

  return (
    <div id="wrap">
      <div id="header">
        <UserHeader />
      </div>

      <div id="container">
          <div className='main-category'>
            <div className='dropdown-warpper'>
              <select className='main-category-list' onChange={handleMainChange}>
                <option value=''>자격증 선택</option>
                <option value='1'>정보처리기사</option>
                <option value='2'>SQLD</option>
              </select>
            </div>
          </div>
          <div className='middle-category'>
            <ul className='middle-category-list'>
              {categories.map((item) => (
                <li 
                  key={item}
                  onClick={() => handleMiddleClick(item)}
                  className={middleCategory === item ? 'active' : ''}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
      </div>

      <div id="footer">
        
      </div>
    </div>
  );
};

export default UserMain;
