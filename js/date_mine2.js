//time代表着在发起Date页选择好的开始时间和结束时间，time里的第一个数组代表开始时间，第二个数组代表结束时间
//date代表选择好的日期
//people代表被邀请人的姓名（在Date发起的时候发起人填写的），people里第二个数组中，1代表不能去，2代表能去，0代表还未填写。第三个里为被邀请人的邮箱
//thisuser代表现在在这个页面上访问的人，.date_mine3.js里有需要
//all代表每个时间点能去的人的数量
var time=[
	["8:00","9:00","10:00","11:00"],
	["12:00","13:00","14:00","15:00"]
];
var date=["04-17","04-18","04-19","04-20"];
var user="3@qq.com";
var people=[
	["张子文",[1,2,1,1],"1@qq.com"],
	["教皇",[1,2,1,1],"2@qq.com"],
	["张飞",[0,0,0,0],"3@qq.com"],
	["刘新宇",[2,2,1,1],"4@qq.com"],
	["小陈",[0,0,0,0],"5@qq.com"],
	["立场兰",[0,0,0,0],"6@qq.com"]
];
var all=[0,0,0,0];
var thisuser;
$(document).ready(function(){
	
	draw(0);
	for(a in date){
		draw(1,a)//传入对应的参数
	}
	for(a in people){
		draw(2,a);//传入名字
		for(b in date){
			draw(3,a,b);//传入对应时间是否可以
		}
	}
	
	for(a in people){
		for(var i=0;i<=date.length;i++){
			if(people[a][1][i]==2)
				all[i]+=1;
			else;
		}
	}
	draw(6);
	for(a in date){
		draw(7,a);//传入对应的参数
	}
	var w=140+date.length*73;
	$(".time_calendar").css("width",w);
})
function draw(a,b,c){
	if(a==0)
		$(".time_calendar").append("<div class='empty'></div>");//画空div
	else if(a==1)
		$(".time_calendar").append("<div class='calendar_time'><p class='time_date'>"+date[b]+"</p><p class='time_time'><span>"+time[0][b]+"</span>-<span>"+time[1][b]+"</span></p></div>");//画时间div
	else if(a==2)
		$(".time_calendar").append("<div class='calendar_name'><p>"+people[b][0]+"</p></div>");//画姓名div
	else if(a==3)
		$(".time_calendar").append("<div class='calendar_result'><img src='images/result_"+people[b][1][c]+".png'></div>");//画时间确定div
	else if(a==4)
		$(".time_calendar").append("<div class='calendar_last'>选择时间</div>");//画最后决定第一个div
	else if(a==5)
		$(".time_calendar").append("<div class='calendar_decide'><input type='radio' name='decide'></div>");//画最后决定div
	else if(a==6)
		$(".time_calendar").append("<div class='calendar_last'>具体人数</div>");
	else if(a==7)
		$(".time_calendar").append("<div class='calendar_total'>"+all[b]+"</div>");
	else;
//	$(".time_calendar").append("")
}