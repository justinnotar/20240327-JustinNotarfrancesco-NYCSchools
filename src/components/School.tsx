import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useDirectoryDataContext } from "../providers/DirectoryDataContextProvider";
import useSATData from "../hooks/useSATData";
import { boroughFinder, removeChars } from "../util/formatters";
import Table from "./Table";
import content from "../assets/content.json";

const School = () => {
  // DBN is fetched from url param (with empty string as fallback)
  const schoolDBN = useParams().dbn || "";
  // get SAT data from useSATData hook
  const { data: satData, isLoading: isSATDataLoading } = useSATData(schoolDBN);
  // satData can possibly be undefined, so state is created to track whether it is empty and error component should be displayed
  const [isEmptyArray, setIsEmptyArray] = useState<boolean>(false);
  // get directory data from context to combine with SAT data to create allSchoolData object
  const { data: directoryData, isLoading: isDirectoryDataLoading } =
    useDirectoryDataContext();
  // allSchoolData state created to preserve data after re-render
  const [allSchoolData, setAllSchoolData] = useState<SchoolAndInfoAndSATData>({
    dbn: "",
    boro: "",
    school_name: "",
    overview_paragraph: "",
    num_of_sat_test_takers: "",
    sat_critical_reading_avg_score: "",
    sat_math_avg_score: "",
  });
  useEffect(() => {
    // if SAT data is available and not an empty array
    if (satData && satData[0]) {
      // satData && satData[0] is truthy so we know SAT array has data
      setIsEmptyArray(false);
      // in the array of directory data, find the school that matches the DBN of the SAT data
      let thisSchool =
        directoryData &&
        directoryData.find((school: SchoolAndInfo) => school.dbn === schoolDBN);
      // combine all school data into allSchoolData object
      setAllSchoolData({
        dbn: satData[0].dbn,
        boro: boroughFinder(thisSchool?.boro),
        school_name: satData[0].school_name,
        overview_paragraph: removeChars(thisSchool?.overview_paragraph),
        num_of_sat_test_takers: satData[0].num_of_sat_test_takers,
        sat_critical_reading_avg_score:
          satData[0].sat_critical_reading_avg_score,
        sat_math_avg_score: satData[0].sat_math_avg_score,
      } as SchoolAndInfoAndSATData);
    } else {
      // SAT data is not available so set empty state to true
      setIsEmptyArray(true);
    }
  }, [schoolDBN, satData, directoryData]);

  return (
    <div className="pt-16">
      {
        (isSATDataLoading || isDirectoryDataLoading) && (
          <Loader />
        ) /* if data from either useSATData hook or context is loading, then display loader component */
      }
      {
        !(isSATDataLoading || isDirectoryDataLoading) && isEmptyArray && (
          <div className="flex justify-center text-slate-900 text-xl">
            {content.pageError}&nbsp;<b>{schoolDBN}</b>
          </div>
        ) /* if data is done loading and SAT data is an empty array, then display error component */
      }
      {
        !(isSATDataLoading || isDirectoryDataLoading) && !isEmptyArray && (
          <Table {...allSchoolData} />
        ) /* if data is done loading and array has SAT data, then display data in table */
      }
    </div>
  );
};

export default School;
