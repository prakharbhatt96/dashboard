import React from "react";

const getUpdateColor = (type) => {
  const colors = {
    milestone: "bg-yellow-100 text-yellow-600",
    summary: "bg-blue-100 text-blue-600",
    reward: "bg-green-100 text-green-600",
    warning: "bg-red-100 text-red-600",
  };
  return colors[type] || "bg-gray-100 text-gray-600";
};

const UpdatesCard = ({ updates }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Recent Updates</h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${getUpdateColor(update.type)}`}>
              <update.icon size={16} />
            </div>
            <div>
              <div className="font-medium text-sm">{update.title}</div>
              <div className="text-xs text-gray-600">{update.description}</div>
              <div className="text-xs text-gray-500">{update.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesCard;
