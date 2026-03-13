let a =prompt("enter subject 1 marks: ")
console.log(marks1)
let b =prompt("enter subject 2 marks: ")
console.log(marks2)
let c =prompt("enter subject 3 marks: ")
console.log(marks3)
function calculateResult(){
    let n = document.getElementById("subject").value;
    let total = 0;
    for(let i=0;i<=n;i++){
        let marks = parsefloat(prompt("enter subject marks" + i));
        total = total + marks;
    }
    let average = total/n;
    let grade;
    let result;
    if(average>=40){
        result = "pass";
    }
    else{
        result ="fail";
    }
    document.getElementById("result").innerHTML =
    "total marks: " + Total + "<br>" +
    "average marks: " + average.tofixed(2) + "<br>" +
    "grade: " + grade +"<br>" +
    "result: " + result;
}
