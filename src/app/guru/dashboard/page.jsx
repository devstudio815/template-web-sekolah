"use client";
import { DataSidebarGuru } from "@/data/SidebarGuru";
import { Sidebar } from "@/layouts/Sidebar";
import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        data={DataSidebarGuru}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </div>
  );
}
