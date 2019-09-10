window.onload = function(){
    var oLi = document.getElementsByTagName("li");
    for (var i = 0;i < oLi.length;i++){
        oLi[i].onmouseenter = function (e) {

            var dis = move(e, this);
            var oDes = this.getElementsByClassName("box-shade")[0];
            oDes.style.display = "block";
            oDes.className = "box-shade";
            switch (dis) {
                case 0: oDes.classList.add("in-top");
                    break;
                case 1: oDes.classList.add("in-right");
                    break;
                case 2: oDes.classList.add("in-bottom");
                    break;
                case 3: oDes.classList.add("in-left");
                    break;
            }
        }
        oLi[i].onmouseleave = function (e) {
            var dis = move(e, this);
            var oDes = this.getElementsByClassName("box-shade")[0];
            oDes.className = "box-shade";
            switch (dis) {
                case 0: oDes.classList.add("out-top");
                    break;
                case 1: oDes.classList.add("out-right");
                    break;
                case 2: oDes.classList.add("out-bottom");
                    break;
                case 3: oDes.classList.add("out-left");
                    break;
            }
            // oDes.style.display = "none";
        }
    }
    //遮罩层移动
    function move(e,ele){
        var w = ele.offsetWidth;
        var h = ele.offsetHeight;
        var x = (e.offsetX - w / 2) * (w > h ? h / w : 1);
        var y = (e.offsetY - h / 2) * (h > w ? w / h : 1);
        var d = ((Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90)) + 3) % 4;
        return d;
    }
   
}