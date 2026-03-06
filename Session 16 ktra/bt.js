

function addUser(){
    let password=document.getElementById("pass").value;
let email=document.getElementById("email").value;
let repass=document.getElementById("repass").value;
let user=[];
if(repass!==password){
    alert("Mật khẩu và nhập lại không trùng nhau")
}
let obj={
    email:email,
    password:password,
    repass:repass,
}
user.push(obj);
console.log(user);
}
addUser();