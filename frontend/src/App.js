import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Plus } from 'lucide-react';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleAdd = () => {
        setSelectedUser(null);
        setShowForm(true);
    };

    const handleSave = () => {
        setShowForm(false);
        setSelectedUser(null);
        setRefresh(refresh + 1);
        showToast(selectedUser ? 'Cập nhật user thành công!' : 'Thêm user thành công!', 'success');
    };

    const handleCancel = () => {
        setShowForm(false);
        setSelectedUser(null);
    };

    const handleRefresh = () => {
        setRefresh(refresh + 1);
    };

    const handleDelete = () => {
        showToast('Xóa user thành công!', 'success');
        setRefresh(refresh + 1);
    };

    const showToast = (message, type) => {
        setToast({ message, type, isVisible: true });
    };

    const hideToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            
            <main className="flex-1 p-4 pt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <UserList 
                                onEdit={handleEdit}
                                onRefresh={handleRefresh}
                                onDelete={handleDelete}
                                refresh={refresh}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            {!showForm ? (
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <Button onClick={handleAdd} className="w-full">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Thêm User Mới
                                        </Button>
                                    </CardContent>
                                </Card>
                            ) : (
                                <UserForm 
                                    user={selectedUser}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
            
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
            
            <Footer />
        </div>
    );
}

export default App;