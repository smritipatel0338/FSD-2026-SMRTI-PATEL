function ADD(){
    let num1=getElementById("t1").value;
    let num2=getElementById("t2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let final=num1+num2;
    document.getElementById("b1").innerHTML="final";    
}