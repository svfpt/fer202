import Card from "./card";
import anAvatar from "./public/images/an.jpg";

function About() {
  const student = {
    id: 1,
    name: "An",
    age: 16,
    grade: "10A1",
    avatar: anAvatar
  };

  return (
    <div>
      <h2>Student Information</h2>
      <Card student={student} />
    </div>
  );
}

export default About;
