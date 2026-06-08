import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeEx from "./components/HomeEx";
import Gallery from "./components/Gallery";
import { directors } from "./Lab/data";
// import SideBarAndTable from './components/SideBarAndTable';
// import { Container } from 'react-bootstrap';
// import Header from './components/Header';
import Movies from "./components/Movies";
import Books from "./components/Books";
// Import các component bài tập đã làm
// import Tab_S17 from './components/Tab_S17';
// import Modal_S20 from './components/Modal_S20';
// import Alert_S21 from './components/Alert_S21';
// import Card_S22 from './components/Card_S22';
// import UseProp from './components/UseProp';
// import Hello from './components/Hello';
// import Avatar from './components/Avatar';
// import { items } from './Data';
import StudentTable from "./components/StudentTable";
// import StudentRegisterForm from "./components/StudentRegisterForm";
// import UseEffect from './components/UseEffect';
import UseParamBookImg from "./components/UseParamBookImg";
// import UseRefHookEx from './components/UseRefHookEx'
import Movie from "./Lab/Movie";
import Director from "./Lab/Director";
import Star from "./Lab/Star";
import Producer from "./Lab/Producer";
import Genres from "./Lab/Genres";
import HeaderRouter from "./components/HeaderRouter";
import UseParamMovieId from "./components/UseParamMovieId";
import { UserProvider } from "./components/Page31-34-35/UserContext";
import { StatusProvider } from "./components/Page31-34-35/StatusContext";
import { Page1, Page2, Page3 } from "./components/Page31-34-35/PageUser";
import { Page4, Page5, Page6, Status } from "./components/Page31-34-35/PageStatus";
import Counter from './components/Page42,43/Counter';
import Header from './components/Virtual/Header';
import Menu from './components/Virtual/Menu';
import Footer from './components/Virtual/Footer';
import Home from './components/Virtual/Home';
import About from './components/Virtual/About';
import Blog from './components/Virtual/Blog';
import Contact from './components/Virtual/Contact';

function ChoosePageUser({ page }) {
  const Page = [Page1, Page2, Page3][page];
  return <Page />;
}

function ChoosePageStatus({ page }) {
  const Page = [Page4, Page5, Page6][page];
  return <Page />;
}

// 1. Định nghĩa hàm reducer để quản lý logic thay đổi state
function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error(`${action.type} is not a valid action`);
  }
}



function App() {
  const [page, setPage] = React.useState(0);

  // 2. Khởi tạo useReducer với trạng thái ban đầu là name và age rỗng
  const [{ name, age }, dispatch] = React.useReducer(reducer, {
    name: "",
    age: "",
  });

  return (
    <BrowserRouter>
      <Container>
        <HeaderRouter />
        <Routes>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/getview" element={<StudentTable />}></Route>
          <Route path="/pictures" element={<Gallery />}></Route>
          <Route path="/search" element={<HomeEx />}></Route>
          <Route
            path="/view-showtime/:id"
            element={<UseParamMovieId />}
          ></Route>
          <Route path="/help" element={<Books />}></Route>
          <Route path="/view-book/:id" element={<UseParamBookImg />}></Route>
        </Routes>
      </Container>

      <UserProvider>
        <button onClick={() => setPage(0)} disabled={page === 0}>
          Page 1
        </button>
        <button onClick={() => setPage(1)} disabled={page === 1}>
          Page 2
        </button>
        <button onClick={() => setPage(2)} disabled={page === 2}>
          Page 3
        </button>
        <ChoosePageUser page={page} />
      </UserProvider>

      <StatusProvider>
        <button onClick={() => setPage(0)} disabled={page === 0}>
          Page 1
        </button>
        <button onClick={() => setPage(1)} disabled={page === 1}>
          Page 2
        </button>
        <button onClick={() => setPage(2)} disabled={page === 2}>
          Page 3
        </button>
        <ChoosePageStatus page={page} />
        <Status />
      </StatusProvider>

      {/* Input cho Tên */}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <p>Name: {name}</p>

      {/* Input cho Tuổi */}
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) =>
          dispatch({ type: "changeAge", value: e.target.value })
        }
      />
      <p>Age: {age}</p>

      <Counter/>

      {/* Toàn bộ ứng dụng gói gọn trong một Container giống như hình mẫu */}
      <Container className="mt-4 card shadow-sm p-0 overflow-hidden" style={{ maxWidth: '1100px' }}>
        
        {/* Thanh điều hướng phía trên */}
        <Header />

        {/* Thân ứng dụng chia làm 2 phần bằng Row và Col */}
        <Container fluid className="my-3">
          <Row>
            {/* Cột trái chiếm 3/12 phần màn hình */}
            <Col md={3} className="border-end">
              <Menu />
            </Col>

            {/* Cột phải chiếm 9/12 phần màn hình để hiển thị nội dung trang */}
            <Col md={9}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>

        {/* Thanh chân trang */}
        <Footer />
        
