type School = {
  dbn: string;
  school_name: string;
};

type Info = {
  boro: string;
  overview_paragraph: string;
};

type SATData = {
  num_of_sat_test_takers: string;
  sat_critical_reading_avg_score: string;
  sat_math_avg_score: string;
};

type SchoolAndInfo = School & Info;

type SchoolAndSATData = School & SATData;

type SchoolAndInfoAndSATData = SchoolAndInfo & SATData;
