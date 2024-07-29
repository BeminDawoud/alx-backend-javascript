export default function getListStudentIds(obj) {
  let result = [];
  if (!Array.isArray(obj)) {
    return result;
  }
  result = obj.map((student) => student.id);
  return result;
}
