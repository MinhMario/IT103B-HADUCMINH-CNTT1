//hàm đăng nhập
function login(e){
    e.preventDefault();
    console.log("Đã gọi hàm");
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    let result=users.filter(e=>e.email==email&&e.password==password);
    if(result.length==0){
        document.querySelector(".error-login").style.display="block"
    }else{
        document.querySelector(".error-login").style.display="none"
    }
}