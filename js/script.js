let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}





























// name validation
// function valid(){
//  var nameValidation = document.getElementById("nInput")
//  if(/^[a-zA-Z]+$/.test(nameValidation.value)&& nameValidation.value.trim()!="")
//     {
//     nameValidation.style.border = "2px solid green";
//    //  nameValidation.style.borderRadius = "6px";
//     } 
//     else
//   {
//    nameValidation.style.border = "2px solid red";
//   }

// //   phone validation
// var phPattern = /^\+91[789]\d{10}$/;
// var phoneValidation = document.getElementById("phoneInput")
// if (phPattern.test(phoneValidation.value) && phoneValidation.value.trim()!="") 
// {
//    phoneValidation.style.border = "2px solid green";
// } 
// else
//  {
//    phoneValidation.style.border = "2px solid red";
// }

// //email validation
// var ePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// var emailValidation = document.getElementById("eInput")
// if (ePattern.test(emailValidation.value) && emailValidation.value.trim != "") 
// {
//    emailValidation.style.border = "2px solid green";
// }
//  else 
//  {
//    emailValidation.style.border = "2px solid red";
// }

// //address validation
// var addPattern = /^.+$/;
// var addValidation = document.getElementById("addInput")
// if (addPattern.test(addValidation.value) && addValidation.value !="") 
// {
//    addValidation.style.border = "2px solid green";
// }
// else
// {
//    addValidation.style.border = "2px solid red";
// }

// // where loation validation
// var wValidation = document.getElementById("wInput")
// if (/^[a-zA-Z]+$/.test(wValidation.value) && wValidation.value.trim()!="") 
// {
//    wValidation.style.border = "2px solid green";
// } 
// else 
// {
//    wValidation.style.border = "2px solid red";
// }

// //arrival date validation
// var hValidation = document.getElementById("hInput")
// if (/^(10|[1-9])$/.test(hValidation.value) && hValidation.value.trim() !="")
//  {
//    hValidation.style.border = "2px solid green";
// } 
// else 
// {
//    hValidation.style.border = "2px solid red";
// }

// //Arrival Date Validation
// var dateInput = document.getElementById("arrInput")
// var userInput = dateInput.value;
// var datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
// if (datePattern.test(userInput))
//  {
//   const [,day,month,year] = userInput.match(datePattern) 
//   const userDate = new Date(year,month-1,day)
//   var currDate = new Date()
//   if (userDate >= currDate) 
//   {
//    dateInput.style.border = "2px solid green";
//   }
//    else
//     {
//    dateInput.style.border = "2px solid red";
//   }
// } 
// else 
// {
//    dateInput.style.border = "2px solid red";
// }

// //Leave Date Validation
// var lInput = document.getElementById("leaveInput")
// var uInput = dateInput.value;
// var dPattern = /^(\d{2})-(\d{2})-(\d{4})$/;
// if (dPattern.test(uInput))
//  {
//   const [,day,month,year] = uInput.match(dPattern) 
//   const uDate = new Date(year,month-1,day)
//   var curDate = new Date()
//   if (uDate >= curDate) 
//   {
//    lInput.style.border = "2px solid green";
//   }
//    else
//     {
//    lInput.style.border = "2px solid red";
//   }
// } 
// else 
// {
//    lInput.style.border = "2px solid red";
// }
// }

// async function mainFun(){
//   var submit = document.getElementById("formBtn")
//   var btn = document.getElementById("button")
//   var pop = document.getElementById("popY")
//    submit.addEventListener("submit",function() {
//       pop.classList.add("openpop")
//    })
//    btn.addEventListener("click",function() {
//       pop.classList.remove("openpop")
//    })
// }

// mainFun().then(valid())
// var f = document.getElementById("frm")
// var wValidation = document.getElementById("wInput")
// var addValidation = document.getElementById("addInput")
// var emailValidation = document.getElementById("eInput")
// var lInput = document.getElementById("leaveInput")
// var dateInput = document.getElementById("arrInput")
// var hValidation = document.getElementById("hInput")
// var pop = document.getElementById("popY")
// // var phoneValidation = document.getElementById("phoneInput")
//  var phPattern = /^\+91[789]\d{10}$/;
//  var phI = document.getElementById("phoneInput")
//  f.addEventListener("submit",function (e) {
//     if (!wValidation.value || !dateInput.value || !hValidation.value || !addValidation.value|| !emailValidation.value|| !lInput.value ) {
//      e.preventDefault();
//      alert("Enter all details") 
//     } 
//  });

