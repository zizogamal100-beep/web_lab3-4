let CartQuantity = 0;
function btn1() {
document.getElementById('CartQuantity').textContent = CartQuantity;
}

function btn2() {
    CartQuantity+=1;
}

function btn3() {
    CartQuantity+=2;
}

function btn4() {
    CartQuantity+=3;
}

function btn5() {
    CartQuantity=0;
}