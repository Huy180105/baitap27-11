// Bài 1
function checkAge() {
    var age = prompt("Nhập tuổi của bạn:");
    age = parseInt(age);

    if (isNaN(age) || age < 0) {
        console.log("Vui lòng nhập một số hợp lệ!");
    } else {
        var result = age >= 18 ? "Người lớn" : "Người vị thành niên";
        console.log(result);
    }
}

// Bài 2
function checkEvenOdd() {
    var so = prompt("Nhập số:");
    so = parseInt(so);

    if (isNaN(so)) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        var KQ = so % 2 === 0 ? "Số chẵn" : "Số lẻ";
        console.log(KQ);
    }
}

// Bài 3
function compareNumbers() {
    var so1 = prompt("Nhập số thứ nhất:");
    var so2 = prompt("Nhập số thứ hai:");

    so1 = parseFloat(so1);
    so2 = parseFloat(so2);

    if (isNaN(so1) || isNaN(so2)) {
        console.log("Vui lòng nhập hai số hợp lệ!");
    } else {
        if (so1 > so2) {
            console.log("Số thứ nhất lớn hơn số thứ hai");
        } else if (so1 < so2) {
            console.log("Số thứ nhất nhỏ hơn số thứ hai");
        } else {
            console.log("Hai số bằng nhau");
        }
    }
}

// Bài 4
function checkInteger() {
    var so = prompt("Nhập số:");

    so = parseFloat(so);

    if (isNaN(so)) {
        console.log("Vui lòng nhập một số hợp lệ!");
    } else {
        var KQ = Number.isInteger(so) ? "Số nguyên" : "Không phải số nguyên";
        console.log(KQ);
    }
}

// Bài 5
function convertNumberToMonth() {
    var thang = prompt("Nhập một số nguyên từ 1 đến 12:");

    thang = parseInt(thang);

    if (isNaN(thang) || thang < 1 || thang > 12) {
        console.log("Tháng không hợp lệ");
    } else {
        var tenThang = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
            "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
            "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        console.log(tenThang[thang - 1]);
    }
}

// Bài 6
function calculateShipping() {
    var distance = prompt("Nhập khoảng cách (km):");
    distance = parseFloat(distance);

    if (isNaN(distance) || distance < 0) {
        console.log("Vui lòng nhập một khoảng cách hợp lệ!");
    } else {
        var baseFee = 7000; // Phí cố định cho 5km đầu tiên
        var additionalFeePerKm = 2000; // Phí thêm mỗi km sau 5km
        var totalFee;

        if (distance <= 5) {
            totalFee = baseFee;
        } else {
            totalFee = baseFee + (distance - 5) * additionalFeePerKm;
        }
        console.log("Phí vận chuyển: " + totalFee + " VND");
    }
}

// Bài 7
function gradeExam() {
    var score = prompt("Nhập điểm bài thi của bạn (0 - 100):");
    score = parseFloat(score);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Vui lòng nhập điểm hợp lệ (0 - 100)!");
    } else {
        var grade;
        if (score >= 90) {
            grade = "Xuất sắc";
        } else if (score >= 80) {
            grade = "Giỏi";
        } else if (score >= 70) {
            grade = "Khá";
        } else if (score >= 60) {
            grade = "Trung bình";
        } else {
            grade = "Yếu";
        }
        console.log("Xếp loại: " + grade);
    }
}
