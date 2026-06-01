import React, { useState } from 'react';
import { Alert, Button, Container, Row, Col, Stack } from 'react-bootstrap';

function Alert_S21() {
  // State để lưu trữ Alert được kích hoạt ở bên phải
  // Bắt đầu với 'null' (không có alert nào)
  const [activeAlert, setActiveAlert] = useState(null);

  // Mảng các loại Alert (variants) từ slide để tạo nút tương ứng
  const alertVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  // Tin nhắn mẫu cho mỗi loại Alert để giao diện chân thực hơn
  const alertMessages = {
    primary: "This is a Primary details message—great choice!",
    secondary: "You have selected a secondary alert, useful for less critical information.",
    success: "Success! Your operation completed—well done!",
    danger: "Oh no! There was a critical error—please investigate.",
    warning: "Warning! Your attention is needed—be cautious.",
    info: "This is a Primary details message—great choice!",
    light: "Primary info—it stands out in a different way.",
    dark: "Dark alert variant chosen—good contrast, nice details."
  };

  // Hàm xử lý khi một nút bên trái được nhấn
  const handleShowAlert = (variant) => {
    setActiveAlert({
      variant: variant,
      message: alertMessages[variant],
    });
  };

  // Hàm xử lý khi đóng alert bên phải
  const handleCloseAlert = () => {
    setActiveAlert(null);
  };

  return (
    <Container className="my-5 p-4 bg-dark text-light border border-secondary rounded">
      <h3 className="mb-4 text-warning">4. Alerts Feedback (Interactive)</h3>
      <Row>
        {/* Cột trái: Hiển thị các NÚT */}
        <Col md={6}>
          <h5 className="mb-3 text-white">Click a button to show an alert:</h5>
          <Stack gap={2} className="col-md-10 mx-auto">
            {alertVariants.map((variant) => (
              <Button 
                key={variant} 
                variant={variant} 
                onClick={() => handleShowAlert(variant)}
                className="w-100 text-capitalize" // Tự động viết hoa chữ cái đầu
              >
                Show {variant} Alert
              </Button>
            ))}
          </Stack>
        </Col>

        {/* Cột phải: Hiển thị Alert được kích hoạt (và các ví dụ gốc) */}
        <Col md={6} className="position-relative" style={{ minHeight: '300px' }}>
          
          {/* VÙNG HIỂN THỊ ALERT KÍCH HOẠT */}
          {/* Chỉ render nếu activeAlert không phải là null */}
          {activeAlert && (
            <Alert 
              variant={activeAlert.variant} 
              onClose={handleCloseAlert} 
              dismissible 
              className="mb-4 border-white border-2 fade in show"
            >
              <Alert.Heading className="text-capitalize">{activeAlert.variant} Alert Active!</Alert.Heading>
              <p>
                You clicked the button on the left. {activeAlert.message}
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, you can close this.
              </p>
            </Alert>
          )}

          {/* Nếu không có alert nào được kích hoạt, hiển thị một chỉ dẫn */}
          {!activeAlert && (
            <Alert variant="secondary" className="mb-4">
              <p className="mb-0">Please click a button on the left to see its details here.</p>
            </Alert>
          )}

          {/* VÙNG GIỮ LẠI BỐI CẢNH BAN ĐẦU */}
          <h5 className="mt-5 mb-3 text-white">Example Static/Dismissible Alerts:</h5>
          {/* Alert tĩnh (Danger) ban đầu */}
          <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Alert>

          {/* Alert có thể đóng (Success) ban đầu */}
          <Alert variant="success" dismissible>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Alert_S21;