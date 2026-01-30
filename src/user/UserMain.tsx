import { useNavigate } from 'react-router-dom';

const UserMain = () => {
  const navigate = useNavigate();
  const products = [
    { id: '1', name: '상품 A' },
    { id: '2', name: '상품 B' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 상품 목록 (UserMain)</h1>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <span>{p.name}</span> 
          <button onClick={() => navigate(`/product/${p.id}`)}>상세보기</button>
        </div>
      ))}
    </div>
  );
};

export default UserMain;
