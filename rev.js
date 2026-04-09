let newheading=document.getElementById("heading")
newheading.textcontent="dom manupulation in JS";
newheading.style.color="red";
newheading.style.fontsize="30px";

let paragraph=document.getElementByIdclassname("paragraph")
paragraph[0].innerhtml="<strong>this paragraph has been"
paragraph[0].style.color="green";
paragraph[0].font.size="20px";

let newDiv=document.getElementById("div");
newDiv.textcontent="this is created using js";
document.body.appendChild(newdiv);
