import React from "react";
import { Send } from "lucide-react";

const SafeModeCard = ({ safeMode, setSafeMode, timeLimit, setTimeLimit, focusArea, setFocusArea }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Safe Mode</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Enable Safe Mode</span>
          <button
            onClick={() => setSafeMode(!safeMode)}
            className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors ${
              safeMode ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                safeMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div>
          <label className="text-sm font-medium">Set Time Limit</label>
          <select
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500"
          >
            <option>15m</option>
            <option>30m</option>
            <option>45m</option>
            <option>1h</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Focus Area</label>
          <select
            value={focusArea}
            onChange={(e) => setFocusArea(e.target.value)}
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500"
          >
            <option>Math</option>
            <option>English</option>
            <option>Shapes</option>
            <option>Drawing</option>
            <option>Mixed</option>
          </select>
        </div>

        <button className="w-full bg-pink-500 text-white rounded-lg py-2 text-sm font-medium hover:bg-pink-600 flex items-center justify-center space-x-2">
          <Send size={16} />
          <span>Save Preferences</span>
        </button>
      </div>
    </div>
  );
};

export default SafeModeCard;
