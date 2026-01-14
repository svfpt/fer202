function Card({ student }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center"
    }}>
      <img
        src={student.avatar}
        alt={student.name}
        width="120"
        style={{ borderRadius: "50%" }}
      />
      <h3>{student.name}</h3>
      <p>ID: {student.id}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export default Card;
