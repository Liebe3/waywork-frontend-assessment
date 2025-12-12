import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Sparkles, User } from "lucide-react";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "matches", label: "Matches", icon: Sparkles },
  { id: "jobs", label: "All Jobs", icon: Briefcase },
  { id: "applications", label: "Applications", icon: CheckCircle },
];

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-4 border-b border-gray-200 pb-2 sm:pb-0">
        {TABS.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center justify-center sm:justify-start gap-2 px-2 sm:px-6 py-2 sm:py-4 font-medium text-xs sm:text-base rounded-lg sm:rounded-t-lg transition-all duration-200 relative cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-emerald-100 text-emerald-700 sm:bg-transparent sm:text-emerald-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 sm:bg-transparent sm:text-gray-600 sm:hover:text-emerald-600"
            } sm:flex-none flex-1`}
          >
            <tab.icon className="w-5 h-5 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">{tab.label}</span>

            {/* Active indicator */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full sm:left-0 sm:right-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TabNavigation;
