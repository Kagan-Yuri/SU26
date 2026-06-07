import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from './components/Home';
import Gallery from './components/Gallery';
// import SideBarAndTable from './components/SideBarAndTable';
// import { Container } from 'react-bootstrap';
// import Header from './components/Header';
import Movies from './components/Movies';
import Books from "./components/Books";
// Import các component bài tập đã làm ở bước trước
// import Tab_S17 from './components/Tab_S17';
// import Modal_S20 from './components/Modal_S20';
// import Alert_S21 from './components/Alert_S21';
// import Card_S22 from './components/Card_S22';
// import UseState from './components/UseState';
// import UseProp from './components/UseProp';
// import Hello from './components/Hello';
// import Paging from "./components/Paging";
// import Avatar from './components/Avatar';
// import { items } from './Data';
import StudentTable from "./components/StudentTable";
// import StudentRegisterForm from "./components/StudentRegisterForm";
// import UseEffect from './components/UseEffect';
import UseParamBookImg from "./components/UseParamBookImg";
// import UseRefHookEx from './components/UseRefHookEx'
// import Lab1 from "./Lab/Lab1";
import HeaderRouter from "./components/HeaderRouter";
import UseParamMovieId from "./components/UseParamMovieId";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <HeaderRouter />
        <Routes>
          <Route path='/home' element={<Movies/>}></Route>
          <Route path='/getview' element={<StudentTable/>}></Route>
          <Route path='/pictures' element={<Gallery />}></Route>
          <Route path='/about' element={<Home />}></Route>
          <Route path='/view-showtime/:id' element={<UseParamMovieId />}></Route>
          <Route path='/help' element={<Books />}></Route>
          <Route path='/view-book/:id' element={<UseParamBookImg />}></Route>
        </Routes>
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
