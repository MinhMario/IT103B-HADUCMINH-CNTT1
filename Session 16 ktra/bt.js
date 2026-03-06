let user=[];
function addUser(event){
    event.preventDefault();
let password=document.getElementById("pass").value;
let email=document.getElementById("email").value;
let repass=document.getElementById("repass").value;

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
