import { filterDirectory, boroughFinder, cleanData } from "./formatters";

describe("formatDirectory & cleanBadData functions", () => {
  const mockDirectoryData = [
    {
      dbn: "1",
      school_name: "C! School",
      boro: "M",
      overview_paragraph: "text",
    },
    {
      dbn: "2",
      school_name: "A+ School",
      boro: "Q",
      overview_paragraph: "text",
    },
    {
      dbn: "3",
      school_name: "B? School",
      boro: "X",
      overview_paragraph: "text",
    },
  ];

  test("remove invalid characters from each school name", () => {
    // also tests removeChars function
    const result = cleanData(mockDirectoryData);
    result.forEach((school) => {
      expect(school.school_name).not.toMatch(/[^\w\s&+,'’():.-]/g);
    });
  });

  test("sorts school names alphabetically", () => {
    const result = cleanData(mockDirectoryData);
    const sortedNames = result.map((school) => school.school_name);
    const expectedNames = ["A+ School", "B School", "C School"].sort((a, b) =>
      a.localeCompare(b)
    );
    expect(sortedNames).toEqual(expectedNames);
  });

  test("filters out school names based on user input", () => {
    const result = filterDirectory(mockDirectoryData, "A");
    expect(result.length).toBe(1);
    expect(result[0].school_name).toBe("A+ School");
  });
});

describe("boroughFinder function", () => {
  test("returns full name of Staten Island for abbreviation `R`", () => {
    const result = boroughFinder("R");
    expect(result).toBe("Staten Island");
  });

  // this test is valid and passes but boroughFinder does not accept "S" as a param so test file indicates an error

  //   test("returns "Unknown" for invalid abbreviation", () => {
  //     const result = boroughFinder("S");
  //     expect(result).toBe("Unknown");
  //   });
});
