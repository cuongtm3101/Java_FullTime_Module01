// let isNgocHandsome = true;
// let isChiLinhChinese = false;

// console.log(1 > 1); // false
// console.log(1 >= 1); // true
// 2 < 3; // true
// 2 <= 2; // true

// // So sánh bằng tương đối
// console.log(1 == 1); // true
// 1 == "1"; // true

// // So sánh bằng tuyệt đối
// 1 === 1; // true
// 1 === "1"; // false

// // So sánh khác tương đối khác
// console.log(1 != 1); // false
// console.log(1 != "1"); //  false

// // So sánh khác tuyệt đối
// console.log(1 !== 1); // false
// console.log(1 !== "1"); // true

// // AND
// console.log(1 > 1 && 2 === 2); // false
// console.log(1 > 1 || 2 === 2); // true

// Branching statement
// Control flow statement

// if (condition) {
//   // do something 01
// } else if (condition2) {
//   // do something 02
// } else if (condition3) {
//   // do something 03
// } else if (conditionN) {
//   // do something N
// } else {
//   // do something else
// }

// B1: Cho người dùng nhập vào giờ

// let hour = +prompt("Mời bạn nhập vào số giờ trong ngày (VD: 20)");

// // B2: Kiểm tra tính hợp lệ của dữ liệu đầu vào
// if (Number.isInteger(hour) === true && hour >= 0 && hour <= 24) {
//   if (hour < 10) {
//     console.log("Good Morning !!!!");
//   } else if (hour < 20) {
//     console.log("Good day !!!!");
//   } else {
//     console.log("Good evening !!!!");
//   }
// } else {
//   console.log("Dữ liệu nhập vào không hợp lệ");
// }

// Ex:

// Cho người dùng nhập vao tháng trong năm

// Nếu tháng == 1,2,3 => In ra là mùa xuân (quý I)
// Nếu tháng == 4,5,6 => In ra là mùa hè (quý II)
// Nếu tháng == 7,8,9 => In ra là mùa thu (quý III)
// Nếu tháng == 10,11,12 => In ra là mùa đông (hết năm)

// let month = +prompt("Mời bạn nhập vào tháng trong năm (1 - 12)");

// if (Number.isInteger(month) === true && month > 0 && month < 13) {
//   if (month === 1 || month === 2 || month === 3) {
//     console.log("Mùa xuân (Quý I)");
//   } else if (month === 4 || month === 5 || month === 6) {
//     console.log("Mùa Hè (Quý II)");
//   } else if (month === 7 || month === 8 || month === 9) {
//     console.log("Mùa Thu (Quý III)");
//   } else {
//     console.log("Mùa đông (Hết Năm)");
//   }

//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       console.log("Mùa xuân (Quý I)");
//       break;
//     case 4:
//     case 5:
//     case 6:
//       console.log("Mùa Hè (Quý II)");
//       break;
//     case 7:
//     case 8:
//     case 9:
//       console.log("Mùa Thu (Quý III)");
//       break;
//     default:
//       console.log("Mùa Đông, hết năm rồi !!!!");
//       break;
//   }
// } else {
//   console.log("Dữ liệu đầu vào không hợp lệ");
// }

// switch/case

// console.log(0 == false); // true ---> 0 có tính chất falsy

// console.log(1 == true); // true ---> 1 có tính chất truethy

// console.log("" == false);

// có những giá trị falsy bao gồm

// false;
// 0;
// ("");
// undefined;
// null;
// NaN;

// VÒNG LẶP

// Trong 1 ngày bình thường

// 7h: Đánh răng rửa mặt. Đi Đ đi I
// 8h: Đi học
// 12h: Ăn trưa
// 13h: Học tiếp
// 17h: Đi về
// 19h: Ăn Tối
// 21h: Học bài
// 24h: Đi ngủ

// 7h: Đánh răng rửa mặt. Đi Đ đi I
// 8h: Đi học
// 12h: Ăn trưa
// 13h: Học tiếp
// 17h: Đi về
// 19h: Ăn Tối
// 21h: Học bài
// 24h: Đi ngủ

// 7h: Đánh răng rửa mặt. Đi Đ đi I
// 8h: Đi học
// 12h: Ăn trưa
// 13h: Học tiếp
// 17h: Đi về
// 19h: Ăn Tối
// 21h: Học bài
// 24h: Đi ngủ

// 7h: Đánh răng rửa mặt. Đi Đ đi I
// 8h: Đi học
// 12h: Ăn trưa
// 13h: Học tiếp
// 17h: Đi về
// 19h: Ăn Tối
// 21h: Học bài
// 24h: Đi ngủ

// for (let i = 1; i <= 10; i = i + 2) {
//   console.log("7h: Đánh răng rửa mặt. Đi Đ đi I");
//   console.log("8h: Đi học");
//   console.log("12h: Ăn trưa");
//   console.log("13h: Học tiếp");
//   console.log("17h: Đi về");
//   console.log("19h: Ăn Tối");
//   console.log("21h: Học bài");
//   console.log("24h: Đi ngủ");
// }

// Lần lặp số 1: i = 1; 1 <= 5 (true), Tác vụ "7h - 24h", i = 1 + 1 (2);
// Lần lặp số 2: i = 2; 2 <= 5 (true), Tác vụ "7h - 24h", i = 2 + 1 (3);
// Lần lặp số 3: i = 3; 3 <= 5 (true), Tác vụ "7h - 24h", i = 3 + 1 (4);
// Lần lặp số 4: i = 4; 4 <= 5 (true), Tác vụ "7h - 24h", i = 4 + 1 (5);
// Lần lặp số 5: i = 5; 5 <= 5 (true), Tác vụ "7h - 24h", i = 5 + 1 (6);
// Lần lặp số 6: i = 6; 6 <= 5 (false), DỪNG LẠI

