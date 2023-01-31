var banKinh = prompt("Nhập bán kính: ");

if (banKinh === '' || banKinh === null) {
    alert('Vui long nhap!');
} else if (isNaN(banKinh)) {
    alert("Vui lòng nhập bán kính là số!");
} else if (banKinh <= 0) {
    alert('Phải nhập bán kính lớn hơn 0');
} else {

    const PI = 3.14;

    var banKinh = Number(banKinh);
    var chuVi = banKinh * 2 * PI;
    var dienTich = banKinh * banKinh * PI;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);
}