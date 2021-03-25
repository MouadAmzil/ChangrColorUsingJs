var blue=document.getElementById("blue"),
    yellow=document.getElementById("yellow"),
    red=document.getElementById("red"),
    rose=document.getElementById("rose"),
    el=document.getElementById('changed');
  //  var b=0;

    blue.onclick=function(){
        const bcss=window.getComputedStyle(this);
        el.style.backgroundColor=bcss.backgroundColor;
       // el.textContent=String(bcss.backgroundColor);
       // b+=1
    } 
    yellow.onclick=function(){
        const bcss=window.getComputedStyle(this);
        el.style.backgroundColor=bcss.backgroundColor;
        //el.textContent=String(bcss.backgroundColor);b+=1
    } 
    red.onclick=function(){
        const bcss=window.getComputedStyle(this);
        el.style.backgroundColor=bcss.backgroundColor;
       // el.textContent=String(bcss.backgroundColor);b+=1
    } 
    rose.onclick=function(){
        const bcss=window.getComputedStyle(this);
        el.style.backgroundColor=bcss.backgroundColor;
       // el.textContent=String(bcss.backgroundColor).toLowerCase();b+=1;console.log(b)
    } 

//console.log(b)


















