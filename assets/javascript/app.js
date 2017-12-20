
$(".questions").hide();

$("#start").on("click", function(){
	$(".questions").show();
	$(".questions").append(begin.question); 
	$(".questions").append(begin.answers); 

	$("#start").hide();
})


var begin = {
	question: "Where does coffee rank as a commodity? ",
	answers: ["first ", "second ", "third ", "fourth "],
	correctAnswer: "second "
}















