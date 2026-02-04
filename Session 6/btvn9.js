let arr = [];
let n = 0;

while (true) {
    let menu = `
================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
============================================
Lựa chọn của bạn:`;

    let chon = +prompt(menu);

    if (chon == 1) {
        
        n = +prompt("Nhập số phần tử:");
        arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
        }
        alert("Đã nhập xong!");

    } else if (chon == 2) {
     
        if (arr.length == 0) {
            alert("Mảng rỗng!");
        } else {
            console.log("Mảng:", arr);
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
        console.log("Các số chẵn:", arrChan);
        console.log("Tổng các số chẵn:", tong);
        alert("Các số chẵn: " + arrChan.join(", ") + "\nTổng: " + tong);

    } else if (chon == 4) {
        // Max và Min
        if (arr.length == 0) {
            alert("Mảng rỗng!");
        } else {
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) max = arr[i];
                if (arr[i] < min) min = arr[i];
            }
            console.log("Max:", max, "Min:", min);
            alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
        }

    } else if (chon == 5) {
        // Số nguyên tố
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
        // Đếm số lần xuất hiện
        let so = +prompt("Nhập số cần thống kê:");
        let dem = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == so) {
                dem++;
            }
        }
        console.log("Số " + so + " xuất hiện " + dem + " lần");
        alert("Số " + so + " xuất hiện " + dem + " lần");

    } else if (chon == 7) {
        // Thêm phần tử
        let giaTri = +prompt("Nhập giá trị cần thêm:");
        let viTri = +prompt("Nhập vị trí cần thêm (0 - " + arr.length + "):");
        
        if (viTri >= 0 && viTri <= arr.length) {
            arr.splice(viTri, 0, giaTri);
            alert("Đã thêm thành công!\nMảng mới: " + arr.join(", "));
        } else {
            alert("Vị trí không hợp lệ!");
        }

    } else if (chon == 8) {
        // Thoát
        alert("Tạm biệt!");
        break;

    } else {
        alert("Lựa chọn không hợp lệ!");
    }
}
