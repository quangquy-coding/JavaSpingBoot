import React from "react";
import { Users } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Quản lý Users</h1>
              <p className="text-blue-100 text-sm">
                CRUD Application - Spring Boot & React
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-100">Hệ thống quản lý người dùng</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
