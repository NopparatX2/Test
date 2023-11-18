function addNumbers() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerHTML = "กรุณาเติมเลขให้ครบ";
        return;
    }

    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "ผลลัพธ์บวก: " + sum;
}


function resetValues() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}
