let year=parseInt(prompt("Nhập năm"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " Là năm thuận ");
        }
        else {
            alert(year + " Không phải là năm thuận ");
        }
    }
    else {
        alert(year + " Là năm thuận ");
    }
}
else {
    alert(year + " Không phải là năm thuận ");
}