{/* ================= 1. PHẦN DASHBOARD TRÊN CÙNG ================= */}
        <div className="text-center mb-4">
          <h2 className="fw-normal mb-3" style={{ color: "#333" }}>Dashboard</h2>
          
          {/* Hàng 5 nút bấm điều hướng nằm ngang với màu sắc tương ứng trong ảnh */}
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Button as={Link} to="/directors" variant="success" size="sm" className="px-3">
              Directors
            </Button>
            <Button as={Link} to="/producers" variant="info" size="sm" className="px-3 text-white">
              Producers
            </Button>
            <Button as={Link} to="/stars" variant="danger" size="sm" className="px-3">
              Stars
            </Button>
            <Button as={Link} to="/genres" variant="dark" size="sm" className="px-3" style={{ backgroundColor: "#2b3e50" }}>
              Genres
            </Button>
            <Button as={Link} to="/movies" variant="warning" size="sm" className="px-3 text-white">
              Movies
            </Button>
          </div>
        </div>

        {/* ================= 2. PHẦN THÂN CHIA BỐ CỤC (ROW) ================= */}
        <Row className="mt-4">
          
          {/* CỘT TRÁI: Chỉ hiển thị danh sách Directors cố định (Bullet points) */}
          <Col md={2} className="pe-3">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "1.1rem" }}>Directors</h5>
            <ul className="list-unstyled ps-2" style={{ fontSize: "0.85rem", lineHeight: "1.8" }}>
              {directors.map((d) => (
                <li key={d.id} className="text-truncate">
                  <span className="text-muted me-1">•</span>
                  {/* Bạn có thể click vào tên để nhảy nhanh sang trang directors */}
                  <Link to="/directors" className="text-decoration-none text-primary">
                    {d.FullName}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* CỘT PHẢI: Vùng hiển thị nội dung chính thay đổi theo Router */}
          <Col md={10} className="border-start ps-4">
            <Routes>
              {/* Mặc định vừa vào trang sẽ hiển thị giao diện Movies */}
              <Route path="/" element={<Navigate to="/movies" replace />} />
              
              <Route path="/movies" element={
                <div>
                  <h3 className="text-center mb-3 text-secondary">Movies Management</h3>
                  <Movie />
                </div>
              } />
              
              <Route path="/directors" element={<Director />} />
              <Route path="/producers" element={<Producer />} />
              <Route path="/stars" element={<Star />} />
              <Route path="/genres" element={<Genres />} />
              
              {/* Trang dự phòng */}
              <Route path="*" element={<div className="text-center p-4 text-muted">Trang không tồn tại!</div>} />
            </Routes>
          </Col>

        </Row>

      </Container>
      {/* 
      <UseProp width="200px" height="100px" color="#fedede" title="My Box" />
      <UseProp/>
      <Hello who="Alice" age={30} /> */}
      {/* { items?.map((t) => (<Avatar name={t.name} gender={t.gender} image={t.image} />)) } */}
      {/* <UseEffect /> */}
      {/* <StudentTable />
      <Books />
      <StudentRegisterForm /> */}
      {/* <hr/>
      <Director/>
      <hr/>
      <Star/>
      <hr/>
      <Movies/> */}
      {/* <UseRefHookEx /> */}
    </BrowserRouter>
  );
}

export default App;
