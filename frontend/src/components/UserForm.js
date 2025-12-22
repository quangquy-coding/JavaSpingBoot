import React, { useState, useEffect } from 'react';
import UserService from '../UserService';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Upload } from 'lucide-react';

const UserForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || ''
            });
            setSelectedFile(null);
        } else {
            setFormData({
                name: '',
                email: '',
                phone: ''
            });
            setSelectedFile(null);
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (user) {
            // Update existing user
            UserService.updateUser(user.id, formData)
                .then((response) => {
                    if (selectedFile) {
                        return uploadAvatar(response.data.id);
                    }
                    onSave();
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                });
        } else {
            // Create new user
            UserService.createUser(formData)
                .then((response) => {
                    if (selectedFile) {
                        return uploadAvatar(response.data.id);
                    }
                    onSave();
                })
                .catch(error => {
                    console.error('Error creating user:', error);
                });
        }
    };
    
    const uploadAvatar = (userId) => {
        setUploading(true);
        UserService.uploadAvatar(userId, selectedFile)
            .then(() => {
                setUploading(false);
                onSave();
            })
            .catch(error => {
                console.error('Error uploading avatar:', error);
                setUploading(false);
                onSave();
            });
    };
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user ? 'Sửa User' : 'Thêm User Mới'}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2 text-center">
                        <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img 
                                src={selectedFile ? URL.createObjectURL(selectedFile) : (user && user.avatarUrl ? `http://localhost:8080${user.avatarUrl}` : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150")}
                                alt="Avatar preview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <input
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('avatar-upload').click()}
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                Chọn ảnh
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Tên:</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Điện thoại:</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type="submit" disabled={uploading}>
                            {uploading ? 'Đang lưu...' : (user ? 'Cập nhật' : 'Thêm')}
                        </Button>
                        <Button type="button" variant="outline" onClick={onCancel} disabled={uploading}>
                            Hủy
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default UserForm;