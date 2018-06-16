var imgs = document.getElementById("imgs");
var spans = document.getElementsByTagName("span");
var left = document.getElementById("left");
var right = document.getElementById("right");
var t = null;
var n = 0;

//第一种定时方法：
t = setInterval(function() {
    n++;
    n %= 9;
    imgs.style.left = n * - 500 + 'px';
    for(var i = 0; i < spans.length; i++)
    {
        spans[i].className = "";
    }
    spans[n].className = "show";
}, 1000);

//第二种定时方法：
// var t = setTimeout(function(){
//     n++;
//     n %= 9;
//     imgs.style.left = n * -500 + 'px';
//     for(var i = 0; i < spans.length; i++)
//     {
//         spans[i].className = "";
//     }
//     spans[n].className = "show";
//     if(n < 9)
//     {
//         setTimeout(arguments.callee, 1000);
//     }
// }, 1000);

function start()
{
    t = setInterval(function() {
        n++;
        n %= 9;
        imgs.style.left = n * -500 + 'px';
        for(var j = 0; j < spans.length; j++)
        {
            spans[j].className = "";
        }
        spans[n].className = "show";
    }, 1000);
}

imgs.onmousemove = function()
{
    clearInterval(t);
}

imgs.onmouseout = function()
{
    start();
}

for(var k = 0; k < spans.length; k++)
{
    spans[k].index = k;
    spans[k].onmouseover = function()
    {
        clearInterval(t);
        for(var x = 0; x < spans.length; x++)
        {
            spans[x].className = "";
        }
        this.className = "show";
        n = this.index;
        imgs.style.left = n * -500 + 'px';
    }
}

left.onclick = function()
{
    clearInterval(t);
    n++;
    n %= 9;
    imgs.style.left = n * -500 + 'px';
    for(var y = 0; y < spans.length; y++)
    {
        spans[y].className = "";
    }
    spans[n].className = "show";
}

right.onclick = function()
{
    clearInterval(t);
    n--;
    n %= 9;
    if(n < 0)
    {
        n = 8;
    }
    imgs.style.left = n * -500 + 'px';
    for(var w = 0; w < spans.length; w++)
    {
        spans[w].className = "";
    }
    spans[n].className = "show";
}






