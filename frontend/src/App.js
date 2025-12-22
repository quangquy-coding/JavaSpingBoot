import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Plus } from 'lucide-react';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(0);

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
    };

    const handleCancel = () => {
        setShowForm(false);
        setSelectedUser(null);
    };

    const handleRefresh = () => {
        setRefresh(refresh + 1);
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
            
            <Footer />
        </div>
    );
}

export default App;