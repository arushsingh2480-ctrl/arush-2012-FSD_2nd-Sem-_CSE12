
let heading=document.getElementById("heading");
let input=document.getElementById("inputtext");
let para=document.getElementById("para");
document.getElementById("changeTextBtn").onclick=function(){
    heading.innertext=input.value;
};
input.onchange=function(){
    console.log("input changed:",input.value);
};
document.getElementById("bgcolorbtn").addEventListener("click",function(){
    document.body.style.backgroundColor="lightblue"
    document.body.style.fontFamily="arial";
});
document.getElementById("fontsizebtn").addEventListener("click",function(){
    heading.style.fontSize="40px";
});
let isvisible=true;
document.getElementById("toggleparabtn").onclick=function(){
    if(isvisible){
        para.style.displat="none";
        isvisible="false";
    }
    else{
        para.style.displat="block";
        isvisible="true";
    }
};
document.getElementById("toggleparabtn").onclick=
function(){
    location.reload();
}
document.getElementById("resetbtn").onclick=function(){
    
}
heading.onmouseover=function(){
    heading.style.color="red";
};