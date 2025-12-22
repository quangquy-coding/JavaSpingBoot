import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Toast = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const Icon = type === 'success' ? CheckCircle : XCircle;

    return (
        <div className={`fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 min-w-80`}>
            <Icon className="h-5 w-5" />
            <span className="flex-1">{message}</span>
            <button onClick={onClose} className="text-white hover:text-gray-200">
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default Toast;