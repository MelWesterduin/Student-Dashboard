import list from '../data/assignment-gradings.json';

export const averageDifficultyAndFun = () => {
  const studentData = [...new Set(list.map((data) => data.opdracht))];
  const sortedStudentData = studentData.map((value) =>
    list.filter((list) => list.opdracht === value)
  );
  const chartData = sortedStudentData.map((assignments) => ({
    opdracht: assignments[0].opdracht,
    moeilijkheid:
      assignments.reduce((prev, current) => prev + current.moeilijkheid, 0) /
      assignments.length,
    leuk:
      assignments.reduce((prev, current) => prev + current.leuk, 0) /
      assignments.length,
  }));

  return chartData;
};
