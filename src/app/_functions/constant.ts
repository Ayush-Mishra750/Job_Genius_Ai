export const SESSION_LIFETIME = 2*24*60*60;
export const SESSION_REFRESH_TIME = SESSION_LIFETIME / 2;

export const SALARY_CURRENCY = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "JPY",
  "INR",
  "NPR",
] as const;

export const SALARY_PERIOD = ["Hourly", "Monthly", "Yearly"] as const;

export const JOB_TYPE = ["Remote", "Hybrid", "On-Site"] as const;

export const WORK_TYPE = [
  "Full-Time",
  "Part-Time",
  "Contract",
  "Temporary",
  "Freelance",
] as const;

export const JOB_LEVEL = [
  "Internship",
  "Entry Level",
  "Junior",
  "Mid Level",
  "Senior Level",
  "Lead",
  "Manager",
  "Director",
  "Executive",
] as const;

export const MIN_EDUCATION = [
  "None",
  "High School",
  "Undergraduate",
  "Masters",
  "Phd",
] as const;