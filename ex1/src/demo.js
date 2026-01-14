// // Nhập thư viện readline để nhập dữ liệu từ bàn phím
// const readline = require("readline");

// // Tạo giao diện nhập
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Hàm tính bình phương
// function square(x) {
//   return x * x;
// }

// // Nhập số X
// rl.question("Nhập số X: ", function (x) {
//   x = Number(x);

//   const result = square(x);

//   console.log("Bình phương của", x, "là:", result);

//   rl.close();
// });

///////////////////////////////////////////////////
//viết hàm in 1 đối tượng student có các thuộc tính name, age, grade
// Tạo đối tượng student
const student = {
  name: "An",
  age: 16,
  grade: "10A1"
};

// Hàm in thông tin student
function printStudent(student) {
  console.log("Tên:", student.name);
  console.log("Tuổi:", student.age);
  console.log("Lớp:", student.grade);
}

// Gọi hàm
printStudent(student);
//hàm map không dùng hàm printStudent
students.map(student => {
  console.log("Tên:", student.name);
  console.log("Tuổi:", student.age);
  console.log("Lớp:", student.grade);
}
//sử dụng deconstructing để lấy thuộc tính của đối tượng student
const { name, age, grade } = student;
console.log("Tên:", name);
console.log("Tuổi:", age);
console.log("Lớp:", grade);
//dùng rest operator để lấy các thuộc tính còn lại của đối tượng student
const { name: studentName, ...rest } = student;
console.log("Tên:", studentName);
console.log("Các thuộc tính còn lại:", rest);
//thêm 1 student mới vào mảng students
students.push({ name: "Bình", age: 17, grade: "11A2" });
console.log("Danh sách học sinh sau khi thêm:");