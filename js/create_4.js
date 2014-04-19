var check=false;
$(document).ready(function(){
	$(".vipradio").click(function(){
		console.log(check);
		if(check){
			$(".vip").remove();
			check=!check;
		}
			
		else{
			$(".invite_detail").append("<div class='vip'><input type='radio' value='张子文'><span>张子文</span><input type='radio' value='教皇'><span>教皇</span><input type='radio' value='郑韩方'><span>郑韩方</span></div>");
			check=!check;
		}
	})
})