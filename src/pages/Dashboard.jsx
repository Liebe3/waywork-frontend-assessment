import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import ApplicationTracker from "../components/ApplicationTracker";
import Joblist from "../components/Joblist";
import Matches from "../components/Matches";
import ProfileForm from "../components/ProfileForm";
import TabNavigation from "../components/TabNavigation";
import { JOBS_DATA } from "../data/jobsData";
import {
  alertApplicationSubmitted,
  alertIncompleteProfile,
  alertMatchesFound,
  alertNoMatchesFound,
  alertProfileIncompleteForApply,
} from "../utils/alert";

const initialUserProfile = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  mobileNumber: "",
  skills: "",
  experience: "",
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [userProfile, setUserProfile] = useState(initialUserProfile);

  const [matchedJobs, setMatchedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const [error, setError] = useState("");

  const handleNumber = (event) => {
    const input = event.target.value;
    const numericInput = input.replace(/\D/g, "");
    setUserProfile({
      ...userProfile,
      mobileNumber: numericInput,
    });
  };

  const handleMatch = () => {
    const {
      firstName,
      lastName,
      email,
      address,
      mobileNumber,
      skills,
      experience,
    } = userProfile;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !skills ||
      !mobileNumber ||
      !experience
    ) {
      alertIncompleteProfile();
      return;
    }

    //validate the number input to be 11 digits only
    if (!/^09\d{9}$/.test(mobileNumber)) {
      setError("Please enter valid number only!");
      return;
    }

    const userSkills = userProfile.skills
      .toLowerCase()
      .split(",")
      .map((skillItem) => skillItem.trim());

    const matches = JOBS_DATA.filter((job) =>
      job.skillsRequired.some((requiredSkill) =>
        userSkills.some(
          (userSkill) =>
            requiredSkill.toLowerCase().includes(userSkill) ||
            userSkill.includes(requiredSkill.toLowerCase())
        )
      )
    );

    setMatchedJobs(matches);
    setActiveTab("matches");
    setError("");

    if (matches.length === 0) {
      alertNoMatchesFound();
    } else {
      alertMatchesFound(matches.length);
    }
  };

  const handleApply = (job) => {
    const { firstName, lastName, email, address, mobileNumber, skills } =
      userProfile;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !mobileNumber ||
      !skills
    ) {
      alertProfileIncompleteForApply();
      return;
    }

    if (!/^\d{11}$/.test(mobileNumber)) {
      setError("Please enter a valid 11-digit mobile number!");
      return;
    }

    const application = {
      ...job,
      appliedDate: new Date().toLocaleDateString(),
      status: "Under Review",
    };

    setAppliedJobs([...appliedJobs, application]);
    alertApplicationSubmitted(job.title, job.company);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-600 mb-2">
                Waywork
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Next generation talent mobility platform
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProfileForm
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                handleNumber={handleNumber}
                handleMatch={handleMatch}
                appliedJobs={appliedJobs}
                error={error}
              />
            </motion.div>
          )}
          {activeTab === "matches" && (
            <motion.div
              key="matches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Matches
                matchedJobs={matchedJobs}
                appliedJobs={appliedJobs}
                handleApply={handleApply}
              />
            </motion.div>
          )}
          {activeTab === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Joblist handleApply={handleApply} appliedJobs={appliedJobs} />
            </motion.div>
          )}
          {activeTab === "applications" && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ApplicationTracker appliedJobs={appliedJobs} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
