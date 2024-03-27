import { createContext, useContext } from "react";
import useDirectoryData from "../hooks/useDirectoryData";

const DirectoryDataContext = createContext<any>(null);

export const useDirectoryDataContext = () => useContext(DirectoryDataContext);

// Context provider for directory data, allowing SearchBar and School components to share its data

export const DirectoryDataContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { data, isLoading } = useDirectoryData();

  return (
    <DirectoryDataContext.Provider
      value={{
        data: data,
        isLoading: isLoading,
      }}
    >
      {children}
    </DirectoryDataContext.Provider>
  );
};
