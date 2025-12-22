import React from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc, userName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
                >
                    <X className="h-6 w-6" />
                </button>
                <div className="w-96 h-96 overflow-hidden rounded-lg">
                    <img
                        src={imageSrc}
                        alt={userName}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="mt-3 text-center text-gray-700 font-medium">
                    {userName}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;