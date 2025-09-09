import React from "react";
import { Grid3x3, Book, Shapes, Palette } from "lucide-react";
import ProgressBar from "../common/ProgressBar";

const getColorClass = (color) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };
  return colors[color] || "bg-gray-100 text-gray-600";
};

const SubjectsCard = ({ progressData }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Learning Subjects</h2>
      <div className="space-y-4">
        {progressData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClass(item.color)}`}>
                {item.subject === "Math" && <Grid3x3 size={16} />}
                {item.subject === "English" && <Book size={16} />}
                {item.subject === "Shapes" && <Shapes size={16} />}
                {item.subject === "Drawing & Craft" && <Palette size={16} />}
              </div>
              <div>
                <div className="font-medium text-sm">{item.subject}</div>
                <div className="text-xs text-gray-600">
                  Progress {item.progress}
                  {item.unit ? ` ${item.unit}` : `/${item.total}`}
                </div>
              </div>
            </div>
            <div className="w-24">
              <ProgressBar
                progress={(item.progress / item.total) * 100}
                color={item.color}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsCard;
