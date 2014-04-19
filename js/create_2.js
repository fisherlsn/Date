var exist= new Array();
var append= true;
$(document).ready(function(){
	var aaa = new Kalendae(document.body, {
		attachTo:document.getElementById('calendar'),
		months:1,
		mode:'multiple',
		direction:'future',
		subscribe: {
			'date-clicked': function (date) {
			appenddiv(date);
			console.log(date);
		}}
	});
	$(".date_choose .step .next").click(function(){
			$(".date_choose").css("display","none");
			$(".time_choose").css("display","block");
			console.log(exist);
			for(a in exist){
				
				$(".date_selected").append("<div style='clear:both' class='"+exist[a]+"'><p>"+exist[a]+"<img src='images/date_choose_close.png'></p></div><select class='"+exist[a]+"'><option value ='0:00'>0:00</option><option value ='1:00'>1:00</option><option value='2:00'>2:00</option><option value='3:00'>3:00</option><option value ='4:00'>4:00</option><option value ='5:00'>5:00</option><option value='6:00'>6:00</option><option value='7:00'>7:00</option><option value ='8:00'>8:00</option><option value ='9:00'>9:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option><option value ='12:00'>12:00</option><option value ='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option><option value ='16:00'>16:00</option><option value ='17'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option><option value ='20:00'>20:00</option><option value ='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option><option value='24:00'>24:00</option></select><select class='end"+exist[a]+"'><option value ='0:00'>0:00</option><option value ='1:00'>1:00</option><option value='2:00'>2:00</option><option value='3:00'>3:00</option><option value ='4:00'>4:00</option><option value ='5:00'>5:00</option><option value='6:00'>6:00</option><option value='7:00'>7:00</option><option value ='8:00'>8:00</option><option value ='9:00'>9:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option><option value ='12'>12:00</option><option value ='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option><option value ='16:00'>16:00</option><option value ='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option><option value ='20:00'>20:00</option><option value ='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option><option value='24:00'>24:00</option></select>");
				
			}
			$(".time_choose .create_detail .date_selected div").click(function(){
					var thisclass=$(this).attr("class");
					$("."+thisclass).remove();
			})

		
	})
	$(".date_choose .step .previous").click(function(){
		window.location.href="create_1.html";
	})
	$(".time_choose .step .next").click(function(){
		var time=new Array;
		for(a in exist){
			time[a]=new Array;
			time[a][0]=$("select."+exist[a]).val();
			time[a][1]=$("select.end"+exist[a]).val();
			exist[a]=exist[a].split("-");
			exist[a]=exist[a][1]+"-"+exist[a][2];
		}
		console.log(time);
		var num=exist.length;
		for(a in exist){
			$("form").append("<input type='hidden' name='time"+a+1+"' value='"+exist[a]+" "+time[a][0]+"-"+time[a][1]+"'>");
		}
		$("form").append("<input type='hidden' name='timecount' value='"+num+"'>");
		$("form").submit();
		window.location.href="create_3.html";
	})
	$(".time_choose .step .previous").click(function(){
		$(".date_choose").css("display","block");
		$(".time_choose").css("display","none");
	})
})
function appenddiv(date){
	append=true;
	var newclass=date._i;
	for(a in exist){
			if(exist[a]==newclass){
				exist.splice(a,1);
				append=false;
				$("."+newclass).remove();
				break;
			}
	}

	if(append){
		$(".time_selected").append("<div class='"+newclass+"'><p>"+date._i+"<img src='images/date_choose_close.png'></p></div>");
		exist.push(newclass);
	}
	
	//console.log(exist);


	
	$(".time_selected div").click(function(){
		var thisclass=$(this).attr("class");
		//console.log(thisclass);
		$("span[data-date="+thisclass+"]").removeClass("k-selected");
		for(a in exist){
			if(exist[a]==thisclass){
				exist.splice(a,1);
				break;
			}
		}
		$(this).remove();
	})
}