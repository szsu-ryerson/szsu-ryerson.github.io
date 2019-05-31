var numArr=[];
var operArr=[];
var formula="";

function submit() {
	  var number = document.getElementById("input").value;
    if(number.trim()==""){
      document.getElementById("error").innerHTML="Error: Number cannot be blank. Try again.";
      return;
    } 
  
    if(number=="0" && operArr[operArr.length-1]=="/" && numArr.length!=0){
      document.getElementById("error").innerHTML="Error: Division by zero. Enter a non-zero number.";
      return;
    }
    
    if(isNaN(number)){
      document.getElementById("error").innerHTML="Error: Non-numeric character entered. Please enter a number only.";
      return;
    }

    document.getElementById("error").innerHTML="";
	numArr.push(number);
    formula=formula+number;
    document.getElementById("formula").innerHTML=formula;
    document.getElementById("operators").disabled=false;
    document.getElementById("input").disabled=true;
    document.getElementById("submit").disabled=true;
    document.getElementById("input").value="";
    document.getElementById("calculate").disabled=false;
}

function addOperator(){
    var operator = document.getElementById("operators").value;
	operArr.push(operator);
    formula=formula+operator;
    document.getElementById("formula").innerHTML=formula;
    document.getElementById("operators").disabled=true;
    document.getElementById("operators").value="Null";
    document.getElementById("input").disabled=false;
    document.getElementById("submit").disabled=false;
    document.getElementById("calculate").disabled=true;
}

function calculate(){
  var result=parseFloat(numArr[0]);
  var i;
  for(i=1;i<numArr.length;i++){
  	if(operArr[i-1]=="*"){
  		result=result*parseFloat(numArr[i]);
  	}else{
  		result=result/parseFloat(numArr[i]);
  	}
    
  }

  document.getElementById("result").value=result.toFixed(2);
}

function reset(){
  document.getElementById("result").value="";
  document.getElementById("operators").disabled=true;
  document.getElementById("operators").value="Null";
  document.getElementById("calculate").disabled=true;
  document.getElementById("input").value="";
  document.getElementById("input").disabled=false;
  document.getElementById("submit").disabled=false;
  formula="";
  document.getElementById("formula").innerHTML=formula;
  document.getElementById("error").innerHTML="";
  numArr=[];
  operArr=[];
}