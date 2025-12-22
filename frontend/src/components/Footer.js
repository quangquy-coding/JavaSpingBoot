import React from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CRUD Application</h3>
            <p className="text-gray-300 text-sm">
              Ứng dụng quản lý người dùng được xây dựng với Spring Boot và
              React.js
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Công nghệ</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Spring Boot 3.2</li>
              <li>• React.js 18</li>
              <li>• Tailwind CSS</li>
              <li>• MySQL Database</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tính năng</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Thêm người dùng</li>
              <li>• Sửa thông tin</li>
              <li>• Xóa người dùng</li>
              <li>• Validation dữ liệu</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <span>Quang Quý</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and</span>
            <Code className="h-4 w-4 text-blue-400" />
            <span>© 2025 CRUD App</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
