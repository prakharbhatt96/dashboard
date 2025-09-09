import React from "react";
import { Search, X } from "lucide-react";

const Sidebar = ({ sidebarItems, activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <span className="font-semibold">E-Learning Platform</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg"
            />
          </div>
        </div>

        <nav className="px-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                activeTab === item.name
                  ? "bg-pink-500 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon size={16} />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-xs px-2 py-1 rounded">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