// Cho người dùng nhập vào số n
// Tính tổng của biểu thức (DÙNG VÒNG LẶP)

// A = 1 + 2 + 3 ... + n;
// B = 1^2 + 2^2 + 3^2 ... + n^2;
// C = 1/1.2 + 1/2.3 + 1/3.4 + ... + 1/(n-1)n

// A
// let n = +prompt("Mời bạn nhập vào số n");

// Quy nạp
// let sum = 0;
// for (let i = 1; i <= n; i = i + 1) {
//   sum = sum + i;
// }
// console.log(sum);
// sum = 1 + 2 + 3 + ... + n;
// Nhập vào n = 5;
// L1: i = 1, 1 <= 5 (true), sum = 0 + 1, i = 1 + 1 (2);
// L2: i = 2, 2 <= 5 (true), sum = 0 + 1 + 2, i = 2 + 1 (3);
// L3: i = 3, 3 <= 5 (true), sum = 0 + 1 + 2 + 3, i = 3 + 1 (4);
// ...
// L6: i = 6, 6 <= 5 (false), Dừng lại

// sum = 0 + 1 + 2 + 3 + 4 + 5

// B
// let n = +prompt("Mời bạn nhập vào số n");

// let sum = 0;
// for (let i = 1; i <= n; i = i + 1) {
//   sum = sum + i ** 2;
// }

// console.log(`Tổng B = ${sum}`);

// C = 1/1.2 + 1/2.3 + 1/3.4 + ... + 1/(n-1)n
// C = 1 - 1/n

// let n = +prompt("Mời bạn nhập vào số n");

// let sum = 0;
// for (let i = 1; i <= n - 1; i = i + 1) {
//   sum = sum + 1 / (i * (i + 1));
// }

// console.log(`Tổng C = ${sum}`);

// While...loop

// Lặp đi lặp lại đoạn code với số lần lặp là 5

// for (let j = 1; j <= 10; j = j + 1) {
//   console.log(`------------`);
//   for (let i = 1; i <= 10; i = i + 1) {
//     console.log(`${j} * ${i} = ${j * i}`);
//   }
// }

// Ex 07 - 1

// let n = +prompt("Mời bạn nhập vào số tự nhiên N (2 - 100)");

// if (Number.isInteger(n) && n >= 2 && n <= 100) {
//   // Tiến hành thực hiện logic
//   // C1:
//   //   for (let i = 2; i <= n; i = i + 1) {
//   //     if (i % 2 === 0) {
//   //       console.log(`Bình phương của ${i} = ${i ** 2}`);
//   //     }
//   //   }
//   // C2:
//   for (let i = 2; i <= n; i = i + 2) {
//     console.log(`Bình phương của ${i} = ${i ** 2}`);
//   }
// } else {
//   console.log("Mày dốt lắm, nói thế mà còn nhập sai !!!");
// }

// Number.isNaN
// Kiểm tra 1 giá trị xem có phải là "KHÔNG LÀ SỐ" hay không
// Number.isNaN("a") // true
// Number.isNaN(1.2) // false

// Ex 07 - 3
// console.log() nhiều màu

// for (let i = 1; i <= 10; i = i + 1) {
//   let red = Math.floor(Math.random() * 256); // [0 - 255]
//   let green = Math.floor(Math.random() * 256); // [0 - 255]
//   let blue = Math.floor(Math.random() * 256); // [0 - 255]

//   console.log(
//     "%cXin chào, tôi tên là ...",
//     `color: rgb(${red}, ${green}, ${blue})`
//   );
// }

// Ex 07 - 4
// for (let i = 1; i <= 100; i = i + 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Ex 07 - 5
// let n = +prompt("Mời bạn nhập vào số cần phải kiểm tra");

// Số nguyên tố là số chỉ chia hết cho 1 và chính nó

// 13

// Kỹ thuật cắm cờ, BẬT CÔNG TẮC
// n = 14 [13,... 7, ... 2];
// n = 13 [12, 11, 10, 9 ... 2]

// let check = true;

// for (let i = 2; i < n; i = i + 1) {
//   if (n % i === 0) {
//     check = false;
//   }
// }
// 14
// i = 2 (check = false)
// i = 3 (check = false)
// ...
// i = 7 (check = false)

// TRUE | FALSE

// if (!check) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không phải là số nguyên tố`);
// }

//

// Ex:

// Cho người dùng nhập vào số n (1 - 100)
// Tạo sẵn 1 biến result = 17

// Tiến hành kiểm tra
// Nếu số n < result ==> "Too Small !!!"
// Nếu số n > result ==> "Too Big !!!"
// Nếu số n == result ==> "Bingo !!!"

// ...........----------------------

// LẶP ĐI LẶP LẠI TOÀN BỘ LOGIC TRÊN CHO ĐẾN KHI NÀO
// NGƯỜI DÙNG NHẬP ĐÚNG n === result thì DỪNG LẠI

// let result = 17;
// let answer = +prompt("Đoán đê !!! (1-100)");

// while (answer !== result) {
//   if (answer < result) {
//     console.log("Too Small !!!!!!!!!!!~!");
//   } else if (answer > result) {
//     console.log("Too big !!!!!!!!!!@@@@@@!!!!!");
//   }
//   answer = +prompt("Đoán đê !!! (1-100)");
// }

// console.log("Bingo !!!!!!!!!!!!!!!!!!");

// while(condition) {
//     // do something
// }

do {
  console.log("Hello world");
} while (1 !== 1);

// while (1 !== 1) {
//   console.log("Hello world");
// }
