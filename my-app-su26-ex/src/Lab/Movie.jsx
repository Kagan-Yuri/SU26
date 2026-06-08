import { Table, Container, Form, Row, Col, Button } from "react-bootstrap";
import { directors, producers, movies } from "./data";
import { React, useState } from "react";

function Movie() {
  // 1. Tạo danh sách Name độc nhất cho thẻ Select (Thêm "All" thay vì "All Years")
  const producerNames = [
    "All Producers",
    ...new Set(producers.map((p) => p.Name)),
  ];
  
  const directorNames = [
    "All Directors",
    ...new Set(directors.map((d) => d.FullName)),
  ];

  // 2. Khai báo các State cần thiết
  const [search, setSearch] = useState("");
  const [selectedP, setSelectedP] = useState("All");
  const [selectedD, setSelectedD] = useState("All");
  const [isDesc, setIsDesc] = useState(false); // State quản lý trạng thái sắp xếp ngày

  // 3. Hàm xử lý logic Tìm kiếm & Lọc điều kiện
  const filteredMovies = movies.filter((m) => {
    // Tìm object producer và director tương ứng với bộ phim hiện tại
    const currentProducer = producers.find((p) => p.id === m.ProducerId);
    const currentDirector = directors.find((d) => d.id === m.DirectorId);

    // Điều kiện lọc theo tên phim
    const matchesTitle = m.Title.toLowerCase().includes(search.toLowerCase());

    // Điều kiện lọc theo Nhà sản xuất
    const matchesP = selectedP === "All" || (currentProducer && currentProducer.Name === selectedP);

    // Điều kiện lọc theo Đạo diễn
    const matchesD = selectedD === "All" || (currentDirector && currentDirector.FullName === selectedD);

    return matchesTitle && matchesP && matchesD;
  });

  // 4. Logic Sắp xếp theo ReleaseDate (Nếu click nút thì kích hoạt)
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (!isDesc) return 0; // Nếu không nhấn nút, giữ nguyên thứ tự ban đầu
    return new Date(b.ReleaseDate) - new Date(a.ReleaseDate); // Giảm dần
  });

  return (
    <Container className="mt-5">
      <h3 className="mb-4 fw-bold">Movies List</h3>
      
      {/* Thanh công cụ Bộ lọc */}
      <Row className="mb-4 g-3">
        {/* Tìm kiếm theo tên phim */}
        <Col md={3}>
          <Form.Control 
            type="text" 
            placeholder="Search by movie title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </Col>

        {/* Lọc Producer */}
        <Col md={3}>
          <Form.Select 
            value={selectedP}
            onChange={(e) => setSelectedP(e.target.value)}
          >
            {producerNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Col>

        {/* Lọc Director */}
        <Col md={3}>
          <Form.Select 
            value={selectedD}
            onChange={(e) => setSelectedD(e.target.value)}
          >
            {directorNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Col>

        {/* Nút bấm thay đổi kiểu Sắp xếp ngày */}
        <Col md={3}>
          <Button 
            variant={isDesc ? "success" : "primary"} 
            className="w-100"
            onClick={() => setIsDesc(!isDesc)}
          >
            {isDesc ? "Sorted (Latest First)" : "Sort Date (desc)"}
          </Button>
        </Col>
      </Row>

      {/* Bảng hiển thị thông tin */}
      <Table bordered striped hover style={{ backgroundColor: "lightblue" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Language</th>
            <th>Producer</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((m) => {
            // Khớp ID để lấy thông tin Tên đầy đủ hiển thị ra cột table
            const pObj = producers.find((p) => p.id === m.ProducerId);
            const dObj = directors.find((d) => d.id === m.DirectorId);

            return (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td className="fw-semibold">{m.Title.trim()}</td>
                <td>{m.ReleaseDate}</td>
                <td>{m.Language}</td>
                <td>{pObj ? pObj.Name : "Unknown Producer"}</td>
                <td>{dObj ? dObj.FullName : "Unknown Director"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Movie;