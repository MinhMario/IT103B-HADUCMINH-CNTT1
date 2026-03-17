/*
 Browser Storage:
 Dịch vụ cho phép lưu trữ dữ liệu phía trình duyệt web
 Cung cấp 3 kiểu lưu dữ liệu
 1.Local Storage
 + Dung lượng:5_10MB
 + Dữ liệu khi lưu (đóng trình duyệt ,tắt máy) thì dữ liệu không bị mất!
 2.Session Storage
 + Dung lượng lưu:5-10 MB
 + Phiên làm việc:Khi đóng trình duyệt thì dữ liệu bị mất
 3.Cookies
 + Có thể set được thời gian tồn tại

 - Cách lưu trữ dữ liệu:
 I-Lưu:local.storage.setItem(TÊN_KEY,VALUE)

    Đối với dữ liệu là mảng hoặc object khi lưu PHẢI chuyển sang định dạng JSON.
    JSON.stringfy(DỮ LIỆU)
 */
 let fullname="Vũ Hồng Vân"
 localStorage.setItem("fullname",fullname);
 let age=18;
 localStorage.setItem("age",age);
 let students=["Thu","Hồng","Huyền"];
 localStorage.setItem("students",JSON.stringify(students));
 let products=[
   {
      id:1,
      name:"sp1",
   },
   {
      id:2,
      name:"sp2",
   },
 ]
 
