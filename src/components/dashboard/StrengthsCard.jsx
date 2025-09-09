import React from "react";
import StarRating from "../common/StarRating";

const getLevelColor = (level) => {
  const colors = {
    Strong: "text-green-600 bg-green-100",
    Okay: "text-yellow-600 bg-yellow-100",
    Weak: "text-red-600 bg-red-100",
  };
  return colors[level] || "text-gray-600 bg-gray-100";
};

const StrengthsCard = ({ strengths }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Strengths & Growth</h2>
      <div className="space-y-4">
        {strengths.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{item.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(item.level)}`}>
                {item.level}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <StarRating count={item.stars} />
              <span className="text-xs text-gray-600">{item.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthsCard;
