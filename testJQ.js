 $(function(){

var firstQ = $( "input[name='q1']" );
var secondQ = $( "input[name='q2']" );
var thirdQ = $( "input[name='q3']" );
var fourthQ = $( "input[name='q4']" );
var fifthQ = $( "input[name='q5']" );

$("#testresult").click(function() { 
    testResult(); 
    });

 
var result = 0;

function testResult() {
	result = 0;
	if ($("input[name='q1']").eq(0).prop("checked")) {
		result += 2;
	};
	
	if ($("input[name='q2']").eq(2).prop("checked")) {
		result += 2;
	};
	
	if ($("input[name='q3']").eq(3).prop("checked")) {
		result += 2;
	};

    
       if (!($("input[name='q4']").eq(0).prop("checked")) && ($("input[name='q4']").eq(1).prop("checked")) && !($("input[name='q4']").eq(2).prop("checked")) && ($("input[name='q4']").eq(3).prop("checked"))) {
        result +=2;   
    };    
   
   
   if (($("input[name='q5']").eq(0).prop("checked")) && ($("input[name='q5']").eq(1).prop("checked")) && !($("input[name='q5']").eq(2).prop("checked")) && !($("input[name='q5']").eq(3).prop("checked"))) {
         result +=2;  
    };

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}
});