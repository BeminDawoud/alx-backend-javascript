export default function getStudentIdsSum(students) {
  const result = students.reduce((accumulator, currentValue) => accumulator + currentValue);
  return result;
}
