import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
} from "lucide-react";

const ApplicationTracker = ({ appliedJobs }) => {
  const getStatusColor = (status) => {
    const colors = {
      "Under Review": "bg-amber-500 hover:bg-amber-600",
      Accepted: "bg-emerald-500 hover:bg-emerald-600",
      Rejected: "bg-red-500 hover:bg-red-600",
      Interview: "bg-blue-500 hover:bg-blue-600",
    };
    return colors[status] || "bg-gray-500";
  };

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
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center gap-3 mb-2">
              <div className="p-2 sm:p-3 bg-emerald-500 rounded-lg">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              Your Applications
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Track the status of your job applications
            </p>
          </div>
          {appliedJobs.length > 0 && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500 text-white font-semibold shadow-lg rounded-lg">
                {appliedJobs.length}{" "}
                {appliedJobs.length === 1 ? "Application" : "Applications"}
              </Badge>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Empty State */}
      {appliedJobs.length === 0 ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <Card className="border-2 border-dashed border-gray-300 overflow-hidden">
            <CardContent className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center mb-6"
              >
                <div className="p-6 sm:p-8 bg-emerald-50 rounded-full">
                  <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400" />
                </div>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                No applications yet
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto text-base sm:text-lg">
                Start exploring opportunities and apply to jobs that match your
                skills and experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
          {appliedJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="py-6">
                <CardHeader className="pb-4 sm:pb-5">
                  <div className="flex justify-between items-start gap-3 sm:gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg sm:text-2xl text-gray-900 mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="font-medium text-base line-clamp-1">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                      className="shrink-0"
                    >
                      <Badge
                        className={`${getStatusColor(
                          job.status
                        )} text-white shadow-md text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 py-1 sm:py-2 font-semibold`}
                      >
                        {job.status}
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-5">
                  
                  {/* Job Details */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-medium">
                        Applied {job.appliedDate}
                      </span>
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

                  {/* Skills Section */}
                  {job.skillsRequired && job.skillsRequired.length > 0 && (
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {job.skillsRequired.slice(0, 5).map((skillItem) => (
                          <Badge
                            key={skillItem}
                            variant="outline"
                            className="text-xs sm:text-sm bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          >
                            {skillItem}
                          </Badge>
                        ))}
                        {job.skillsRequired.length > 5 && (
                          <Badge
                            variant="outline"
                            className="text-xs sm:text-sm bg-gray-100 border-gray-300 text-gray-700"
                          >
                            +{job.skillsRequired.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ApplicationTracker;
