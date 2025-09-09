import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ count, total = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: total }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={`${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
