# 🎬Movie-Tickets

## 🎬Trang web bán vé xem phim
Đề tài: Xây dựng trang web bán vé xem phim.

Trang web được xây dựng Html,Css,Js và Mockapi(sql).

### 📌Cách sử dụng

- username ADMIN: admin
- password: thu123

 ## ⚙️ Chức Năng
### 1️⃣ Người Dùng
- Xem danh sách phim theo lịch chiếu.
- Chọn ghế, đặt vé và thanh toán trực tuyến.
- Xem rạp đang chiếu phim.

### 2️⃣ Quản Lý
- Quản lý danh sách phim, lịch chiếu.
- Quản lý phòng chiếu và sơ đồ ghế ngồi.
- Custom danh sách hiển thị.
- Theo dõi hóa đơn đặt.
- Thống kê, báo cáo doanh thu.

---

## 🏗️ Kiến Trúc Hệ Thống
Hệ thống được chia thành các microservices độc lập, giao tiếp với nhau thông qua API Gateway:
- **Proxy**: Xác thực và phân quyền.
- **Api Gateway**: Quản lý các dịch vụ gọi đến, cân bằng tải.
- **Config Service**: Tạo nơi lưu trữ chung các file cấu hình
- **Payment Service**: Xử lý thanh toán, vé.
- **Eureka Service**: Quản lí domain, port của các service.
- **Film Service**: Quản lí về các bộ phim.
- **Notification Service**: Quản lí về thông báo, upload ảnh, email.
- **Room Service**: Quản lí về phòng chiếu.
- **Showtime Service**: Quản lí về thời gian chiếu.

## 🛠️ Công Nghệ Sử Dụng
### Backend
- **Redis**: Lưu trữ cache, tối ưu hiệu suất.
- **MySQL**: Hệ quản trị cơ sở dữ liệu.
- **Zipkin**: Theo dõi hoạt động của các service
- **Docker & Docker Compose**: Đóng gói và triển khai dịch vụ.

### Frontend
- **ReactJS**: Giao diện người dùng.
- **Fecth**: Giao tiếp với API.
- **Tailwind**: Giúp tối ưu hóa css giao diện.

## 📧 Liên Hệ
- **Tác giả**: Hoàng Tuấn Thư
- **Email**: hoangtuanthu981@gmail.com

🚀 Cảm ơn bạn đã quan tâm đến dự án của tôi! 🎉
