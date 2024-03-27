import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cleanData, filterDirectory } from "../util/formatters";
import Loader from "./Loader";
import { useDirectoryDataContext } from "../providers/DirectoryDataContextProvider";
import content from "../assets/content.json";

const SearchBar = () => {
  // create state for user input
  const [query, setQuery] = useState("");
  // create state for cleaned data
  const [cleanedData, setCleanedData] = useState<SchoolAndInfo[]>([]);
  // get directory data from context
  const { data: directoryData, isLoading } = useDirectoryDataContext();
  // create empty object for filtered directory data
  let filteredDirectory: SchoolAndInfo[] = [];
  // remove invalid characters and sort the list of schools alphabetically
  // this is an expensive operation, so only do it once directoryData is available
  useEffect(() => {
    // create temp var
    let tempArr: SchoolAndInfo[] = [];
    // check if directoryData is an array before cleaning
    if (Array.isArray(directoryData)) {
      tempArr = cleanData(directoryData);
    }
    setCleanedData(tempArr);
  }, [directoryData]);
  // filter out list of schools based on user input
  filteredDirectory = filterDirectory(cleanedData, query);
  return (
    <Combobox
      as="div"
      className="p-10"
      // when option is selected/entered, append query to url
      onChange={(query) => {
        if (query !== undefined) {
          window.location.href = `/${query}`;
        }
      }}
    >
      <div className="mx-auto rounded-xl bg-white p-4 text-xl text-slate-900 shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center pb-1 border-b border-teal-300">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <Combobox.Input
            // set query to event.target.value
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            className="w-full p-2 !outline-none"
            placeholder="Search"
          />
        </div>
        {/* if data is still loading, then display loader */}
        {isLoading && filteredDirectory.length === 0 && (
          <div className="pt-4">
            <Loader />
          </div>
        )}
        {/* if data is not loading and no schools to display, then show error message with invalid query */}
        {!isLoading && filteredDirectory.length === 0 && (
          <Combobox.Options
            static
            className="comboboxMaxHeight overflow-y-auto p-1 pt-2 pl-2 font-medium"
          >
            {content.searchError} <b>{query}</b>
          </Combobox.Options>
        )}
        {/* if filtered list of schools to display, then display schools */}
        {filteredDirectory.length > 0 && (
          <Combobox.Options
            static
            className="comboboxMaxHeight overflow-y-auto pt-1"
          >
            {filteredDirectory.map((school: SchoolAndInfo) => {
              return (
                <Combobox.Option
                  key={school.dbn}
                  value={school.dbn}
                  className="mr-3"
                >
                  {/* formatting for active/highlighted option */}
                  {({ active }) => (
                    <a
                      className="text-slate-900"
                      href={school.dbn}
                      aria-current // screen reader announces new current option
                    >
                      <div
                        className={`p-1 pl-2 font-medium ${
                          active ? `rounded-lg bg-slate-900 text-white` : ``
                        }`}
                      >
                        {school.school_name}
                      </div>
                    </a>
                  )}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default SearchBar;
