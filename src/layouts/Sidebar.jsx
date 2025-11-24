import { iconMap } from "@/data/SidebarGuru";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Sidebar({ data, isOpen, setIsOpen }) {
  const [activeLink, setActiveLink] = useState(data[0]?.link);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen shadow-xl z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static w-64 flex flex-col
        `}
      >
        <div className="p-4 border-b border-accent flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex text-white items-center justify-center font-bold">
              G
            </div>
            <span className="font-semibold text-gray-800">Selamat Datang</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-4">
            {data.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isActive = activeLink === item.link;

              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(item.link);
                      setIsOpen(false);
                    }}
                    className={`
                        flex items-center gap-3 py-2 px-4 rounded-xl border
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-primary text-white shadow-md"
                            : "text-gray-700 hover:text-white hover:bg-primary"
                        }
                      `}
                  >
                    {IconComponent && <IconComponent size={20} />}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
