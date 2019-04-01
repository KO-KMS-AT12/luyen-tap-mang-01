//Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính
// và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
function bai1() {
    let arr = [23, 3, 11, 42, 51, 6, 8, 99, 30, 7];
    let count = 0;
    let sum = arr.reduce(function (a, b) {
        return a + b;
    });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10) {
            count++;
        }
    }
    return document.write("Tong phan tu mang la : " + sum + " va co " + count + " phan tu lon hon bang 10")
}

// bai1();

//Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị
// ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó
function bai2() {
    let arr = [23, 3, 11, 42, 51, 6, 8, 99, 30, 7];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return document.write("Phan tu max trong mang [ " + arr + " ] la " + max);
}

// bai2();

// Bài 3- Viết chương trình khởi tạo mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó.
// In ra giá trị trung bình của các phần tử trong mảng.
function bai3(arr) {
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (max < arr[i]) {
            max = arr[i];
        }

    }
    document.write("Phan tu max trong mang [ " + arr + " ] la " + max);
    document.write("<br>Gia tri trung binh cac phan tu trong mang [ " + arr + " ] la " + parseFloat(sum / arr.length));
}

// bai3([2, 3, 5, 6, 1, 8, 9, 7, 4, 10]);

// Bài 4- Viết chương trình khởi tạo/nhập vào
// một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
function bai4(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = tmp;
    }
    return document.write(arr);
}

// bai4([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Bài 5- Viết chương trình đếm số nguyên âm trong một mang
function bai5(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return document.write(count);
}

// bai5([-2, 3, -5, 6, -8, -9, 7]);

//Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên
// gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình tìm xem V có nằm trong mảng số nguyên không?
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array"
// còn lại in ra "V is not in the array".
function bai6(arr) {
    let value = parseInt(prompt("Nhap vao so nguyen bat ki: "));
    let result = document.getElementById("result");
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            result.innerHTML = value + " is in the array";
            break;
        } else {
            result.innerHTML = value + " is not in the array";
        }
    }
}

// bai6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên
// gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình kiểm tra xem V có thuộc mảng đã cho không,
// nếu V thuộc mảng đã cho xoá V khỏi mảng
// (Bản chất việc xoá ở đây tức là dịch phần tử ở
// bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)

function bai7(arr) {
    let value = parseInt(prompt("Nhap vao so nguyen bat ki: "));
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            arr.splice(i, 1);
        }
    }
    document.write(arr);
}

// bai7([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 ptử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần
// và hiển thị ra mảng đã được sắp xếp.
function bai8(arr) {
    return document.write(arr.sort(function (a, b) {
        return b - a;
    }));
}

// bai8([1, 2, 5, 6, 9, 7, 3, 8, 4]);

//Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử
// , gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.
// Hiển thị mảng c.

function bai9() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let c = [];
    c.push(a+b);

    return document.write("[ "+c+" ]");
}

// bai9();