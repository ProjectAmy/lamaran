"use client";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="grow bg-gray-50 p-8">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>
          <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
            <p className="mb-4">Aplikasi ini dibuat untuk membantu proses rekrutmen dan pengelolaan data pelamar secara efisien dan modern.</p>
            <p className="mb-2">Versi: <span className="font-mono">1.0.0</span></p>
            <p>Dikembangkan oleh Project Amy &mdash; {new Date().getFullYear()}</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
