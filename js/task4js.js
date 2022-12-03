var prod_names = ['Молоко', 'Сметана', 'Творог', 'Кефир', 'Йогурт'];
var prod_price = [110, 95, 68, 142, 76];
var prod_num = [0., 0., 0., 0., 0.];
var minus1 = document.getElementById('1-');
var plus1 = document.getElementById('1+');
var minus2 = document.getElementById('2-');
var plus2 = document.getElementById('2+');
var minus3 = document.getElementById('3-');
var plus3 = document.getElementById('3+');
var minus4 = document.getElementById('4-');
var plus4 = document.getElementById('4+');
var minus5 = document.getElementById('5-');
var plus5 = document.getElementById('5+');
var cart = document.getElementById('inner-cart');
var clear = document.getElementById('clear')
function all_price() {
    let price=0.;
    for(var i=0; i<prod_price.length; i++) {
        price += prod_price[i]*prod_num[i];
    }
    return price;
}
function all_cart() {
    cart.innerText='';
    for(var i=0; i<prod_names.length; i++) {
        if(prod_num[i]>0) {
            cart.innerText+=prod_names[i]+': '+String(prod_num[i])+'\n';
        }
    }
    if(prod_num.reduce(function(sum,elem) {return sum+elem;},0)) {
        var price=all_price();
        cart.innerText+='Стоимость: '+String(price);
    }
}
minus1.onclick = function() {
    if(prod_num[0]>0) {
        prod_num[0]-=1;
    }
    all_cart();
}
minus2.onclick = function() {
    if(prod_num[1]>0) {
        prod_num[1]-=1;
    }
    all_cart();
}
minus3.onclick = function() {
    if(prod_num[2]>0) {
        prod_num[2]-=1;
    }
    all_cart();
}
minus4.onclick = function() {
    if(prod_num[3]>0) {
        prod_num[3]-=1;
    }
    all_cart();
}
minus5.onclick = function() {
    if(prod_num[4]>0) {
        prod_num[4]-=1;
    }
    all_cart();
}
plus1.onclick = function() {
    prod_num[0]+=1;
    all_cart();
}
plus2.onclick = function() {
    prod_num[1]+=1;
    all_cart();
}
plus3.onclick = function() {
    prod_num[2]+=1;
    all_cart();
}
plus4.onclick = function() {
    prod_num[3]+=1;
    all_cart();
}
plus5.onclick = function() {
    prod_num[4]+=1;
    all_cart();
}
clear.onclick = function () {
    cart.innerText = '';
    prod_num = [0., 0., 0., 0., 0.];
}