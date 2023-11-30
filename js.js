"use strict";

const inputInfor = document.querySelector(".container-input");
const outputInfor = document.querySelector(".container-output");
const btnInput = document.querySelector(".btn-input");
const btnButton = document.querySelector(".btn-button");

outputInfor.classList.add("hidden");
inputInfor.classList.remove("hidden");
// inputInfor.classList.add("hidden");
// outputInfor.classList.remove("hidden");

btnButton.addEventListener("click", function () {
  let emailUser = document.querySelector(".btn-input");
  console.log(emailUser.value);
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailUser.value == "" || !regex.test(emailUser.value)) {
    alert("Email Invalid");
  } else {
    inputInfor.classList.add("hidden");
    outputInfor.classList.remove("hidden");
  }
});

// 10.Ẩn thông tin nghề nghiệp
const btnViewmore = document.querySelector(".btn-more");
const btnViewmore1 = document.querySelector(".btn-more-1");
const btnViewmore2 = document.querySelector(".btn-more-2");
const btnViewmore3 = document.querySelector(".btn-more-3");
const btnViewmore4 = document.querySelector(".btn-more-4");
const btnViewmore5 = document.querySelector(".btn-more-5");

const Infor = document.querySelector(".job-content");
const Infor1 = document.querySelector(".job-content-1");
const Infor2 = document.querySelector(".job-content-2");
const Infor3 = document.querySelector(".hobby");
const Infor4 = document.querySelector(".language");
const Infor5 = document.querySelector(".kynang");

btnViewmore.addEventListener("click", function () {
  Infor.classList.toggle("hidden");
  const view = document.getElementById("view").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore.textContent = "VIEW LESS";
  } else {
    btnViewmore.textContent = "VIEW MORE";
  }
});
btnViewmore1.addEventListener("click", function () {
  Infor1.classList.toggle("hidden");
  const view = document.getElementById("view1").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore1.textContent = "VIEW LESS";
  } else {
    btnViewmore1.textContent = "VIEW MORE";
  }
});
btnViewmore2.addEventListener("click", function () {
  Infor2.classList.toggle("hidden");
  const view = document.getElementById("view2").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore2.textContent = "VIEW LESS";
  } else {
    btnViewmore2.textContent = "VIEW MORE";
  }
});
btnViewmore3.addEventListener("click", function () {
  Infor3.classList.toggle("hidden");
  const view = document.getElementById("view3").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore3.textContent = "VIEW LESS";
  } else {
    btnViewmore3.textContent = "VIEW MORE";
  }
});
btnViewmore4.addEventListener("click", function () {
  Infor4.classList.toggle("hidden");
  const view = document.getElementById("view4").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore4.textContent = "VIEW LESS";
  } else {
    btnViewmore4.textContent = "VIEW MORE";
  }
});
btnViewmore5.addEventListener("click", function () {
  Infor5.classList.toggle("hidden");
  const view = document.getElementById("view5").innerHTML;
  if (view == "VIEW MORE") {
    btnViewmore5.textContent = "VIEW LESS";
  } else {
    btnViewmore5.textContent = "VIEW MORE";
  }
});
