import listOfStudent from "./listOfStudent";
import About from "./About";

function StudentList() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}
    >
      {listOfStudent.map((student) => (
        <About key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
