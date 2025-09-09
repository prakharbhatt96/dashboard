import React from "react";
import { Trophy, Clock, Star } from "lucide-react";

const ProgressCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="text-yellow-500" size={20} />
        <h2 className="text-lg font-semibold">Progress at a Glance</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <Clock className="text-blue-500 mx-auto mb-2" size={20} />
          <div className="text-xl font-bold text-blue-500">25</div>
          <div className="text-sm text-gray-600">mins</div>
          <div className="text-xs text-gray-500">Activity Today</div>
        </div>
        <div className="text-center">
          <Star className="text-yellow-500 mx-auto mb-2" size={20} />
          <div className="text-xl font-bold text-yellow-500">12</div>
          <div className="text-sm text-gray-600">Stars</div>
        </div>
        <div className="text-center">
          <Trophy className="text-purple-500 mx-auto mb-2" size={20} />
          <div className="text-sm text-gray-600">Explorer</div>
          <div className="text-xs text-gray-500">Current Level</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Daily Goal</span>
            <span>25/30 mins</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gray-900 h-2 rounded-full" style={{ width: "83%" }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Weekly Streak</span>
            <span>5/7 days</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gray-900 h-2 rounded-full" style={{ width: "71%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
