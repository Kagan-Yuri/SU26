import * as React from "react";

// Trạng thái khởi tạo ban đầu cho ứng dụng
const initialState = {
  options: [
    { id: 1, name: "First", value: 10 },
    { id: 2, name: "Second", value: 50 },
    { id: 3, name: "Third", value: 200 },
  ],
  quantity: 1,
  selected: 1,
};

// Hàm bổ trợ để kiểm tra điều kiện ẩn/hiện (disable) của các nút tăng/giảm số lượng
function reduceButtonStates(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}

// Hàm bổ trợ để tính toán tổng số tiền dựa trên số lượng và option đang được chọn
function reduceTotal(state) {
  const option = state.options.find(
    (option) => option.id === state.selected
  );
  return { ...state, total: state.quantity * option.value };
}

// Hàm reducer chính để xử lý các hành động (actions) từ người dùng
function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "init":
      newState = reduceTotal(state);
      return reduceButtonStates(newState);
      
    case "decrementQuantity":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
      
    case "incrementQuantity":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonStates(newState);
      
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
      
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}

export default function App() {
  // Khởi tạo useReducer với reducer và initialState
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  // Chạy action 'init' ngay khi component mount để tính toán 'total' và trạng thái button lần đầu tiên
  React.useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  return (
    <>
      {/* Section thay đổi số lượng */}
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>

      {/* Section lựa chọn sản phẩm/option */}
      <section>
        <select
          value={selected}
          onChange={(e) =>
            dispatch({ type: "selectItem", id: e.target.value })
          }
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </section>

      {/* Section hiển thị tổng số tiền */}
      <section>
        <strong>{total}</strong>
      </section>
    </>
  );
}