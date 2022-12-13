var conts = document.querySelectorAll('.cont');
var rem = document.getElementById('rem');

rem.onclick = function () {
    var fst = document.getElementById('fst').value;
    var snd = document.getElementById('snd').value;
    if (isNaN(Number(fst)) || isNaN(Number(snd)))
    {
        alert('Некорректный ввод');
    }
    else {
        fst = Number(fst);
        snd = Number(snd);
        if ((fst < 1 || fst > 3) || (snd < 1 || snd > 3))
        {
            alert('Неверные цифры');
        }
        else {
            [conts[fst-1].className, conts[snd-1].className] = [conts[snd-1].className, conts[fst-1].className];
        }
    }
}