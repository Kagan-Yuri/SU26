import React, { useState } from 'react';

function UseStateComparison() {
  // 1. Biến trạng thái (State): React sẽ theo dõi và ghi nhớ
  const [countState, setCountState] = useState(0);

  // 2. Biến bình thường: React sẽ "quên sạch" mỗi khi render lại
  let countNormal = 0;

  const handleNormalClick = () => {
    countNormal = countNormal + 1;
    console.log("Giá trị biến thường (trong console):", countNormal);
  };

  const handleStateClick = () => {
    setCountState(countState + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>1. Biến State: {countState}</h2>
      <button onClick={handleStateClick}>Tăng State</button>

      <hr />

      <h2>2. Biến thường: {countNormal}</h2>
      <p>(Hãy nhìn Console để thấy biến này thực tế có tăng hay không)</p>
      <button onClick={handleNormalClick}>Tăng Biến thường</button>
    </div>
  );
}

export default UseStateComparison;