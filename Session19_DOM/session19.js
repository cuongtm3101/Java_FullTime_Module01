// Xây dựng ứng dụng
// Coi như dữ liệu đã được lấy thành công từ trên
// server về phía client

// stores - Kho lưu trữ dữ liệu
// có tên là stores ở trên server

// let stores = [
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
//   { id: 1, name: "Milk", count: 100 },
// ];

// // carts - Kho lưu trữ dữ liệu
// // có tên là carts ở trên server

// let carts = [];

// let loop = true;
// while (loop) {
//   let command = prompt(
//     "Mời bạn nhập vào các ký tự C/R/U/D/E để tiến hành mua hàng"
//   );

//   switch (command) {
//     case "C":
//       let productName = prompt("Mời bạn nhập tên sản phẩm muốn mua:"); // Milk, Yakult .... // Linh tinh

//       let findIndex = stores.findIndex(function (element, index) {
//         return element.name === productName;
//       }); // -1, tìm thấy

//       if (findIndex === -1) {
//         console.log(
//           `Không tìm thấy sản phẩm ${productName} trong cửa hàng. Mời bạn tiếp tục mua hàng`
//         );
//       } else {
//         // Mua hàng thành công
//         let cartIndex = carts.findIndex(function (element, index) {
//           return element.name === productName;
//         });
//         if (cartIndex === -1) {
//           // Push
//           let product = stores[findIndex]; // {}
//           // Error
//           // product.count = 1;
//           // carts.push(product);

//           // Fixed
//           // Tạo ra 1 object mới với địa chỉ mới hoàn toàn,
//           let cartProduct = { ...product, count: 1 }; // { name, id, count, count: 1 }

//           carts.push(cartProduct);
//         } else {
//           // +1
//           carts[cartIndex].count = carts[cartIndex].count + 1;
//         }
//         stores[findIndex].count = stores[findIndex].count - 1;

//         // store
//         console.log("Sản phẩm trong store:");
//         displayProduct(stores);
//         console.log("Giỏ hàng của bạn:");
//         displayProduct(carts);
//       }
//       break;
//     case "R":
//       // store
//       console.log("Sản phẩm trong store:");
//       displayProduct(stores);
//       // cart
//       console.log("Giỏ hàng của bạn:");
//       if (carts.length === 0) {
//         console.log("Giỏ hàng của bạn chưa có gì! Mời tiếp tục mua hàng");
//       } else {
//         displayProduct(carts);
//       }
//       break;

//     case "U":
//       console.log("Sản phẩm nằm trong store");
//       displayProduct(stores);
//       console.log("Sản phẩm nằm trong cart của bạn");
//       displayProduct(carts);

//       let updateIndex = +prompt(
//         "Bạn muốn cập nhật lại sản phẩm nào trong cart ?"
//       );
//       // Validate dữ đầu vào
//       // milk trong cart = 5
//       // milk trong store = 95

//       // milk cap nhat cart = 20
//       // milk trong store mới = store cũ + cart cũ - cart mới
//       console.log(updateIndex);
//       let oldCart = carts[updateIndex - 1].count;
//       carts[updateIndex - 1].count = +prompt(
//         `Mời bạn nhập vào số lượng mới của sản phẩm ${
//           carts[updateIndex - 1].name
//         }`
//       );
//       // Tìm kiếm sản phẩm vừa update trong cart là sp nào trong store
//       let storeIndex = stores.findIndex(function (element, index) {
//         return element.id === carts[updateIndex - 1].id;
//       });
//       stores[storeIndex].count =
//         stores[storeIndex].count + oldCart - carts[updateIndex - 1].count;

//       console.log("Sản phẩm trong cửa hàng:");
//       displayProduct(stores);
//       console.log("Sản phẩm trong giỏ hàng của bạn:");
//       displayProduct(carts);
//       break;

//     case "D":
//       console.log("Sản phẩm nằm trong store");
//       displayProduct(stores);
//       console.log("Sản phẩm nằm trong cart của bạn");
//       displayProduct(carts);

//       let deleteIndex = +prompt("Bạn muốn xoá sản phẩm nào khỏi cart ?");
//       let deleteProductId = carts[deleteIndex - 1].id; // {}
//       // Validate dữ liệu đầu vào
//       carts.splice(deleteIndex - 1, 1);

//       let deleteStoreIndex = stores.findIndex(function (element, index) {
//         return element.id === deleteProductId;
//       });
//       stores[deleteStoreIndex].count = 100;
//       //
//       console.log("Sản phẩm nằm trong store");
//       displayProduct(stores);
//       console.log("Sản phẩm nằm trong cart của bạn");
//       displayProduct(carts);
//       break;

