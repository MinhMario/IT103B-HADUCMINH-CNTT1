let user=prompt("Nhập tên người dùng")
let role=prompt("Nhập vai trò").toLowerCase();
let money=+parseFloat("Nhập số dư")
let kind=prompt("Nhập trạng thái")
let borrowDay=+prompt("Nhập số ngày quá hạn")
let maxDay=5;
console.log("---HỆ THỐNG MƯỢN TRẢ---");
switch(role){

    case "student":
        console.log("Quyền hạn:Chào sinh viên bạn có thể mượn sách");
        break;
        case "guest":
        console.log("Quyền hạn:Chào khách , bạn có thể đọc tại chỗ");
        break;
        case "admin":
            console.log("Quyền hạn:Chào Admin, bạn có toàn quyền hệ thống");
            break;
            default:
                console.log("Không hợp lệ");
                break;
}
if(user==""){
    console.log("Kết quả mượn:Người dùng không thể mượn sách");
}else if(user=="guest"){
    console.log("Kết quả mượn:Người dùng chỉ không thể mượn sách");
}else if(money==0){
    console.log("Kết quả mượn:Số dư tài khoản không đủ để mượn sách");
}else{
    console.log("Kết quả mượn:Được phép mượn sách");
}
if(borrowDay<=0){
    console.log("Tình trạng trả sách:Cảm ơn đã trả đúng hạn")
}else if(borrowDay<=5&&borrowDay>0){
    console.log(`Tình trạng trả sách: Quá hạn ${borrowDay}
        Tiền phạt: ${5000 * borrowDay}`);
}else if(borrowDay<=10){
    console.log(`Tình trạng trả sách:Quá hạn
       Tiền phạt ${10000 * borrowDay}`);
}else if(borrowDay>10){
    console.log(`Tình trạn trả sách:Tài khoản đã bị khoá
        Tiền phạt :200.000đ`)
}