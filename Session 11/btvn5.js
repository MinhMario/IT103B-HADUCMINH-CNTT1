let account=[];
function addAccount(email,pass){
    let newAcc={
        User:email,
        password:pass,
    };
    account.push(newAcc);
}
let choice;
let flag=1;
function validateUserName(email){
     if (!email.includes("@")) {
    console.log("Lỗi: Email phải chứa ký tự @");
    return false;
  }
    const part=email.split("@");
    const doamainPart=part[1];
     if (!domainPart.endsWith(".com") && !domainPart.endsWith(".vn")) {
    console.log("Lỗi: Email phải kết thúc bằng .com hoặc .vn");
    return false;
  }
}
function validatePassword(pass){
    if(!pass.length<6){
        console.log("Độ dài không hợp lệ");
        return false;
    }
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
     let hasUpper = false;

  for (let char of password) {
    if (upperChars.includes(char)) {
      hasUpper = true;
      break;
    }
  }

  if (!hasUpper) {
    console.log("Lỗi: Mật khẩu phải có ít nhất 1 chữ hoa");
    return;
  }
   let hasSpecial = false;

  for (let char of password) {
    if (specialChars.includes(char)) {
      hasSpecial = true;
      break;
    }
  }

  if (!hasSpecial) {
    console.log("Lỗi: Mật khẩu phải có ít nhất 1 ký tự đặc biệt");
    return;
  }
}
do{
    choice=+prompt(`1.Dang ky nguoi dung moi
        2.Dang nhap
        Nhap lua chon cua ban`);
    switch(choice){
        case 1:
        let username=prompt("Nhap ten tai khoan");
        let password=prompt("Nhap mat khau");
        validateUserName(username);
        validatePassword(password);
        addAccount(username,password);
        break;
    
    case 2:
        let usernames=prompt("Nhap ten tai khoan");
        let passwords=prompt("Nhap mat khau");
        if(usernames==newAcc.usernames&& passwords==newAcc.password){
            console.log("Đăng nhập thành công");
        }else{
            console.log("Đăng nhập thất bại");
        }
        break;
    
    default:
        console.log("không hợp lệ");
        break;
    }
}while(choice!=0)