import { useQuery } from "react-query";

/**
 * Custom hook to fetch directory data (school_name, dbn, boro, and overview_paragraph) for all schools
 * @returns {UseQueryResult<SchoolAndInfo[], Error>} Query result containing directory data or error
 */
const useDirectoryData = () => {
  return useQuery<SchoolAndInfo[]>("directoryData", async () => {
    const url = `https://data.cityofnewyork.us/resource/s3k6-pzi2.json?$select=school_name,dbn,boro,overview_paragraph`;

    const response = await fetch(url);

    if (!response) {
      throw new Error("Error fetching directory data");
    }

    return response.json();
  });
};

export default useDirectoryData;
