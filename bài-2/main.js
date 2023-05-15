let num = prompt("Vui lòng nhập số từ 1 - 10")

function  numberOneTriangle() {
    if (num < 1 || num > 10) {
     console.log("Bạn đã nhập sai");
    } else {
             let nums = "";
        for (let i = 0; i < num; i++) {
                nums += "*"
                console.log(nums)
            
        }
    }
}

numberOneTriangle();