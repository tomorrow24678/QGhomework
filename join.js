'use strict';
window.onload=function(){
    var button=document.getElementById("btn");
    var i = 61;
    btn.onclick = function(){
        var times=setInterval(clock,1000);
        alert("QG520");
    }
    function clock(){
    if(i != 1){
        btn.innerText=i-1+"s";
        i=i-1;}
    else{
        btn.innerText="获取验证码";
    clearInterval(times);}
    }

    var lis = document.getElementById("yinn").getElementsByTagName("li");
    var inputs = document.getElementById("joinn").getElementsByTagName("input");
    var imgs = document.getElementById("joinn").getElementsByTagName("img");
    inputs[0].onblur = function(){
        if(inputs[0].value == "")
        {
            lis[0].style.visibility = "visible";
            imgs[1].style.visibility = "hidden";
            lis[0].innerText = "内容不能为空";
        }
        else if(inputs[0].value == "123")
        {
            lis[0].style.visibility = "visible";
            imgs[1].style.visibility = "hidden";
            lis[0].innerText = "该用户名已经被注册过啦";
        }
        else{
            lis[0].style.visibility = "hidden";
            imgs[1].style.visibility = "visible";
        }
    }

     inputs[1].onblur = function(){
        if(inputs[1].value == "")
        {
            lis[1].style.visibility = "visible";
            imgs[2].style.visibility = "hidden";
            lis[1].innerText = "内容不能为空";
        }
        else if(inputs[1].value.length<8)
        {
            lis[1].style.visibility = "visible";
            imgs[2].style.visibility = "hidden";
            lis[1].innerText = "密码不能少于八位数";
        }
        else if(inputs[1].value.length>12)
        {
            lis[1].style.visibility = "visible";
            imgs[2].style.visibility = "hidden";
            lis[1].innerText = "密码不能多于十二位数";
        }
        else
        {
            lis[1].style.visibility = "hidden";
            imgs[2].style.visibility = "visible";
        }
    }

    inputs[2].onblur = function(){
        if(inputs[2].value != inputs[1].value)
        {
            lis[2].style.visibility = "visible";
            lis[2].innerText = "请再次正确输入你的密码";
            imgs[3].style.visibility = "hidden";

        }
        else if (inputs[2].value == "") {
            lis[2].style.visibility = "visible";
            lis[2].innerText = "内容不能为空";
            imgs[3].style.visibility = "hidden";

        }
        else
        {
            lis[2].style.visibility = "hidden";
            imgs[3].style.visibility = "visible";
        }
}

    inputs[3].onblur = function(){
        if(inputs[3].value.length != 11 || isNaN(this.value))
        {
            lis[3].style.visibility = "visible";
            lis[3].innerText = "请输入正确的手机号";
            imgs[4].style.visibility = "hidden";

        }
        else
        {
            lis[3].style.visibility = "hidden";
            imgs[4].style.visibility = "visible";
        }
}
}
