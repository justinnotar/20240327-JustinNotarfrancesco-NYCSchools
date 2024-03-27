import content from "../assets/content.json";

const Table = (school: SchoolAndInfoAndSATData) => {
  return (
    <div className="justify-center text-slate-900 text-xl">
      <table>
        <tbody>
          {/* each row has an aria label and role for improved screen reader experience when traversing table  */}
          {school.dbn && (
            <tr aria-label="Row 1 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row1}
              </td>
              <td className="px-2" role="cell">
                {school.dbn}
              </td>
            </tr>
          )}
          {school.boro && (
            <tr aria-label="Row 2 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row2}
              </td>
              <td className="px-2" role="cell">
                {school.boro}
              </td>
            </tr>
          )}
          {school.school_name && (
            <tr aria-label="Row 3 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row3}
              </td>
              <td className="px-2" role="cell">
                {school.school_name}
              </td>
            </tr>
          )}
          {school.num_of_sat_test_takers && (
            <tr aria-label="Row 4 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row4}
              </td>
              <td className="px-2" role="cell">
                {school.num_of_sat_test_takers}
              </td>
            </tr>
          )}
          {school.sat_critical_reading_avg_score && (
            <tr aria-label="Row 5 of 7">
              <td className="flex font-bold min-w-max px-2 safariWidth" role="cell">
                {content.row5}
              </td>
              <td className="px-2" role="cell">
                {school.sat_critical_reading_avg_score}
              </td>
            </tr>
          )}
          {school.sat_math_avg_score && (
            <tr aria-label="Row 6 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row6}
              </td>
              <td className="px-2" role="cell">
                {school.sat_math_avg_score}
              </td>
            </tr>
          )}
          {school.overview_paragraph && (
            <tr aria-label="Row 7 of 7">
              <td className="flex font-bold min-w-max px-2" role="cell">
                {content.row7}
              </td>
              <td className="px-2" role="cell">
                {school.overview_paragraph}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
