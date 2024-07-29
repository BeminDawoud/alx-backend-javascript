export default function getStudentsByLocation(students, location) {
  let result = [];
  result = students.filter((student) => student.location === location);
  return result;
}
