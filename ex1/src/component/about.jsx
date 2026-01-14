import anAvatar from "./public/images/an.jpg";
import binhAvatar from "./public/images/binh.jpg";

function About() {
  const student1 = {
    id: 1,
    name: "An",
    age: 16,
    grade: "10A1",
    avatar: anAvatar
  };

  const student2 = {
    id: 2,
    name: "Bình",
    age: 20,
    grade: "12A1",
    avatar: binhAvatar
  };

  return (
    <div>
      <h2>Student List</h2>

      <div>
        <img src={student1.avatar} alt="An" width={120} />
        <p>Name: {student1.name}</p>
        <p>Age: {student1.age}</p>
        <p>Grade: {student1.grade}</p>
      </div>

      <div>
        <img src={student2.avatar} alt="Binh" width={120} />
        <p>Name: {student2.name}</p>
        <p>Age: {student2.age}</p>
        <p>Grade: {student2.grade}</p>
      </div>
    </div>
  );
}

export default About;
