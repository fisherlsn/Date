$(document).ready(function(){
	$(".add").click(function(){
		var a=$(this);
		$(".invite_detail").append("<div class='clr'></div><div class='friendname'><input></div><div class='friendemail'><input></div>");
		$(".invite_detail").append(a);
	})	
})