import { useNavigate } from 'react-router-dom';
import { useState, type ChangeEvent } from 'react';
import './css/Home.css'

// SNS 로고 아이콘 호출
const getIcon = (name: String) => new URL(`../assets/icons/${name}.png`, import.meta.url).href;

// 화면에 보여줄 때 휴대전화에 하이픈 적용
const formattNumber = (num: String) => {
  return num.replace(/^(\d{3})(\d{3,4})(\d{4})$/, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

const Home = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');   // 로그인을 위한 휴대전화 번호
  const [isModalOpen, setIsModalOpen] = useState(false); // 팝업 상태
  
  // 팝업 열기/닫기 토글
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // 로그인을 위한 휴대전화 입력에 숫자만 남기도록 하는 UX => 화면에서 바뀜
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, "");  // 숫제 외 제거하는 정규식
    
    // state에 숫자만 저장
    setPhoneNumber(onlyNumber);
  }

  // 로그인 서버 API 호출
  const handleLogin = async() => {
    navigate('userMain');

    /* 백엔드가 완성되면 실행
    try {
      const response = await fetch('/api/login', {
        method: 'POST', // HTTP 메서드 지정
        headers: { 'Content-Type': 'application/json' }, // 보낼 데이터가 JSON임을 명시
        body: JSON.stringify({ // 데이터를 JSON 문자열로 변환
          phoneNumber: phoneNumber 
        }),
      });
      if(!response.ok) throw new Error(`서버 에러: ${response.status}`);

      // 호출 결과
      const result = await response.json();
      if(result.result = "SUCCESS") {
        // 사용자 메인 화면으로 이동
      } else {
        // 로그인 실패
        alert(result.message);
      }
      console.log(`호출 결과: ${result}`);
    } catch(error) {
        console.log(`로그인 실패: ${(error as Error).message}`);
        alert(error);
    }
    */
  }

  // html
  return (
    <div id="wrap">

      <div id="header">
        <div className='logo'></div>
        <div className='links'>

        </div>
        <div className='actions'>
            <span className="btn-auth btnLogin" onClick={toggleModal}>로그인</span>
        </div>
      </div>

      <div id="container">
        <div className='title'>
            {/*<h1>이래저래</h1>*/}
        </div>
      </div>

      <div id="footer"></div>

      {/* 로그인 팝업 레이아웃 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* 오른쪽 상단 X 아이콘 */}
            <span className="btnCancle" onClick={toggleModal} >
            &times;
            </span>
            <div>
              <h2>로고</h2>
            </div>
            <div style={{padding:"3px"}}></div>
            {/* SNS 로그인 연동 아이콘들 */}
            <div className='snsLogos'>
              <img src={getIcon('NAVER_login_Light_KR_green_icon_H56')} alt="네이버" className="sns-icon naver" />
              <div className="sns-icon kakao"><img src={getIcon('kakaotalk_sharing_btn_medium')} alt="카카오" /></div>
              <img src={getIcon('google_web_neutral_rd_na@4x')} alt="구글" className="sns-icon google" />
              <img src={getIcon('appleid_button@4x-3')} alt="애플" className="sns-icon apple" />
            </div>
            {/* 구분선 추가 */}
            <div className="divider"></div>
            <div>
              <label className="labels">휴대전화</label>
              <input 
                type="text" 
                placeholder="휴대전화 번호를 입력하세요." 
                value={formattNumber(phoneNumber)}
                onChange={handleNumber}
                maxLength={13}
              />
            </div>
            <div className="buttons">
              <span className="btnModalLogin" onClick={handleLogin}>로그인</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  // html
};

export default Home;
