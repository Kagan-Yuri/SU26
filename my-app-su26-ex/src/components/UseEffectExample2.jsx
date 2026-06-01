import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Sau khi màn hình hiện ra, lấy dữ liệu từ internet
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => setUser(data)); // Lưu dữ liệu vào state để hiển thị
  }, []); // Chỉ lấy dữ liệu 1 lần khi load trang

  if (!user) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h1>Tên người dùng: {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}