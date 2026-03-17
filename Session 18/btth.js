let info=[{id:1,name:"Nguyen Van An",phone:"0901234567",mail:"nguyenvanan@email.com"}];
function renderInfo(){
    let str="";
    for(let i=0;i<info.length;i++){
        str+=`<tr>
                <td>1</td>
                <td>${info[i].name}</td>
                <td>${info[i].phone}</td>
                <td>${info[i].mail}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
              </tr>`
    }
    document.getElementById("contact-tbody").innerHTML=str;
}
renderInfo();
function addInfo(){
    const name=document.getElementById("contact-name").value.trim();
    const phone=document.getElementById("contact-phone").value.trim();
    const mail=document.getElementById("contact-email").value.trim();
    const id=info.length+1;
    if(name==""){
        alert("Tên không được để trống");
        return;
    }
    if(name.length<2){
        alert("Tên phải có độ dài hơn 2 ký tự");
        return;
    }
    if(phone.length>10||phone.length<10){
        alert("Độ dài số điện thoại không hợp lệ");
        return;
    }
    if(mail==""){
        alert("Email không được để trống");
        return;
    }
    const regexMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexMail.test(mail)){
        alert("Email không đúng định dạng");
        return;
    }
    const regexPhone=/^(0|\+84)[0-9]{9,10}$/;
    if(!regexPhone.test(phone)){
        alert("SĐT không đúng định dạng");
        return;
    }
    info.push({id,name,phone,mail});

    alert("Thêm liên hệ thành công");
    renderInfo();
}