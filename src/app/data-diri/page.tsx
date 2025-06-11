"use client";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function DataDiriPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 bg-gray-50 p-8">
          <h2 className="text-2xl font-bold mb-6">Input Data Diri</h2>
          <form className="bg-white p-6 rounded shadow-md max-w-lg mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Nama Lengkap" className="border border-gray-300 rounded px-3 py-2" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded px-3 py-2" />
            <input type="text" placeholder="No. HP" className="border border-gray-300 rounded px-3 py-2" />
            <input type="text" placeholder="Alamat" className="border border-gray-300 rounded px-3 py-2" />
            <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 font-bold hover:bg-green-700 transition">Simpan</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}
