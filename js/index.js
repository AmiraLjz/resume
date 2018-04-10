window.onload = function () {
    var oNavImg = document.getElementById('navbar').getElementsByTagName('img')[0];
    var oTop = document.getElementById('top');
    var oBot = document.getElementById('bot');
    var timer = null;
    var oUl = document.getElementById("list");
    var aH3 = oUl.getElementsByTagName("h3");
    var aUl = oUl.getElementsByTagName("ul");

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

    oBot.onclick = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 768;
    };

    for (var i = 0; i < aH3.length; i++) {
        aH3[i].index = i;
        aH3[i].onclick = function () {
            if (this.className == "") {
                aUl[this.index].style.display = "block";
                this.className = "active";
            } else {
                aUl[this.index].style.display = "none";
                this.className = "";
            }
        };
    }
};