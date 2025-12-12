import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";

const Matches = ({ matchedJobs, appliedJobs, handleApply }) => {
  if (matchedJobs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-amber-100 rounded-full">
              <Award className="w-10 h-10 text-amber-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-amber-900 mb-2">
            No Matches Found
          </h3>
          <p className="text-amber-800 max-w-md mx-auto">
            We couldn't find any jobs matching your skills. Try updating your
            profile with different skills or experience level.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-wrap items-center gap-4 bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
        <motion.div
          className="p-3 bg-emerald-500 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Briefcase className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-3xl font-bold text-emerald-600">Matched Jobs</h3>
          <p className="text-sm text-gray-600 mt-1">
            Job opportunities based on your skills
          </p>
        </div>
        <Badge className="bg-emerald-600 text-white text-base font-bold px-5 py-2 rounded-full shadow-lg">
          {matchedJobs.length} Job{matchedJobs.length === 1 ? "" : "s"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="h-full border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 overflow-hidden group bg-white">
              <CardContent className="pt-7 pb-6 px-6 h-full flex flex-col space-y-5">
                <div className="space-y-3">
                  <h4 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                    {job.title}
                  </h4>
                  <p className="text-base text-gray-600 font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    {job.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skillsRequired.slice(0, 3).map((skillItem) => (
                    <Badge
                      key={skillItem}
                      variant="outline"
                      className="text-sm bg-emerald-50 text-emerald-700 border-emerald-200 font-medium px-3 py-1"
                    >
                      {skillItem}
                    </Badge>
                  ))}
                  {job.skillsRequired.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-sm bg-gray-100 text-gray-700 border-gray-300 font-medium px-3 py-1"
                    >
                      +{job.skillsRequired.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="mt-auto pt-3">
                  <motion.button
                    whileHover={{
                      scale: appliedJobs.some(
                        (appliedJob) => appliedJob.id === job.id
                      )
                        ? 1
                        : 1.02,
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleApply(job)}
                    disabled={appliedJobs.some(
                      (appliedJob) => appliedJob.id === job.id
                    )}
                    className={`w-full h-11 font-bold rounded-xl transition-all duration-300 text-base shadow-md ${
                      appliedJobs.some((appliedJob) => appliedJob.id === job.id)
                        ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}
                  >
                    {appliedJobs.some((appliedJob) => appliedJob.id === job.id)
                      ? "✓ Applied"
                      : "Apply Now"}
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Matches;
