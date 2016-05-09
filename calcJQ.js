$(".number").click(function(){ butVal(this.value); });
$("#butequals").click(function(){ equals(); });
$("#butclear").click(function(){ clear(); });
$("#dot").click(function(){ dot(); });
$("#butneg").click(function(){ plusMinus(); });
$(".operator").click(function(){ operator(this.value); });

var calc = $('#disp');
var oper = "";
var num = "";

function butVal(z){
  calc.val(calc.val() + z) ;
}


function operator(op){
	oper = op;
	num = calc.val();
	calc.val("");
}

 
function equals(){
	rez(eval(num), eval(calc.val()), oper);
}
 
 
function rez(n1, n2, op){
	if(op == "+"){
		calc.val(n1 + n2);
	}
	else if(op == "-"){
		calc.val(n1 - n2);
	}
	else if(op == "*"){
		calc.val(n1 * n2);
	}
	else if(op == "/"){
		if(calc.val() == 0){
            calc.val("Нельзя делить на 0!");
             return;
        }
		calc.val(n1 / n2);
	}
}
 
function plusMinus(){
	calc.val(calc.val() * -1);
}

function clear(){
	calc.val("");
	num = "";
}
	 
function dot() {
		calc.val(calc.val() + ".");
}	
