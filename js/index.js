window.onload = function () {
    var oNavImg = document.getElementById('navbar').getElementsByTagName('img')[0];
    var oBtn = document.getElementById("btn");
    var oBtn2 = document.getElementById("btn2");
    var oWrap = document.getElementsByClassName("wrap")[0];
    var aDiv = oWrap.getElementsByTagName("div");
    var i = 0;
    var oTimer = null;
    var iDelay = 200;
    var Boff = true;
    var oTop = document.getElementById('top');
    var timer = null;
    var oBot = document.getElementById('bot');
    oBtn.onclick = function () {
        if (Boff) {
            i = 0;
            oTimer = setInterval(function () {
                aDiv[i].className = "open";
                if (i == aDiv.length - 1) {
                    clearInterval(oTimer);
                }
                i++;
            }, iDelay);
        } else {
            i = aDiv.length - 1;
            oTimer = setInterval(function () {
                aDiv[i].className = "clos";
                if (i == 0) {
                    clearInterval(oTimer);
                }
                i--;
            }, 100);
        }
        Boff = !Boff;
    };

    oNavImg.onclick = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 768;
    };

    oTop.onclick = function () {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var oTop2 = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop2 > 0) {
                scrollBy(0, -50);
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    };

    oBot.onclick = function() {
        document.body.scrollTop = document.documentElement.scrollTop = 768;
    };
};