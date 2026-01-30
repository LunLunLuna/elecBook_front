import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>📦 상품 상세 페이지</h1>
      <p>현재 상품 ID: {id}</p>
      <button onClick={() => navigate('/user')}>목록으로</button>
    </div>
  );
};

export default ProductDetail;
