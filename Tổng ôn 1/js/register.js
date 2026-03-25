let users=JSON.parse(localStorage.getItem("users"))||[];

function register(e){
    e.preventDefault();
    console.log("Đã gọi hàm");
    let username=document.getElementById("username").value;
    console.log("username",username);
    if(username.length==0){
        showErrorName("Ten khong duoc de trong","block")
        return
    }
    if(username.length<3){
        showErrorName("Ten phai dai hon 2","block");
        return;
    }
    showErrorName("","none");
    let email=document.getElementById("email").value;
    if(!validateEmail(email)){
        showEmailError("Email khong hop le","block");
        return;
    }else{
        showEmailError("","none");
    }
    for(let i=0;i<users.length;i++){
        if(users[i].email==email){
            showEmailError("Email đã bị trùng","block");
            return;
        }
    }
    showEmailError("","none");
    let password=document.getElementById("password").value;
    if(password.length<8){
        showPasswordName("Do dai mat khau khong hop le","block");
        return;
    }
    let repass=document.getElementById("repass").value;
    if(password!=repass){
        document.querySelector(".confirm-pass").style.display="block"
        return;
    }else{
        document.querySelector(".confirm-pass").style.display="none"
    }

    let user={
        name:username,
        email:email,
        password:password,
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    document.location.href="./login.html"
}
function showPasswordName(errorName,display){
        document.querySelector(".error-pass").style.display=display;
     document.querySelector(".error-pass").textContent=errorName
}
function showErrorName(errorName,display){
    document.querySelector(".error-name").style.display=display;
    document.querySelector(".error-name").textContent=errorName
}
function showEmailError(errorName,display){
    document.querySelector(".error-email").style.display=display;
     document.querySelector(".error-email").textContent=errorName
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}