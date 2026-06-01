import React, { useState } from 'react';

function UseStateExample() {
  // 1. Khai báo useState
  // 'count' là giá trị hiện tại
  // 'setCount' là hàm để thay đổi giá trị đó
  const [count, setCount] = useState(0); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Số hiện tại: {count}</h1>
      
      {/* 2. Khi nhấn nút, ta gọi hàm setCount để cập nhật */}
      <button onClick={() => setCount(count + 1)}>
        Tăng lên
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        Giảm xuống
      </button>
    </div>
  );
}

export default UseStateExample;