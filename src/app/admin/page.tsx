'use client';

import { useState, useEffect } from 'react';

interface Stats {
  totalChunks: number;
  isInitialized: boolean;
  files: string[];
  categories: string[];
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/documents');
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setStats(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto p-4 sm:p-8">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Knowledge Base Admin</h1>
          <p className="text-gray-500 mt-1">Status of the RAG Assistant&apos;s knowledge</p>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Live Status</h2>
            <button
              onClick={fetchStats}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
              {isLoading ? 'Loading...' : 'Refresh Status'}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4 bg-red-50 p-3 rounded-lg">Error: {error}</p>}
        </div>

        {isLoading && (
          <div className="text-center py-12 text-lg text-gray-600">Loading knowledge base stats...</div>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatCard title="Initialization Status" value={stats.isInitialized ? 'Complete' : 'Pending'} isSuccess={stats.isInitialized} />
              <StatCard title="Total Files Processed" value={stats.files.length} />
              <StatCard title="Total Knowledge Chunks" value={stats.totalChunks} />
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ListCard title="Processed Files" items={stats.files} />
              <ListCard title="Detected Categories" items={stats.categories} />
            </div>
            
            <div className="mt-8 bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold">How It Works:</h3>
              <p>The system automatically reads all supported files from the `KNOWLEDGE_BASE` folder when the server starts. To add or remove knowledge, simply change the files in that folder and restart the server.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const StatCard = ({ title, value, isSuccess }: { title: string, value: string | number, isSuccess?: boolean }) => (
  <div className="bg-white p-5 rounded-lg shadow-md border">
    <h3 className="text-lg font-medium text-gray-500">{title}</h3>
    <p className={`text-4xl font-bold ${isSuccess === true ? 'text-green-600' : isSuccess === false ? 'text-red-600' : ''}`}>
      {value}
    </p>
  </div>
);

const ListCard = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border">
    <h2 className="text-2xl font-semibold mb-4">{title} ({items.length})</h2>
    {items.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No items found.</p>
    )}
  </div>
); 