import React from 'react';

// 1. Component CON: Nhận dữ liệu (props)
// Ở đây mình dùng Destructuring { name } để lấy thẳng tên ra
function Welcome({ name }) {
  return <h1>Chào bạn, {name}!</h1>;
}

// 2. Component CHA: Truyền dữ liệu đi
function PropsExp() {
  return (
    <div>
      <Welcome name="An" />
      <Welcome name="Bình" />
      <Welcome name="Chi" />
    </div>
  );
}

export default PropsExp;