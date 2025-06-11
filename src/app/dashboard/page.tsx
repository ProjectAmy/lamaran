"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="grow bg-gray-50 p-8">
          <div className="max-w-[700px] mx-auto w-full">
            {/* Map Journey dengan Judul di Tengah dan Tombol di bawah icon kiri */}
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Tahapan Seleksi Rekrutmen</h2>
              <div className="flex items-end justify-center gap-0">
                {/* Step 1 */}
                <div className="flex flex-col items-center w-32">
                  <div className="rounded-full bg-white shadow-md w-20 h-20 flex items-center justify-center text-3xl mb-2 border-4 border-green-500">📄</div>
                  <span className="text-sm font-semibold text-gray-700 mt-1">Berkas</span>
                </div>
                {/* Line */}
                <div className="h-1 w-8 bg-green-400 mx-1 mb-12" />
                {/* Step 2 */}
                <div className="flex flex-col items-center w-32">
                  <div className="rounded-full bg-white shadow-md w-20 h-20 flex items-center justify-center text-3xl mb-2 border-4 border-green-500">📝</div>
                  <span className="text-sm font-semibold text-gray-700 mt-1">Evaluasi</span>
                </div>
                <div className="h-1 w-8 bg-green-400 mx-1 mb-12" />
                {/* Step 3 */}
                <div className="flex flex-col items-center w-32">
                  <div className="rounded-full bg-white shadow-md w-20 h-20 flex items-center justify-center text-3xl mb-2 border-4 border-green-500">🤝</div>
                  <span className="text-sm font-semibold text-gray-700 mt-1">Wawancara</span>
                </div>
                <div className="h-1 w-8 bg-green-400 mx-1 mb-12" />
                {/* Step 4 */}
                <div className="flex flex-col items-center w-32">
                  <div className="rounded-full bg-white shadow-md w-20 h-20 flex items-center justify-center text-3xl mb-2 border-4 border-green-500">📢</div>
                  <span className="text-sm font-semibold text-gray-700 mt-1">Pengumuman</span>
                </div>
              </div>
              {/* Card Info Lowongan */}
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4">Lowongan Tersedia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Data dummy lowongan */}
                  {[
                    {
                      nama: 'Guru Matematika',
                      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=256&h=256',
                      status: 'Dibuka',
                    },
                    {
                      nama: 'Staff Administrasi',
                      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256',
                      status: 'Dibuka',
                    },
                    {
                      nama: 'Guru Bahasa Inggris',
                      img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256',
                      status: 'Tutup',
                    },
                    {
                      nama: 'Operator IT',
                      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256',
                      status: 'Dibuka',
                    },
                  ].map((job, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md p-5 flex gap-4 items-center border border-gray-100">
                      <img src={job.img} alt={job.nama} className="w-16 h-16 rounded-full object-cover border-2 border-green-400" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-base mb-1">{job.nama}</div>
                        {job.status === 'Dibuka' ? (
                          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Masih Dibuka</span>
                        ) : (
                          <span className="inline-block bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-bold">Sudah Tutup</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Tombol + Lamaran di bawah map, rata kiri sejajar dengan icon Berkas */}
            <div className="mb-12 flex justify-center pt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow transition-all text-lg">+ Lamaran</button>
            </div>
            {/* Tabel Daftar Lamaran */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">No</th>
                    <th className="py-3 px-4 text-left">Posisi/Jabatan</th>
                    <th className="py-3 px-4 text-left">Status Lamaran</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data dummy */}
                  {[
                    { posisi: 'Guru Matematika', status: 'Berkas' },
                    { posisi: 'Staff Administrasi', status: 'Evaluasi' },
                    { posisi: 'Guru Bahasa Inggris', status: 'Wawancara' },
                    { posisi: 'Operator IT', status: 'Pengumuman' },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b last:border-none">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{item.posisi}</td>
                      <td className="py-2 px-4">
                        {item.status === 'Berkas' && (
                          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-semibold">Berkas</span>
                        )}
                        {item.status === 'Evaluasi' && (
                          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold">Evaluasi</span>
                        )}
                        {item.status === 'Wawancara' && (
                          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">Wawancara</span>
                        )}
                        {item.status === 'Pengumuman' && (
                          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-semibold">Pengumuman</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
