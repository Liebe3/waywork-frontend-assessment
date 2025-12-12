import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Building2, Clock, DollarSign, MapPin } from "lucide-react";
import { JOBS_DATA } from "../data/jobsData";

const Joblist = ({ handleApply, appliedJobs }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center gap-3 mb-2">
              <div className="p-2 sm:p-3 bg-emerald-500 rounded-lg">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              Available Positions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore opportunities that match your profile
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500 text-white font-semibold shadow-lg rounded-lg">
              {JOBS_DATA.length} Active Jobs
            </Badge>
          </motion.div>
        </div>
      </motion.div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {JOBS_DATA.map((job, index) => {
          const isApplied = appliedJobs.some(
            (appliedJob) => appliedJob.id === job.id
          );

          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.06,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-6">
                <CardHeader className="pb-4 sm:pb-5">
                  <div className="flex justify-between items-start gap-2 sm:gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-700 mb-3">
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                        <span className="font-semibold text-base sm:text-lg line-clamp-1">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    {isApplied && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                        }}
                      >
                        <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3 py-1">
                          ✓ Applied
                        </Badge>
                      </motion.div>
                    )}
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-medium">{job.experience}</span>
                    </div>
                    {job.location && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{job.location}</span>
                      </div>
                    )}
                    {job.salary && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-5 flex flex-col h-full">
                  {/* Skills Section */}
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Required Skills:
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {job.skillsRequired.slice(0, 3).map((skillItem) => (
                        <Badge
                          key={skillItem}
                          variant="outline"
                          className="bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors text-xs sm:text-sm"
                        >
                          {skillItem}
                        </Badge>
                      ))}
                      {job.skillsRequired.length > 3 && (
                        <Badge
                          variant="outline"
                          className="bg-gray-100 border-gray-300 text-gray-700 text-xs sm:text-sm"
                        >
                          +{job.skillsRequired.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description if available */}
                  {job.description && (
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 flex-1">
                      {job.description}
                    </p>
                  )}

                  {/* Apply Button */}
                  <motion.button
                    whileHover={{ scale: isApplied ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleApply(job)}
                    disabled={isApplied}
                    className={`w-full h-11 sm:h-12 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mt-auto cursor-pointer ${
                      isApplied
                        ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <span>✓</span>
                        <span className="hidden sm:inline">Applied</span>
                        <span className="sm:hidden">Applied</span>
                      </>
                    ) : (
                      <>Apply Now</>
                    )}
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Joblist;
