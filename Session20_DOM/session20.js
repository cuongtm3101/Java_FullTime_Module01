// const hideBtn = document.getElementById("hide-btn");
// const showBtn = document.getElementById("show-btn");
// const paragraph = document.getElementById("paragraph");

// hideBtn.onclick = function () {
//   paragraph.style.display = "none";
// };

// showBtn.onclick = function () {
//   paragraph.style.display = "block";
// };

// const toggleBtn = document.getElementById("toggle-btn");
// const body = document.getElementById("body");

// toggleBtn.onclick = function () {
//   // background body
//   // chưa có màu ---> add màu đen + đổi màu text
//   console.log(body.style);
//   // C1: Phù hợp với việc thay đổi style ngắn
//   //   if (!body.style.backgroundColor) {
//   //     body.style.backgroundColor = "black";
//   //     body.style.color = "white";
//   //   } else {
//   //     body.style.backgroundColor = "";
//   //     body.style.color = "";
//   //   }
//   // nếu có màu r --> add màu trắng + đổi màu text

//   // C2: Sử dụng CSS để làm đúng các tác vụ của CSS
//   // Class
//   // Kiểm tra xem đã tồn tại class dark mode trong
//   // body hay chưa
//   // Nếu rồi ---> xoá đi
//   // Nếu chưa ---> thêm vào
//   //   if (body.classList.contains("dark-mode")) {
//   //     body.classList.remove("dark-mode");
//   //   } else {
//   //     body.classList.add("dark-mode");
//   //   }

//   // C3:
//   body.classList.toggle("dark-mode");
// };

let todoListDB = [
  {
    id: 1,
    content: "Đi ngủ sớm đi",
    status: false,
  },
  {
    id: 2,
    content: "Đọc sách 1 tiếng/ngày",
    status: true,
  },
  {
    id: 3,
    content: "Ăn uống healthy thôi !!!!",
    status: false,
  },
  {
    id: 4,
    content: "Hết đồ ăn rồi, đi chợ thôi !!!",
    status: false,
  },
];

const ul = document.getElementById("myUL");
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("myInput");

function render() {
  ul.innerHTML = "";
  for (let idx in todoListDB) {
    // Mỗi lần tạo ra 1 thẻ li khi duyệt qua từng đối tượng todo
    // Kiểm tra nếu đối tượng todo
    // có status === true -> li có thêm class checked
    // có status === false -> li bình thường
    //   let li;
    //   if (!todoListDB[idx].status) {
    //     li = `<li>${todoListDB[idx].content}</li>`;
    //   } else {
    //     li = `<li class="checked">${todoListDB[idx].content}</li>`;
    //   }
    let li = todoListDB[idx].status
      ? `<li id=${todoListDB[idx].id} class="checked">
            ${todoListDB[idx].content}
            <span class="close">×</span>
        </li>`
      : `<li id=${todoListDB[idx].id}>
            ${todoListDB[idx].content}
            <span class="close">×</span>
        </li>`;

    //   ul.innerHTML = ul.innerHTML + li;
    ul.insertAdjacentHTML("beforeend", li);
  }
  let liList = ul.children; // HTMLCollection -> Tập hợp thẻ con của thẻ ul
  for (let li of liList) {
    li.onclick = function (event) {
      // B1: Lấy ra id nằm trong attribute của từng thẻ li

      // B2: Tìm kiếm phần tử dữ liệu trong DB trùng với id của phần tử li
      // vừa click vào

      // B3: Tìm kiếm thành công thì sử dụng vị trí của phần tử dữ liệu tìm kiếm
      // được để cập nhật lại trường status của dữ liệu đó trong DB
      let findIndex = todoListDB.findIndex(function (el, i) {
        return el.id === +li.id;
      });

      todoListDB[findIndex].status = !todoListDB[findIndex].status;

      render();
    };
  }
  let spanList = document.getElementsByClassName("close");
  for (let delBtn of spanList) {
    delBtn.onclick = function (event) {
      // Ngăn chặn nổi bọt sự kiện (event bubbling)
      event.stopPropagation();
      // B1: Lấy ra thẻ li đang chứa delBtn (.parentElement)
      let li = delBtn.parentElement;
      // B2: Lấy ra được attribute id của thẻ li cha
      let id = li.id;
      // B3: Tìm được đối tượng dữ liệu ứng với thẻ li cha vừa bấm vào
      let findIndex = todoListDB.findIndex(function (el, i) {
        return el.id === +id;
      });
      // B4: Xoá nó khỏi DB
      todoListDB.splice(findIndex, 1);
      // B5: Render
      render();
    };
  }
}

render();

addBtn.onclick = function () {
  if (!input.value) {
    alert("Mời bạn nhập nội dung cụ thể vào");
  } else {
    // B1: Lấy ra nội dung nằm trong ô input
    let content = input.value;
    // B2: Tạo mới 1 đối tượng dữ liệu todo {id, content, status}
    let todo = {
      id:
        todoListDB.length === 0 ? 1 : todoListDB[todoListDB.length - 1].id + 1,
      content: content,
      status: false,
    };
    // B3: Thêm đối tượng dữ liệu đó vào trong DB
    todoListDB.push(todo);
    // B4: Phản ánh sự thay đổi của dữ liệu trong DB lên trên giao diện ứng dụng
    render();
    input.value = "";
  }
};

// Gắn sự kiện cho thẻ li ở đâyy
// Gọi tập hợp 4 thẻ li ra và gắn sự kiện onclick
