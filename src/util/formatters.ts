/**
 * Filters an array of school objects based on @param query
 * @param {SchoolAndInfo[]} directoryData - Array of school objects to be filtered
 * @param {string} query - Query string from user input in search bar
 * @returns {SchoolAndInfo[]} Filtered array of school objects
 */
export const filterDirectory = (
  directoryData: SchoolAndInfo[],
  query: string
): SchoolAndInfo[] => {
  return directoryData.filter((school: SchoolAndInfo) =>
    school.school_name.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Cleans an array of school objects by removing invalid characters from school names and sorting them alphabetically
 * @param {SchoolAndInfo[]} directoryData - Array of school objects to be cleaned
 * @returns {SchoolAndInfo[]} Cleaned array of school objects
 */
export const cleanData = (directoryData: SchoolAndInfo[]): SchoolAndInfo[] => {
  return (
    directoryData
      // remove invalid characters from each school name
      .map((school: SchoolAndInfo) => ({
        ...school,
        school_name: removeChars(school.school_name),
      }))
      // sort all school names alphabetically
      .sort((school1: SchoolAndInfo, school2: SchoolAndInfo) =>
        school1.school_name
          .toLowerCase()
          .localeCompare(school2.school_name.toLowerCase())
      )
  );
};

/**
 * Removes invalid characters from school name
 * @param {string | undefined} school_name - School name to be cleaned
 * @returns {string} School name with invalid characters removed
 */
export const removeChars = (school_name: string | undefined): string => {
  // null check
  if (school_name === undefined) {
    return "";
  }
  // replace invalid characters with empty string
  return school_name.replace(/[^\w\s&+,'’():.-]/g, "");
};

/**
 * Finds the full name of a borough based on its abbreviation
 * @param {"M" | "Q" | "X" | "K" | "R"} boro - Borough abbreviation
 * @returns {string} Full name of the borough
 */
export const boroughFinder = (boro: "M" | "Q" | "X" | "K" | "R") => {
  switch (boro) {
    case "M":
      return "Manhattan";
    case "Q":
      return "Queens";
    case "X":
      return "Bronx";
    case "K":
      return "Brooklyn";
    case "R":
      return "Staten Island";
    default:
      return "Unknown";
  }
};
