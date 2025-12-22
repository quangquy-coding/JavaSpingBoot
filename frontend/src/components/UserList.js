import React, { useState, useEffect } from "react";
import UserService from "../UserService";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import ImageModal from "./ImageModal";

const UserList = ({ onEdit, onRefresh, onDelete, refresh }) => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', name: '' });

  useEffect(() => {
    loadUsers();
  }, [refresh]);

  const loadUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error loading users:", error);
      });
  };

  const deleteUser = (id) => {
    if (id <= 5) {
      alert("Định mệnh xóa thì còn đéo gì để test");
      return;
    }

    if (window.confirm("Bạn có chắc muốn xóa user này?")) {
      UserService.deleteUser(id)
        .then(() => {
          onDelete();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          if (error.response && error.response.data) {
            alert(error.response.data);
          }
        });
    }
  };

  const openImageModal = (imageSrc, userName) => {
    setSelectedImage({ src: imageSrc, name: userName });
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage({ src: '', name: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Avatar</th>
                <th className="text-left p-4 font-medium">ID</th>
                <th className="text-left p-4 font-medium">Tên</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Điện thoại</th>
                <th className="text-left p-4 font-medium">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img 
                      src={user.avatarUrl ? `http://localhost:8080${user.avatarUrl}` : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"} 
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImageModal(
                        user.avatarUrl ? `http://localhost:8080${user.avatarUrl}` : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
                        user.name
                      )}
                    />
                  </td>
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.phone}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => onEdit(user)}>
                        <Pencil className="h-4 w-4 mr-1" />
                        Sửa
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteUser(user.id)}
                        disabled={user.id <= 5}
                        className={
                          user.id <= 5 ? "opacity-50 cursor-not-allowed" : ""
                        }
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        {user.id <= 5 ? "Không thể xóa" : "Xóa"}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      
      <ImageModal
        isOpen={modalOpen}
        onClose={closeImageModal}
        imageSrc={selectedImage.src}
        userName={selectedImage.name}
      />
    </Card>
  );
};

export default UserList;
