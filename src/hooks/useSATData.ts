import { useQuery } from "react-query";

/**
 * Custom hook to fetch SAT data for school with DBN @param schoolDBN
 * @param {string} schoolDBN - District Borough Number (DBN) of the school to fetch SAT data for
 * @returns {UseQueryResult<SchoolAndSATData[], Error>} Query result containing SAT data or error
 */
const useSATData = (schoolDBN: string) => {
  return useQuery<SchoolAndSATData[]>("schoolData", async () => {
    const url = `https://data.cityofnewyork.us/resource/f9bf-2cp4.json?dbn=${schoolDBN}`;

    const response = await fetch(url);

    if (!response) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });
};

export default useSATData;
