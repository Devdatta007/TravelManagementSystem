var validate = ()=>{
    var pw=document.getElementById("passWord")
    var us = document.getElementById("username")
    var inputUsername = us.value
    var staticUsername = "admin"
    var inputPass = pw.value
    var staticPass = "123456"
    var bton=document.getElementById("bton")
    var popup = document.getElementById("pop")
    var btn = document.getElementById("btn")
    var errorPopup = document.getElementById("popE")
    var btonE = document.getElementById("btonE")
    if(inputPass == staticPass && inputUsername == staticUsername)
    {
      function openPop(){
          popup.classList.add("openpop")
      }
      function closePop(){
          popup.classList.remove("openpop")
      }
      btn.addEventListener("click",openPop)
      bton.addEventListener("click",closePop)
    }
    else
    {
      function openError(){
        errorPopup.classList.add("errorPop")
      }
      function closeError() {
        errorPopup.classList.remove("errorPop")
      }
      btn.addEventListener("click",openError)
      btonE.addEventListener("click",closeError)
    }
            }
            let loginButton = document.getElementById("btn")
            loginButton.addEventListener("click",validate)
        var showPass=document.getElementById("check")
        var pw=document.getElementById("passWord")
        showPass.addEventListener("change",function(){
          if(showPass.checked)
            {
               pw.type = "text";
            }
          else
            {
            pw.type = "password";
            }
      });
      