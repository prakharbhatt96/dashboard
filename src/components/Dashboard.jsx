import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import ProgressCard from "./dashboard/ProgressCard";
import SubjectsCard from "./dashboard/SubjectsCard";
import StrengthsCard from "./dashboard/StrengthsCard";
import UpdatesCard from "./dashboard/UpdatesCard";
import SafeModeCard from "./dashboard/SafeModeCard";
import {
  Trophy,
  BookOpen,
  Gift,
  AlertCircle,
  Grid3x3,
  Book,
  Shapes,
  Palette,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [safeMode, setSafeMode] = useState(true);
  const [timeLimit, setTimeLimit] = useState("30m");
  const [focusArea, setFocusArea] = useState("Mixed");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", icon: Grid3x3, badge: "New" },
    { name: "UI Elements", icon: Shapes },
    { name: "Form elements", icon: Book },
    { name: "Charts", icon: Trophy },
    { name: "Tables", icon: BookOpen },
    { name: "Icons", icon: Palette },
  ];

  const progressData = [
    { subject: "Math", progress: 8, total: 10, color: "blue" },
    { subject: "English", progress: 15, total: 20, unit: "words", color: "green" },
    { subject: "Shapes", progress: 4, total: 6, unit: "topics", color: "purple" },
    { subject: "Drawing & Craft", progress: 3, total: 5, unit: "projects", color: "orange" },
  ];

  const strengths = [
    { name: "Number Recognition", level: "Strong", stars: 5, score: "5/5" },
    { name: "Addition & Subtraction", level: "Strong", stars: 4, score: "4/5" },
    { name: "Reading Comprehension", level: "Okay", stars: 3, score: "3/5" },
    { name: "Shape Identification", level: "Weak", stars: 2, score: "2/5" },
    { name: "Creative Expression", level: "Strong", stars: 4, score: "4/5" },
  ];

  const recentUpdates = [
    { type: "milestone", title: "Milestone Reached!", description: "Anu completed 50 math problems today!", time: "2 hours ago", icon: Trophy },
    { type: "summary", title: "Daily Summary", description: "Anu learned 5 new words today", time: "4 hours ago", icon: BookOpen },
    { type: "reward", title: "Reward Available", description: "Your child has 10 stars, unlock a reward!", time: "1 day ago", icon: Gift },
    { type: "warning", title: "Learning Time", description: "It's been 2 days since last activity", time: "2 days ago", icon: AlertCircle },
  ];

  return (
    <div className="flex h-screen bg-gray-50 relative overflow-hidden">
      <Sidebar
        sidebarItems={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            <ProgressCard />
            <SubjectsCard progressData={progressData} />
            <StrengthsCard strengths={strengths} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <UpdatesCard updates={recentUpdates} />
            <SafeModeCard
              safeMode={safeMode}
              setSafeMode={setSafeMode}
              timeLimit={timeLimit}
              setTimeLimit={setTimeLimit}
              focusArea={focusArea}
              setFocusArea={setFocusArea}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
