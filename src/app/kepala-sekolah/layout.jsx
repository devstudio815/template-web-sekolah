"use client";
import { Button } from "@/components";
import { DataSidebarGuru, DataSidebarKepsek } from "@/data/Sidebar";
import { Sidebar } from "@/layouts/Sidebar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Page({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed Position */}
      <div className="fixed top-0 left-0 h-screen z-40">
        <Sidebar
          data={DataSidebarKepsek}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "pl-20" : "pl-64"
        }`}
      >
        {/* Header dengan Tombol Toggle */}
        <header className=" shadow-sm sticky bg-white top-0 z-30">
          <div className="flex items-center px-6 py-3">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
              className="text-white"
            >
              {isSidebarOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </Button>
            <h2 className="ml-4 text-xl font-semibold text-gray-800">
              Dashboard Keapala Sekolah
            </h2>
          </div>
        </header>
        {children}
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
