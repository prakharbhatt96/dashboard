import React from "react";

const Navbar = () => {
  
  const userData = {
    parentName: "Mrs. Pal",
    studentName: "Anu",
    lastActivity: "2h ago from home",
    avatar: "https://i.pravatar.cc/40?img=12",
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
      
      <div className="flex items-center space-x-4">
        
        <img
          src={userData.avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

      
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Hello, {userData.parentName}!
          </h1>
          <p className="text-gray-600">
            Here's {userData.studentName}'s progress today.
          </p>
          <p className="text-sm text-gray-500">
            Last activity: {userData.lastActivity}
          </p>
        </div>
      </div>

     
      <div></div>
    </nav>
  );
};

export default Navbar;
