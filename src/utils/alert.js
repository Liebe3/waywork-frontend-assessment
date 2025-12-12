import Swal from "sweetalert2";

/**
  Show a warning alert for incomplete profile
 */
export const alertIncompleteProfile = (message) => {
  return Swal.fire({
    icon: "warning",
    title: "Incomplete Profile",
    text:
      message || "Please fill in your skills and experience to find matches!",
    confirmButtonColor: "#10b981",
  });
};

/**
  Show a warning alert for profile incomplete before apply
 */
export const alertProfileIncompleteForApply = () => {
  return Swal.fire({
    icon: "warning",
    title: "Profile Incomplete",
    text: "Please add your first and last name before applying!",
    confirmButtonColor: "#10b981",
  });
};

/**
  Show a success alert for application submission
 */
export const alertApplicationSubmitted = (jobTitle, companyName) => {
  return Swal.fire({
    icon: "success",
    title: "Application Submitted!",
    text: `Your application for ${jobTitle} at ${companyName} has been submitted.`,
    confirmButtonColor: "#10b981",
  });
};

/**
  Show an info alert for no matches found
 */
export const alertNoMatchesFound = () => {
  return Swal.fire({
    icon: "info",
    title: "No Matches Found",
    text: "No jobs match your skills. Try updating your profile!",
    confirmButtonColor: "#10b981",
  });
};

/**
  Show a success alert for matches found
 */
export const alertMatchesFound = (matchCount) => {
  return Swal.fire({
    icon: "success",
    title: "Matches Found!",
    text: `We found ${matchCount} job${
      matchCount === 1 ? "" : "s"
    } matching your skills!`,
    confirmButtonColor: "#10b981",
  });
};
