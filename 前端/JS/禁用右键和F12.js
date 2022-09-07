//禁用F12开始
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        // event.keyCode = 0;
        // event.returnValue = false;
        return false;
    }
};
//禁用F12结束
//禁用右键开始
document.oncontextmenu=new Function("event.returnValue=false");
document.onselectstart=new Function("event.returnValue=false");
document.oncontextmenu=function(e){return false;}
//禁用右键结束