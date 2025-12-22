# CRUD Application - Spring Boot + React.js + MySQL

Dự án CRUD hoàn chỉnh với backend Spring Boot, frontend React.js và database MySQL.

## Yêu cầu hệ thống

- Java 17+
- Node.js 16+
- MySQL 8.0+
- Maven 3.6+

## Cài đặt và chạy

### 1. Cài đặt MySQL
- Tạo database: `crud_db`
- Username: `root`
- Password: `password`
- Port: `3306`

### 2. Chạy Backend (Spring Boot)
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Backend sẽ chạy trên: http://localhost:8080

### 3. Chạy Frontend (React.js)
```bash
cd frontend
npm install
npm start
```
Frontend sẽ chạy trên: http://localhost:3000

## API Endpoints

- GET /api/users - Lấy tất cả users
- GET /api/users/{id} - Lấy user theo ID
- POST /api/users - Tạo user mới
- PUT /api/users/{id} - Cập nhật user
- DELETE /api/users/{id} - Xóa user

## Tính năng

- ✅ Thêm user mới
- ✅ Hiển thị danh sách users
- ✅ Sửa thông tin user
- ✅ Xóa user
- ✅ Validation dữ liệu
- ✅ Responsive UI với Bootstrap

## Cấu trúc dự án

```
CRUD/
├── backend/
│   ├── src/main/java/com/example/crud/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   └── CrudApplication.java
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   ├── UserService.js
    │   └── index.js
    └── package.json
```"# JavaSpingBoot" 
