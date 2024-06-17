// let year = prompt("Bạn sinh năm bao nhiêu???");
// console.log(year);

// data type conversion
// string --> number

// year = +year;

// year = Number(year);
// year = parseInt(year);

// lodsfjlaskdjfladksjf
// NaN === NaN (true)
// if (Number.isNaN(year)) {
//   console.log("Đây là năm sinh không hợp lệ");
// } else {
//   console.log("Đây là năm sinh hợp lệ");
// }

// In ra màn hình console 1000 lần câu lệnh hello world

console.log("Hello world");

// for...loop
// for(Bộ 3 điều kiện lặp) {
//     // Tác vụ cần phải lặp đi lặp lại
// }

// Bộ 3 Điều Kiện Lặp ==> Biến chạy i
// - Điểm bắt đầu của vòng lặp
// - Điểm kết thúc của vòng lặp
// - Bước nhảy

for (let i = 1; i <= 10; i = i + 2) {
  console.log("Hello world");
}

// Lần lặp 1, i = 1, i = (1 <= 10 | true) --> Hello world, i = 1 + 1 (2)
// Lần lặp 2, i = 2, i = (2 <= 10 | true) --> Hello world, i = 2 + 1 (3)
// Lần lặp 3, i = 3, i = (3 <= 10 | true) --> Hello world, i = 3 + 1 (4)
// ..........
// Lần lặp 10, i = 10, i = (10 <= 10 |  true) --> Hello world, i = 10 + 1 (11)
// Lần lặp 11, i = 11, i = (11 <= 10 | false) --> DỪNG LẠI

// Ex1:
// Cho người dùng nhập vào 1 số n
// In ra dãy số từ 0 -> n
// let n = Number(prompt("Mời bạn nhập vào số n"));

// i = 0 -> n (0, 1, 2, 3,.... n);
// for (let i = 0; i <= n; i = i + 1) {
//   console.log(`Lần lặp thứ ${i}`, i);
// }

// Ex2:
// Cho người dùng nhập vào 1 số n
// Tính tổng A = 0 + 1 + 2 + ... + n
// In tổng A ra màn hình console
// let n = +prompt("Mời bạn nhập vào số n");

// let sum = 0;

// for (let i = 0; i <= n; i = i + 1) {
//   console.log(`Lần lặp thứ ${i}, sum = ${sum} + ${i}`);
//   sum = sum + i;
// }

// console.log(`A=${sum}`);

// Lần lặp 1, i = 0 (0 <= 10 | true), sum = 0 + 0 (0), i = 0 + 1 (1),
// Lần lặp 2, i = 1 (1 <= 10 | true), sum = 0 + 1 (1), i = 1 + 1 (2),
// Lần lặp 3, i = 2 (2 <= 10 | true), sum = 1 + 2 (3), i = 2 + 1 (3),
// Lần lặp 4, i = 3 (3 <= 10 | true), sum = 3 + 3 (6), i = 3 + 1 (4),
// ...
// Lần lặp 11, i = 10 (10 <= 10 | true), sum = 45 + 10 (55), i = 10 + 1 (11)
// Lần lặp 12, i = 11 (11 <= 10 | false) DỪNG

// Ex3:
// Cho người dùng nhập vào 1 số n
// Tính tích B = 1*2*3*4*...*n
// In B ra màn hình console

// let n = +prompt("Mời bạn nhập vào số n");
// let result = 1;
// for (let i = 1; i <= n; i = i + 1) {
//   result = result * i;
// }
// console.log(`B=${result}`);

// Ex4:
// Cho người dùng nhập vào 1 số n
// Tính C = 1^2 + 2^2 + 3^2 + ... n^2;
// In C ra màn hình console

// let n = +prompt("Mời bạn nhập vào số n");
// let result = 0;
// for (let i = 1; i <= n; i = i + 1) {
//   result = result + i ** 2;
// }
// console.log(`C=${result}`);

// Ex5:
// Cho người dùng nhập vào 1 số n
// In ra màn hình console các số từ 1 - n
// theo dạng chẵn lẻ
// VD:
// 1 - lẻ
// 2 - chẵn
// 3 - lẻ
// ....

// let n = +prompt("Mời bạn nhập vào số n");
// for (let i = 1; i <= n; i = i + 1) {
//   if (i % 2 === 0) {
//     console.log(`${i} - chẵn`);
//   } else {
//     console.log(`${i} - lẻ`);
//   }
// }

// console.log(1, "-", "số lẻ");
// let a = `${1} - số lẻ`;
// let c = 1 + " - số lẻ";
// console.log(c);

// let sentence = "Hello world";
// let sentence2 = "Hello world";

// String concatenation (Nối chuỗi)
// console.log(sentence + " " + sentence2); // Hello worldHello world

// console.log(`${sentence} ${sentence2}`);

// // Template string - ES6
// let sentence3 = `Hello world`;

// while(condition) {
//     // Tác vụ cần lặp
// }

// VD: Cho người dùng nhập vào câu trả lời
// dành cho câu hỏi Do you love me??
// Lặp đi lặp lại quá trình nhập vào đó
// Chỉ dừng lại khi người dùng nhập vào "yes"
// let answer = prompt("Do you love me????");
// while (answer !== "yes") {
//   answer = prompt("Do you love me????");
// }

// VD:
// Cho 1 biến result = 10;
// Cho người dùng nhập vào 1 số n ngẫu nhiên
// Lặp lặp lại quá trình nhập n và kiểm tra
// n > result => In ra (Too big)
// n < result => In ra (Too small)
// n === reuslt => In ra (Bingo)

let result = 10;
let loop = true;
while (loop) {
  let n = +prompt("Mời bạn nhập vào số n");
  if (n === result) {
    console.log("Bingo");
    // loop = false;
    break;
  } else if (n < result) {
    console.log("Too small");
  } else {
    console.log("Too big");
  }
}
