// let root = prompt("Mời bạn nhập vào một chuỗi bất kỳ").split("");

// console.log(root);

// ['h', 'e', 'l', 'l', 'o'];

// ['h', 'e', 'l', 'l'], ['e', 'l', 'l', 'o'];

// ...

// ['h'], ['e'], ['l'], ['l'], ['o']

// length của mảng con k = 1
// let result = [];
// for (let k = 1; k <= root.length - 1; k = k + 1) {
//   for (let i = 0; i <= root.length - k; i = i + 1) {
//     let subArr = [];

//     for (let j = i; j < i + k; j = j + 1) {
//       subArr.push(root[j]);
//     }

//     result.push(subArr.join(""));
//   }
// }
// result.push(root.join(""));
// console.log(result);

// Ứng dụng todo List

// let todoList = [
//   "Go to sleep early",
//   "Take a shower",
//   "Do homework",
//   "Learn a new thing !!!",
// ];

// let loop = true;
// while (loop) {
//   let command = prompt(
//     "Mời bạn nhập vào các chữ cái C/R/U/D để điều khiển danh sách Todo List"
//   );

//   if (command === "C") {
//     // Thêm mới một todo vào trong danh sách todo list
//     let todo = prompt("Mời bạn nhập vào todo mới");
//     todoList.push(todo);
//     printTodo();
//   } else if (command === "R") {
//     // In ra toàn bộ todo có trong ds todo list
//     printTodo();
//   } else if (command === "U") {
//     // Cho người dùng chọn vị trí của todo muốn cập nhật
//     let index = +prompt("Mời bạn nhập vào vị trí của todo muốn cập nhật");
//     // Cho người dùng nhập vào nội dung cập nhật mới của todo đó
//     let updateTodo = prompt("Mời bạn nhập vào nội dung mới của todo");
//     // Tiến hành cập nhật
//     todoList[index - 1] = updateTodo;
//     // In ra toàn bộ todo có trong ds todo list (Để kiểm tra sự cập nhật)
//     printTodo();
//   } else if (command === "D") {
//     // Cho người dùng chọn vị trí của todo muốn xoá
//     let index = +prompt("Mời bạn nhập vào vị trí của todo muốn cập nhật");
//     // Tiến hành xoá
//     todoList.splice(index - 1, 1);
//     // In ra toàn bộ todo có trong ds todo list (Để kiểm tra xoá thành công chưa)
//     printTodo();
//   } else if (command === "E") {
//     // Kết thúc chương trình
//     console.log("Goodbye !!! See you again !!!");
//     loop = false;
//   } else {
//     console.log("Invalid command !!!!");
//   }
// }

// function printTodo() {
//   for (let i = 0; i < todoList.length; i = i + 1) {
//     console.log(`${i + 1}. ${todoList[i]}`);
//   }
// }

// DEMO

// Xây dựng một ứng dụng máy bán nước tự động
// Biết
// Nhét vào 5000 --- Lavie
// Nhét vào 10k --- Coca
// Nhét vào 20k --- Sting

// Parameters (Tham số đai diện)
// function mayBanNuoc(money) {
//   // let money = "5000"
//   // let money = "10000"
//   // let money = "20000"
//   if (money === "5000") {
//     return "Lavie";
//   } else if (money === "10000") {
//     return "Coca";
//   } else if (money === "20000") {
//     return "Sting";
//   } else {
//     return "Chúng tôi không chấp nhận mệnh giá tiền này. Tiền mày nát quá";
//   }
// }

// Argument - Đối số thực tế
// let chaiNuoc = mayBanNuoc("5000"); // Lavie
// alert(`Tôi vừa mua 1 chai ${chaiNuoc}. Tôi sẽ uống nó. ực ực ực !!!`);
// console.log(`Tôi vừa mua 1 chai ${chaiNuoc}. Tôi sẽ uống nó. ực ực ực !!!`);

// mayBanNuoc("10000"); // Coca
// mayBanNuoc("20000"); // Moutain Dew

// Viết 1 hàm (chương trình con), nhận vào 2 tham số
// Là 2 số cần tính tổng
// Tính tổng và trả về kết quả

alert(tinhTong(1, 2)); // 3
tinhTong(4, 2); // 6
tinhTong(-1, 1); // 0

function tinhTong(num1, num2) {
  let total = num1 + num2;
  return total;
}

// Cơ chế hoisting trong Javascript ????