//     case "E":
//       console.log("Cảm ơn đã mua hàng tại cửa hàng của chúng tôi");
//       loop = false;
//       break;

//     default:
//       console.log("Invalid command !");
//       break;
//   }
// }

// function displayProduct(database) {
//   for (let idx in database) {
//     console.log(
//       `${+idx + 1}. ${database[idx].name} - quantity: ${database[idx].count}`
//     );
//   }
// }

// Shallow clone

// Deep clone
// let y = { name: "Hello world" };

// let z = { ...y }; // pointerY

// z.name = "Biến z"; // { name: "Biến z"}

// console.log(y);

// DOM - Document object Model

// let h1HTML = document.getElementById("demo-id"); // h1
// console.log(h1HTML);

// let demoClassList = document.getElementsByClassName("demo-class"); // [div, p, div]

// for (let i = 0; i < demoClassList.length; i = i + 1) {
//   console.log(demoClassList[i]);
// }

// for (let element of demoClassList) {
//   console.log(element);
// }

// demoClassList.forEach(function (element, index) {
//   console.log(element);
// });

// let divCollection = document.getElementsByTagName("div"); // [div, div, div];
// console.log(divCollection[3]);

// querySelector
// let h1 = document.querySelector("#demo-id");
// console.log(h1);

// querySelectorAll
// let classCollection = document.querySelectorAll(".demo-class"); // [h1, div, p, div]

// console.log(classCollection);

// let h1 = document.getElementById("demo-id");

// h1.innerText = "Hello, tôi vừa được cập nhật nội dung bằng innerText";
// h1.textContent = h1.textContent + " Nội dung mới được nối vào sau";
// h1.innerHTML = `<i style="text-decoration: line-through">Hello world</i>`;

// [
// {id, title, description, image, content}
// {id, title, description, image, content}
// {id, title, description, image, content}
// ]

// const blogData = [
//   {
//     id: 1,
//     title: "Tôi buồn",
//     description: "Tôi rất buồn 2024",
//     image: "Hình ảnh 1",
//     content: "Tôi buồn không hiểu vì sao tôi buồn",
//   },
//   {
//     id: 2,
//     title: "Tôi vui",
//     description: "Tôi rất vui 2024",
//     image: "Hình ảnh 2",
//     content: "Tôi vui không hiểu vì sao tôi vui",
//   },
//   {
//     id: 3,
//     title: "Tôi bình thường",
//     description: "Tôi rất bình thường 2024",
//     image: "Hình ảnh 3",
//     content: "Tôi bình thường không hiểu vì sao tôi bình thường",
//   },
//   {
//     id: 4,
//     title: "Tôi đau bụng",
//     description: "Tôi rất đau bụng 2024",
//     image: "Hình ảnh 1",
//     content: "Tôi đau bụng không hiểu vì sao tôi đau bụng",
//   },
//   {
//     id: 5,
//     title: "Tôi tiêu chảy",
//     description: "Tôi rất tiêu chảy 2024",
//     image: "Hình ảnh 1",
//     content: "Tôi tiêu chảy không hiểu vì sao tôi tiêu chảy",
//   },
// ]; // fake lấy về từ Database (Cơ sở dữ liệu)

// const cardContainer = document.getElementById("card-container");
// console.log(cardContainer);

// for (let blog of blogData) {
//   cardContainer.innerHTML =
//     cardContainer.innerHTML +
//     `
//     <div class="card">
//         <h2>${blog.title}</h2>
//         <h5>${blog.description}</h5>
//         <div class="fakeimg" style="height: 200px">${blog.image}</div>
//         <p>${blog.content}</p>
//     </div>`;
// }

// let a = document.getElementById("a");
// console.log(a.href);

// let input = document.getElementById("input");
// console.log(input.placeholder);
// console.log(input.type);

// let img = document.getElementById("img");
// img.src =
//   "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-168620477-e1691273341205.jpg";

// img.setAttribute(
//   "src",
//   "https://kenh14cdn.com/thumb_w/660/2018/10/30/4513531921540335312873918724001012597129216o-15408670807531769807947.jpg"
// );

// img.style.borderRadius = "50%";

// let div = document.getElementById("demo-style");
// Bộ style dùng để biến đổi
// một phần tử HTML thành hình tròn
// div.style.backgroundColor = "pink";
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.color = "white";
// div.style.textAlign = "center";
// div.style.lineHeight = "300px";
// div.style.borderRadius = "50%";
// div.style.fontSize = "40px";
// div.classList.add("pink-circle"); // danh sách class của một phần tử HTML

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//   alert("Hello world");
// };
