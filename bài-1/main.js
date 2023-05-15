
function primeSum() {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = a.value;
    const d = b.value;
    let primeSum = 0;
    for (let i = c; i <= d; i++) {
        if (isPrimes(i)) {
            primeSum += i;
        }
    }

    const sum = document.getElementById("sum");
    sum.innerHTML = `Tổng các số nguyên tố trong khoảng từ ${c} đến ${d} là : ${primeSum}`
}

function isPrimes(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

const button = document.getElementById("button");
button.addEventListener("click", primeSum);
