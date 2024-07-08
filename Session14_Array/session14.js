// Session 12 - Ex 3.2

// let n = +prompt("Mời bạn nhập vào số n !!!!");

// Biến đếm số lượng số nguyên tố sẽ được in ra
// let count = 0;

// let num = 2; // Số nguyên tố đầu tiên trong dãy số nguyên tố

// // 2, 3, 4, 5, 6, 7, 8, 9, 10 .....
// while (count < n) {
//   // Phải tìm ra được số nguyên tố
//   // thì biến count mới tăng lên 1 đơn vị
//   let check = true;
//   for (let i = 2; i < num; i = i + 1) {
//     if (num % i === 0) {
//       check = false;
//     }
//   }

//   if (check) {
//     console.log(num);
//     count = count + 1;
//   }

//   num = num + 1;
// }

// Session 12 - Ex 3.2

// let randomString = prompt("Mời bạn nhập vào một câu bất kỳ"); // [0 -- độ dài của chuỗi - 1]

// console.log("Hello World"[0]); // H
// console.log("Hello World"[6]); // W

// console.log(randomString[randomString.length - 1]); // !

// let result = "";

// for (let i = randomString.length - 1; i >= 0; i = i - 1) {
//   // i --> [0, 1, 2, 3, 4, ... length - 1]
//   // randomString[i];
//   result = result + randomString[i];
// }

// console.log(result);

// Session 12 - Ex 3.14

// let n = +prompt("Mời bạn nhập vào 1 số nguyên dương (1 - 100)");

// for (let j = 1; j <= n; j = j + 1) {
//   let result = "";

//   for (let i = j; i <= n + j; i = i + 1) {
//     result = result + ` ${i}`;
//   }

//   console.log(result.trim());
// }

// ĐÂY LÀ NHÀ HÀNG - Quán bia CỦA YẾN
//

let mon1 = "Tiết canh dê";
let mon2 = "Lòng xách dê xào";
let mon3 = "Canh đắng";
let mon4 = "Dê xào lăn";
let mon5 = "Dê xào xả ớt";

// ... Nồi hấp bị hỏng
let mon80 = "Dê chao dầu";

// ...
let mon999 = "Nầm dê nướng";

let menu = [
  "Tiết canh dê",
  "Lòng xách dê xào",
  "Canh đắng",
  "Dê xào lăn",
  "Dê xào xả ớt",
  "Dê chao dầu",
  "Nầm dê nướng",
];

console.log(menu);

// Create - Thêm mới 1 phần tử

// Thêm đầu
menu.unshift("Nầm dê xào khế");

console.log(menu);

// Thêm cuối
menu.push("Thịt chó");

console.log(menu);

// Read - Lấy ra
// Read one - Lấy ra 1 phần tử

console.log(`Mời Dương xơi ${menu[5]}`); // Dê xào xả ớt

// Read all - Lấy ra toàn bộ phần tử

for (let i = 0; i <= menu.length - 1; i = i + 1) {
  console.log(`Tôi, HẢI YẾN, thông báo đồng loạt tăng giá ${menu[i]} lên 10k`); //
  // menu[0] -> Nầm dê xào khế
  // menu[1] -> Tiết canh dê
  // ...
  // menu[8] -> Thịt chó
}

// U - Update - Cập nhật
menu[7] = "Nầm dê hấp";

console.log(menu);

// D - Delete - Xoá
// Xoá đầu
menu.shift();

console.log(menu);

// Xoá cuối
menu.pop();

console.log(menu);

// Xoá phần tử tại vị trí bất kỳ
menu.splice(4, 3);

console.log(menu);

// Thêm mới tại vị trí bất kỳ

menu.splice(
  1,
  0,
  "Đậu lướt ván",
  "Đậu rán giòn",
  "Đậu tẩm hành",
  "Đậu nhồi thịt"
);

console.log(menu);
