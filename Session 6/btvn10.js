let arr = [];

while (true) {
    let menu = `
================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố trong mảng và tính tổng
6. Nhập một số và đếm số lần xuất hiện trong mảng
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
0. Thoát
============================================
Lựa chọn của bạn:`;

    let chon = +prompt(menu);

    if (chon == 1) {
       
        let n = +prompt("Nhập số phần tử:");
        arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
        }
        alert("Đã nhập xong!");
        console.log("Mảng vừa nhập:", arr);

    } else if (chon == 2) {
      
        if (arr.length == 0) {
            alert("Mảng rỗng!");
        } else {
            console.log("Mảng hiện tại:", arr);
            alert("Mảng: " + arr.join(", "));
        }

    } else if (chon == 3) {
       
        let arrChan = [];
        let tong = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                arrChan.push(arr[i]);
                tong += arr[i];
            }
        }
  
        arrChan.sort((a, b) => b - a);
        
        console.log("Các số chẵn (giảm dần):", arrChan);
        console.log("Tổng các số chẵn:", tong);
        alert("Các số chẵn (giảm dần): " + arrChan.join(", ") + "\nTổng: " + tong);

    } else if (chon == 4) {
       
        if (arr.length == 0) {
            alert("Mảng rỗng!");
        } else {
            let max = arr[0];
            let min = arr[0];
            let viTriMax = 0;
            let viTriMin = 0;
            
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    viTriMax = i;
                }
                if (arr[i] < min) {
                    min = arr[i];
                    viTriMin = i;
                }
            }
            
            console.log("Max:", max, "tại vị trí", viTriMax);
            console.log("Min:", min, "tại vị trí", viTriMin);
            alert("Max: " + max + " (vị trí " + viTriMax + ")\nMin: " + min + " (vị trí " + viTriMin + ")");
        }

    } else if (chon == 5) {
       
        function laSoNguyenTo(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) return false;
            }
            return true;
        }

        let arrNguyenTo = [];
        let tong = 0;
        for (let i = 0; i < arr.length; i++) {
            if (laSoNguyenTo(arr[i])) {
                arrNguyenTo.push(arr[i]);
                tong += arr[i];
            }
        }
        
        console.log("Các số nguyên tố:", arrNguyenTo);
        console.log("Tổng:", tong);
        alert("Các số nguyên tố: " + arrNguyenTo.join(", ") + "\nTổng: " + tong);

    } else if (chon == 6) {
       
        let so = +prompt("Nhập số cần đếm:");
        let dem = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == so) {
                dem++;
            }
        }
        console.log("Số " + so + " xuất hiện " + dem + " lần");
        alert("Số " + so + " xuất hiện " + dem + " lần trong mảng");

    } else if (chon == 7) {
       
        let giaTri = +prompt("Nhập giá trị cần thêm:");
        let viTri = +prompt("Nhập vị trí (0 - " + arr.length + "):");
        
        if (viTri >= 0 && viTri <= arr.length) {
            arr.splice(viTri, 0, giaTri);
            console.log("Mảng sau khi thêm:", arr);
            alert("Đã thêm thành công!\nMảng mới: " + arr.join(", "));
        } else {
            alert("Vị trí không hợp lệ!");
        }

    } else if (chon == 8) {
      
        let giaTri = +prompt("Nhập giá trị cần xóa:");
        let viTri = arr.indexOf(giaTri);
        
        if (viTri != -1) {
            arr.splice(viTri, 1);
            console.log("Mảng sau khi xóa:", arr);
            alert("Đã xóa " + giaTri + " thành công!\nMảng mới: " + arr.join(", "));
        } else {
            alert("Không tìm thấy giá trị " + giaTri + " trong mảng!");
        }

    } else if (chon == 9) {
       
        let kieuSapXep = prompt("Nhập 'tang' để sắp xếp tăng dần hoặc 'giam' để giảm dần:");
        
        if (kieuSapXep == "tang") {
            arr.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            alert("Mảng tăng dần: " + arr.join(", "));
        } else if (kieuSapXep == "giam") {
            arr.sort((a, b) => b - a);
            console.log("Mảng sau khi sắp xếp giảm dần:", arr);
            alert("Mảng giảm dần: " + arr.join(", "));
        } else {
            alert("Lựa chọn không hợp lệ!");
        }

    } else if (chon == 0) {
        // Thoát
        alert("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
        break;

    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 0-9.");
    }
}

console.log("Chương trình kết thúc.");