import React from 'react';
import PropsExp from './PropsExp';

// 1. Component CON: Nhận một cái hàm qua props (đặt tên là onClickButton)
function Child({ onClickButton }) {
  return (
    <button onClick={onClickButton}>
      Bấm vào đây để gọi Cha
    </button>
  );
}

// 2. Component CHA: Định nghĩa hàm và truyền nó xuống cho Con
function PropsExp3() {
  const handleAlert = () => {
    alert("Cha đã nhận được tín hiệu từ Con!");
  };

  return (
    <div>
      <h1>Giao tiếp giữa Cha và Con</h1>
      {/* Truyền hàm handleAlert xuống thông qua prop có tên onClickButton */}
      <Child onClickButton={handleAlert} />
    </div>
  );
}

export default PropsExp3;