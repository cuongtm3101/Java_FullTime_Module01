// let students = [
//   "Hải Yến",
//   "Nghĩa",
//   "Dương",
//   "A Huỳnh",
//   "Hùng",
//   "Ngọc Sora",
//   "A Hưởng",
//   "C Linh",
//   "A Minh",
// ];

// for...of
// for (let student of students) {
//   // students.indexOf(student);
//   console.log(student);
// }

// // for...in
// for (let index in students) {
//   console.log(index, students[index]);
// }

// // forEach()
// students.forEach(function (element, index) {
//   console.log(index, element);
// });

// map()
// Toàn bộ sinh viên có trong mảng students -> Đều "thi hackathon"
// Ngọc sora thi hackathon
// Hải yến thi hackathon
// ...

// let newArr = students.map(function (element, index) {
//   return `${element} thi hackathon`;
// });

// console.log(newArr);

// let filterStudents = students.filter(function (element, index) {
//   return element.startsWith("A") === true;
// });

// console.log(filterStudents);
// let student = students.find(function (element, index) {
//   return element.startsWith("A") === true;
// });

// let indexStudent = students.findIndex(function (element, index) {
//   return element.startsWith("A") === true;
// });

// console.log(indexStudent);

// reduce - GIẢM, cô đọng các phần tử có trong
// 1 mảng về thành 1 thể hợp nhất

// let numbers = [10, 20, 30, 50, 90, 200];
// Tính tổng, Tính tích, Tính TBC, Tính ....

// numbers.reduce(function(acc, cur){}, initialValue);

// acc - accumulator (Biến tích luỹ)
// cur - current Value (Giá trị của phần tử hiện tại đang duyệt qua)

// initial value - Giá trị khởi tạo dành cho biến tích luỹ

//
// Tính tổng
// let result = numbers.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0); // let acc = 0

// Tính tích
// let result2 = numbers.reduce(function (acc, cur) {
//   acc = acc * cur;
//   return acc;
// }, 1); // let acc = 1

// Tính TBC
// let result3 = numbers.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0); // let acc = 1

// console.log(result);
// console.log(result2);
// console.log(result3 / numbers.length);

// some, every --> true | false
// let students = [
//   "A Hải Yến",
//   "A Nghĩa",
//   "A Dương",
//   "A Huỳnh",
//   "A Hùng",
//   "A Ngọc Sora",
//   "A Hưởng",
//   "A C Linh",
//   "A Minh",
// ];

// let checkStartWithA = students.every(function (element, index) {
//   return element.startsWith("A") === true;
// }); // false

// console.log(checkStartWithA);

// sort() - Sap xep

// let numbers = [10, 20, -30, 50, -90, 200];

// -90, -30, 10, 20, 50, 200

// numbers.sort(function (a, b) {
//   return a - b; // Tăng dần
// });

// console.log(numbers);

// numbers.sort(function (a, b) {
//   return b - a; // giảm dần
// });

// console.log(numbers);

// Mô tả đối tượng truy nã Hải Yến

// tên: Hải Yến
// tuổi: 25
// quê quán: Hà Nam
// tình trạng hôn nhân: đã kết hôn
// mấy con: 1
// xinh: không biết
// ...

// let person = {
//   name: "Hải Yến", // Thuộc tính name (key: value)
//   age: 25, // Thuộc tính age
//   hometown: "Paris", // Thuộc tính hometown
//   married: true,
//   children: 2,
//   beautiful: "dont know",
//   hobbies: ["eating out", "sleeping", "gaming"],
// };

// console.log(person);

// Create - Thêm mới 1 thuộc tính vào 1 đối tượng
// person.jobs = ["Developers", "Nurse", "Teacher"];

// console.log(person);

// R -
// Read One - Lấy ra được value (giá trị) của một thuộc tính

// console.log(`${person.name} ơi, dậy đi học thôi`); // "Hải Yến"
// console.log(`${person["name"]} ơi, dậy đi học thôi`); // "Hải Yến"

// for (let hobby of person.hobbies) {
//   console.log(`${person.name} loves ${hobby}`);
// }
// Read All - Lấy ra toàn bộ values của toàn bộ thuộc tính
// for...in

// for (let key in person) {
//   //   key; // "name", "age"... "hobbies"
//   console.log(`${key}: ${person[key]}`); // person["name"], person["age"] ...
// }

// Update - Cập nhật lại giá trị của một thuộc tính
// person["age"] = 27;

// console.log(person);

// Delete - Xoá đi một thuộc tính

// delete person.age;

// console.log(person);

//
// Danh sách các đối tượng có tính chất tương đồng nhau

let students = [
  {
    id: "SV0001",
    name: "Hải Yến",
    age: 25,
  },
  {
    id: "SV0002",
    name: "C Linh",
    age: 18,
  },
  {
    id: "SV0003",
    name: "Ngọc Sora",
    age: 40,
  },
];

console.log("Sinh viên", students[0].name);
console.log("Sinh viên", students[1].name);
console.log("Sinh viên", students[2].name);

for (let student of students) {
  console.log(student.name);
  console.log(student.age);
  console.log(student.id);
}
