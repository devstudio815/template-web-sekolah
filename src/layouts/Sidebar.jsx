import { iconMap } from "@/data/SidebarGuru";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ data, isOpen, setIsOpen }) {
  const pathname = usePathname(); // Gunakan pathname untuk tracking active link

  const handleLinkClick = () => {
    // Tutup sidebar setelah klik (untuk mobile)
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay untuk Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white shadow-xl z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 w-20" : "-translate-x-full w-64"}
          lg:translate-x-0 lg:static flex flex-col
        `}
      >
        {/* Header Sidebar */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex text-white items-center justify-center font-bold">
              G
            </div>
            {!isOpen && (
              <span className="font-semibold text-gray-800">
                Selamat Datang
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`flex-1 overflow-y-auto mt-2 ${isOpen ? "px-2" : "px-4"}`}
        >
          <ul className="space-y-4">
            {data.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isActive = pathname === item.link;

              return (
                <li
                  key={index}
                  className={`font-medium ${isOpen ? "w-14" : "w-full"}`}
                >
                  <Link
                    href={item.link}
                    onClick={handleLinkClick}
                    className={`
                      flex items-center gap-3 py-2 px-4 rounded-xl border
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary text-white shadow-md border-primary"
                          : "text-gray-700 hover:text-white hover:bg-primary border-gray-200"
                      }
                    `}
                  >
                    {IconComponent && <IconComponent size={20} />}
                    <span
                      className={`font-medium ${isOpen ? "hidden" : "block"}`}
                    >
                      {item.name}
                    </span>
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
