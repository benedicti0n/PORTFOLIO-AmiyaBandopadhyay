'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Dashboard() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Awards');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        try {
            setUploading(true);

            // First, upload to your preferred image hosting service (e.g., Cloudinary)
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('category', category);
            formData.append('date', date);

            // Get the auth token from localStorage
            const token = localStorage.getItem('auth-token');
            if (!token) {
                toast.error('Authentication token not found');
                return;
            }

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Image uploaded successfully!');
                setTitle('');
                setCategory('Awards');
                setDate(new Date().toISOString().split('T')[0]);
                setFile(null);
            } else {
                toast.error(data.message || 'Upload failed');
            }
        } catch (err) {
            console.error('Upload error:', err);
            toast.error('An error occurred while uploading');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
                <h1 className="text-2xl text-black font-bold mb-8">Upload New Image</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-black">
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="Awards">Awards</option>
                            <option value="Events">Events</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">
                            Date
                        </label>
                        <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">
                            Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            required
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="mt-1 block w-full text-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={uploading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${uploading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {uploading ? 'Uploading...' : 'Upload Image'}
                    </button>
                </form>
            </div>
        </div>
    );
}
