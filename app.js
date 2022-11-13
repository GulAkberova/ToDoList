let btn = document.querySelector("#adder_button");
let inputclass = document.querySelector("#inputclass");
let inputid = document.querySelector("#inputid");

btn.addEventListener("click", () => {

  let div = document.createElement("div");
  div.classList.add("create_input_div");
  inputclass.append(div);
  let span = document.createElement("span");
  div.append(span);
  span.innerText = inputid.value;
  let button = document.createElement("button");
  div.append(button);
  button.classList.add("todo_btn");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-x");
  button.append(i);
  button.addEventListener("click", removeFunc);
  inputid.value = "";
});

const removeFunc = (e) => {
  e.target.closest(".create_input_div").remove();
};

//Sort
let value = true;
let sort_btn_id = document.querySelector("#sort_btn_id");
let sort_icon = document.querySelector("#sort_icon");
sort_btn_id.addEventListener("click", () => {
  sort_icon.classList.toggle("fa-arrow-up-short-wide");
  let listArr = [];
  for (let i = 0; i < inputclass.childElementCount; i++) {
    listArr[i] = inputclass.children[i].childNodes[0].childNodes[0].nodeValue;
  }

  if (listArr) {
    listArr.sort();
    if (value == true) {
      for (let i = 0; i < inputclass.childElementCount; i++) {
        inputclass.children[i].childNodes[0].childNodes[0].nodeValue =
          listArr[i];
      }
      value = false;
    } else {
      listArr = listArr.reverse();
      for (let i = 0; i < inputclass.childElementCount; i++) {
        inputclass.children[i].childNodes[0].childNodes[0].nodeValue =
          listArr[i];
      }
      value = true;
    }
  }
});
