import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Award, Briefcase, Mail, User } from "lucide-react";

const ProfileForm = ({
  userProfile,
  setUserProfile,
  handleMatch,
  handleNumber,
  error,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-6xl mx-auto space-y-8"
    >
      <Card className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
        <CardHeader className="bg-emerald-50 pb-8 pt-8">
          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 bg-emerald-500 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <User className="w-7 h-7 text-white" />
            </motion.div>
            <div className="flex-1">
              <CardTitle className="text-3xl font-bold text-emerald-600">
                Your Profile
              </CardTitle>
              <CardDescription className="text-base mt-2 text-gray-600">
                Tell us about yourself to find job matches
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-8 pb-8 px-6 sm:px-8">
          {/* Personal Information Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <User className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Information
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-gray-700"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={userProfile.firstName}
                  required
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      firstName: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-gray-700"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={userProfile.lastName}
                  required
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      lastName: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <Mail className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Contact Details
              </h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={userProfile.email}
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      email: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="mobileNumber"
                  className="text-sm font-semibold text-gray-700"
                >
                  Mobile Number
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  inputMode="numeric"
                  placeholder="09XX XXX XXXX"
                  maxLength={11}
                  value={userProfile.mobileNumber}
                  onChange={handleNumber}
                  required
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="address"
                  className="text-sm font-semibold text-gray-700"
                >
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="123 Main Street, City, State 12345"
                  value={userProfile.address}
                  required
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      address: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Professional Background Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Professional Background
              </h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="skills"
                  className="text-sm font-semibold text-gray-700"
                >
                  Skills
                  <span className="text-xs font-normal text-gray-500 ml-2">
                    (comma-separated)
                  </span>
                </Label>
                <Input
                  id="skills"
                  placeholder="React, JavaScript, Node.js, TypeScript"
                  value={userProfile.skills}
                  required
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      skills: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="experience"
                  className="text-sm font-semibold text-gray-700"
                >
                  Years of Experience
                </Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="10"
                  value={userProfile.experience}
                  onChange={(event) =>
                    setUserProfile({
                      ...userProfile,
                      experience: event.target.value,
                    })
                  }
                  className="h-12 text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Find Matches Button */}
          <motion.button
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMatch}
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-base shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 cursor-pointer"
          >
            <Award className="w-6 h-6" />
            Find My Job Matches
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileForm;
