var divs = document.querySelectorAll('.quest');
var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');
var first = document.querySelectorAll('input[name="first"]');
var second = document.querySelectorAll('input[name="second"]');
var third = document.querySelectorAll('input[name="third"]');
var fourth = document.querySelectorAll('input[name="fourth"]');
var checkedf = [Number(0), Number(0), Number(0), Number(0)];
var checks = Number(0);
next1.onclick = function() {
    divs[0].className = 'quest';
    divs[1].className = 'quest quest_show';
}
next2.onclick = function() {
    divs[1].className = 'quest';
    divs[2].className = 'quest quest_show';
}
next3.onclick = function() {
    divs[2].className = 'quest';
    divs[3].className = 'quest quest_show';
}
next4.onclick = function () {
    for (var i=0; i<first.length; i++) {
        if (first[i].checked) {
            checkedf[0]=Number(first[i].value);
        }
    }
    for (var i=0; i<second.length; i++) {
        if (second[i].checked) {
            checkedf[1]=Number(second[i].value);
        }
    }
    for (var i=0; i<third.length; i++) {
        if (third[i].checked) {
            checkedf[2]=Number(third[i].value);
        }
    }
    for (var i=0; i<fourth.length; i++) {
        if (fourth[i].checked) {
            checkedf[3]=Number(fourth[i].value);
        }
    }
    for (var i=0; i<checkedf.length; i++) {
        checks+=Number(checkedf[i]);
    }
    checks=Math.round(checks/4*5);
    if (confirm('Ваша оценка '+String(checks))) {
        for (let radio of document.querySelectorAll('[type="radio"]')) {
            radio.checked = false;
          }
        checkedf = [Number(0), Number(0), Number(0), Number(0)];
        checks = Number(0);
        divs[3].className = 'quest';
        divs[0].className = 'quest quest_show';
    }
}