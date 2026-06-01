// Khuôn mẫu cho một món đồ
function Item({ itemName, price }) {
  return (
    <div>
      <h3>{itemName}</h3>
      <p>Giá: {price}đ</p>
    </div>
  );
}

// Sử dụng cái khuôn đó ở nhiều nơi
function PropsExp2() {
  return (
    <div>
      <Item itemName="Bánh mì" price="15.000" />
      <Item itemName="Cà phê" price="25.000" />
    </div>
  );
}
export default PropsExp2