export default function getStudentIdsSum(students) {
  const result = students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return result;
}
