"use client";
import { DataSidebarGuru } from "@/data/SidebarGuru";
import { DashboardGuru } from "@/features/guru/DashboardGuru";
import { Sidebar } from "@/layouts/Sidebar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return <DashboardGuru />;
}
