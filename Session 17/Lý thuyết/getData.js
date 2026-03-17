/*
Lấy dữ liệu
localStorage.getIteam("TÊN_KEY")
đối với mảng hoặc object khi lấy về phải chuyển từ định dạng JSON sang định dạng ban đầu của nó.
JSON.parse(GIÁ TRỊ LẤY VỀ);
*********
XOÁ DỮ LIỆU
1.Xoá từng key
localStorage.removeItem("TÊN-KEY");

2.Xoá hết

*/ 
let age=localStorage.getItem("age");
console.log("age",age);
let fullname=localStorage.getItem("fullname");
console.log("fullname",fullname);
let products=JSON.parse(localStorage.getItem("product"));
localStorage.removeItem("fullname");