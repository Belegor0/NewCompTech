var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');
var cities=[c1,c2,c3,c4,c5];
var mons=[m1,m2,m3,m4,m5];
var cont = document.getElementById('control');
var is_city = false;
var is_mon = false;
var city;
var mon;
var res = Number(0);
function clicker () {
    if (is_mon==true) {
        if((city==1 && mon==4)||(city==2 && mon==1)||(city==3 && mon==5)||(city==4 && mon==2)||(city==5 && mon==3)) {
            res+=1;
        }
        cities[city-1].disabled=true;
        mons[mon-1].disabled=true;
        is_mon=false;
    }
}

c1.onclick = function() {
    is_city = true;
    city = 1;
    console.log(is_city);
}
c2.onclick = function() {
    is_city = true;
    city = 2;
}
c3.onclick = function() {
    is_city = true;
    city = 3;
}
c4.onclick = function() {
    is_city = true;
    city = 4;
}
c5.onclick = function() {
    is_city = true;
    city = 5;
}
m1.onclick = function() {
    if (is_city==true) {
        is_mon = true;
        is_city = false;
        mon = 1;
        clicker();
    }
}
m2.onclick = function() {
    if (is_city==true) {
        is_mon = true;
        is_city = false;
        mon = 2;
        clicker();
    }
}
m3.onclick = function() {
    if (is_city==true) {
        is_mon = true;
        is_city = false;
        mon = 3;
        clicker();
    }
}
m4.onclick = function() {
    if (is_city==true) {
        is_mon = true;
        is_city = false;
        mon = 4;
        clicker();
    }
}
m5.onclick = function() {
    if (is_city==true) {
        is_mon = true;
        is_city = false;
        mon = 5;
        clicker();
    }
}

cont.onclick = function(){
    if (confirm('Ваша оценка: '+String(res))) {
        for (var i=0; i<cities.length;i++){
            cities[i].disabled=false;
            mons[i].disabled=false;
        }
        res=Number(0);
    }
}