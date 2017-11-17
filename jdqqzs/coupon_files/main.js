const _a = 'bkOf地hBxTloIv时换s间-0rg 你d已持wu存天余Pjm/更:cC.容览结，请支分SAy剩秒n#ti本aJ内的束e器浏不Np储';
const _b = '秒束剩Slh#时epJ持Pr换存aN已不间容览vgn内.本bu器tA，天C你/BTmo分ikw f余的:结更dsxI浏支Ojc地0y-储请';
const _c = 'ksySi束持u的gT间天本0地f浏l储J.vx内不#r剩 存秒容hjcbA请Ia已:o换m览B更你d器Ow余n-时结/P分Ne支C，pt';
var data = [];
var monitor = [];

function startMonitor(id) {
	if ($("#hidden" + id).val() == "1"){
		var hour = $("#txtMonitor" + id).val();
		
		if (hour== "")
		{
			alert("请输入正确的小时数，如14点即输入14");
			return;
		}
		if (hour <0 || hour >23)
		{
			alert("请输入正确的小时数，如14点即输入14");
			return;
		}
		
		$("#hidden" + id).val("2");
		$("#startMonitor" + id).text("抢券中,点击暂停");
		var state = "False";
		
		
		//获得抢券时间
		var couponTime = GetCoupontime(hour);
		monitor[id] = setInterval(function () {

			if (new Date().getTime() <= (couponTime.getTime()+10*1000) && new Date().getTime() >= (couponTime.getTime()-5*1000)){
				if (state == "False"){
					startCoupon(id);
					state = "True";
				}
			}
			else if (state == "True"){
				endCoupon(id);
				state = "False"
			}
		},1000);
	}
	else if ($("#hidden" + id).val() == "2"){
		$("#hidden" + id).val("1");
		$("#startMonitor" + id).text("定点抢");
		window["clearInterval"](monitor[id]);
	}

}

function GetCoupontime(hour){
	var d = new Date();//当前时间
	d.setHours(hour);//小时设置为9，下略
	d.setMinutes(0);
	d.setSeconds(0);
	d.setMilliseconds(0);
	return d;
}

function IsHour(hour){
    var t = new Date();
    if (t.getHours() >= 9 && t.getMinutes() >= 59 && t.getSeconds() >= 40 && t.getHours() <= 10 && t.getMinutes() <= 00 && t.getSeconds() <= 20){
        return "True";
    }
    return "False";
}

function NowIsTheHour(){
    if(IsHour() == "True" && isRequested == "False"){
        console.log(new Date());
        document.getElementById("J_authSubmit").click();
        isRequested = "True"
    }
    console.log("还没到");
}


function startCoupon(id) {
	const _a2 = _a;
	const _b2 = _b;
	const _c2 = _c;

	var _url = window[_b2[4] + _a2[10] + _b2[62] + _b2[16] + _c2[68] + _c2[4] + _c2[43] + _b2[25]][_a2[5] + _c2[27] + _a2[62] + _a2[3]];
	var number = randomNum(280, 320);
	var url = $(_a2[53] + _b2[62] + _a2[10] + _c2[7] + _c2[67] + _a2[10] + _b2[25] + id)[_b2[16] + _b2[32] + _b2[32] + _b2[13]](_c2[50] + _a2[57] + _a2[54] + _a2[57] + _c2[56] + _a2[27] + _c2[27] + _b2[4]);
	data[id] = setInterval(function () {
		const _a3 = _a;
		const _b3 = _c;
		const _c3 = _b;

		$(_a2[53] + _a2[55] + _b2[48] + _b2[13] + _c2[40] + _b2[41] + _a2[62] + id)[_a2[57] + _b2[32] + _c2[68] + _b2[13]](_a2[15] + _a2[19] + _a2[37], url);
	}, number);
	$(_a2[53] + _b2[55] + _a2[54] + _c2[40] + _b2[13] + _a2[54] + _a2[38] + _b2[42] + _a2[27] + _b2[9] + _b2[42] + _b2[25] + id)[_a2[57] + _b2[32] + _c2[68] + _a2[19]](_a2[23] + _a2[55] + _b2[55] + _b2[16] + _b2[29] + _c2[18] + _b2[8] + _a2[23], _a2[23] + _b2[44] + _a2[15] + _b2[16] + _b2[29] + _b2[4] + _b2[8] + _a2[23]);
	$(_b2[6] + _c2[63] + _c2[55] + _b2[54] + _b2[36] + _b2[42] + _c2[7] + _a2[67] + _c2[43] + _a2[52] + id)[_b2[13] + _b2[8] + _c2[45] + _a2[10] + _b2[23] + _b2[8] + _b2[33] + _a2[54] + _a2[54] + _a2[19]](_b2[54] + _c2[4] + _c2[1] + _c2[40] + _b2[29] + _c2[18] + _a2[62] + _a2[23]);
	$(_a2[53] + _b2[44] + _c2[16] + _c2[27] + _b2[16] + _b2[41] + _c2[63] + _b2[29] + _c2[43] + _b2[56] + id)[_a2[15] + _b2[5] + _b2[42] + _b2[46]]();
}

function endCoupon(id) {
	const _a4 = _c;
	const _b4 = _b;
	const _c4 = _a;

	$(_c4[53] + _c4[15] + _a4[68] + _c4[57] + _a4[27] + _a4[68] + _a4[65] + _b4[42] + _b4[30] + _a4[67] + _c4[10] + _a4[55] + id)[_c4[19] + _b4[8] + _c4[33] + _a4[43] + _b4[23] + _b4[8] + _b4[33] + _a4[68] + _a4[68] + _c4[19]](_c4[23] + _b4[44] + _c4[15] + _b4[16] + _c4[0] + _a4[18] + _b4[8] + _b4[54]);
	$(_a4[26] + _b4[8] + _c4[52] + _a4[50] + _c4[38] + _c4[10] + _a4[7] + _a4[67] + _c4[10] + _c4[52] + id)[_c4[57] + _c4[54] + _b4[32] + _a4[27]](_c4[23] + _c4[55] + _c4[15] + _c4[57] + _a4[36] + _a4[18] + _b4[8] + _c4[23], _a4[50] + _b4[44] + _b4[55] + _a4[40] + _b4[29] + _b4[4] + _a4[63] + _b4[54]);
	$(_a4[26] + _c4[55] + _a4[16] + _b4[13] + _b4[16] + _a4[45] + _c4[62] + _b4[29] + _b4[42] + _c4[7] + id)[_a4[33] + _b4[44] + _b4[54] + _c4[62]]();
	window[_a4[35] + _a4[18] + _b4[8] + _a4[40] + _a4[27] + _c4[11] + _a4[55] + _c4[54] + _a4[63] + _a4[27] + _a4[22] + _a4[40] + _a4[18]](data[id]);
}

function randomNum(minNum, maxNum) {
	const _a5 = _c;
	const _b5 = _a;
	const _c5 = _b;

	switch (arguments[_b5[9] + _c5[8] + _c5[25] + _a5[9] + _b5[54] + _c5[5]]) {
		case 1:
			return parseInt(Math[_c5[13] + _b5[57] + _a5[55] + _c5[54] + _a5[43] + _b5[33]]() * minNum + 1);
			break;
		case 2:
			return parseInt(Math[_a5[27] + _c5[16] + _a5[55] + _c5[54] + _a5[43] + _c5[41]]() * (maxNum - minNum + 1) + minNum);
			break;
		default:
			return 0;
			break;
	}
}

function checkLocalStorage() {
	const _a6 = _c;
	const _b6 = _a;
	const _c6 = _b;

	if (window[_a6[3] + _c6[32] + _c6[42] + _c6[13] + _b6[57] + _c6[24] + _c6[8]] && window[_a6[18] + _b6[10] + _c6[62] + _c6[16] + _b6[9] + _c6[3] + _c6[32] + _a6[43] + _c6[13] + _b6[57] + _c6[24] + _b6[62]] && window[_b6[9] + _b6[10] + _c6[62] + _b6[57] + _b6[9] + _b6[47] + _c6[32] + _b6[10] + _b6[19] + _b6[57] + _a6[9] + _b6[62]] instanceof Storage) {
		layui[_a6[7] + _c6[55] + _a6[63]](_b6[9] + _c6[16] + _a6[2] + _c6[8] + _b6[19], function () {
			const _a7 = _c;
			const _b7 = _b;
			const _c7 = _a;

			var layer = layui[_b6[9] + _a6[40] + _a6[2] + _a6[63] + _b6[19]];
			layer[_b6[33] + _c6[55] + _a6[9]](_b6[22] + _a6[8] + _a6[17] + _b6[41] + _a6[51] + _c6[59] + _a6[6] + _b6[56] + _b6[4] + _b6[28] + _a6[19]);
		});
	} else {
		layui[_a6[7] + _b6[15] + _a6[63]](_c6[4] + _a6[40] + _a6[2] + _c6[8] + _c6[13], function () {
			const _a8 = _a;
			const _b8 = _b;
			const _c8 = _c;

			var layer = layui[_b6[9] + _b6[57] + _a6[2] + _a6[63] + _a6[27]];
			layer[_c6[41] + _a6[1] + _a6[9]](_a6[49] + _b6[60] + _c6[58] + _b6[41] + _c6[31] + _b6[65] + _b6[45] + _b6[25] + _c6[28] + _c6[63] + _a6[30] + _b6[68] + _c6[34] + _c6[68] + _a6[48] + _b6[14] + _c6[58] + _a6[46] + _a6[51]);
		});
	}
}

// function setCoupon(id) {
	// const _a9 = _a;
	// const _b9 = _b;
	// const _c9 = _c;

	// layui[_a9[27] + _a9[15] + _b9[8]](_a9[9] + _a9[57] + _c9[2] + _c9[63] + _b9[13], function () {
		// const _a10 = _c;
		// const _b10 = _b;
		// const _c10 = _a;

		// layer[_c9[43] + _b9[9] + _c9[63] + _c9[55]]({
			// [_b9[32] + _b9[65] + _b9[9] + _a9[62]]: 1,
			// [_a9[15] + _c9[0] + _a9[55] + _c9[55]]: _b9[4] + _b9[16] + _c9[2] + _a9[27] + _a9[55] + _b9[66] + _c9[18] + _a9[57] + _b9[65] + _a9[62] + _a9[19] + _b9[66] + _a9[23] + _b9[8] + _b9[41] + _b9[42], //样式类名
			// [_b9[62] + _a9[9] + _a9[10] + _a9[15] + _b9[8] + _b9[39] + _a9[54] + _a9[52]]: 0, //不显示关闭按钮
			// [_c9[40] + _b9[25] + _a9[55] + _a9[33]]: 2,
			// [_b9[55] + _a9[5] + _a9[57] + _b9[54] + _b9[8] + _a9[38] + _c9[18] + _b9[42] + _c9[1] + _b9[8]]: true, //开启遮罩关闭
			// [_b9[62] + _c9[43] + _a9[52] + _a9[54] + _b9[8] + _c9[55] + _a9[54]]: _a9[59] + _c9[32]
		// });
	// });
// }

function countDown(time, fn) {
	const _a11 = _b;
	const _b11 = _c;
	const _c11 = _a;

	var nettime = ajaxtime();
	var rectify_time = new Date(nettime) - new Date();
	var maxtime = (new Date(time) - new Date() - rectify_time) / 1000; //剩余秒
	var timer = setInterval(function () {
		const _a12 = _a;
		const _b12 = _c;
		const _c12 = _b;

		if (maxtime >= 0) {
			var dd = parseInt(maxtime / 60 / 60 / 24, 10); //计算剩余的天数  
			var hh = parseInt(maxtime / 60 / 60 % 24, 10); //计算剩余的小时数  
			var mm = parseInt(maxtime / 60 % 60, 10); //计算剩余的分钟数  
			var ss = parseInt(maxtime % 60, 10); //计算剩余的秒数  
			hh = checkTime(hh);
			mm = checkTime(mm);
			ss = checkTime(ss);

			msg = _a11[2] + _b11[54] + _c11[13] + _b11[11] + _c11[21] + dd + _a11[35] + hh + _c11[13] + mm + _b11[61] + ss + _c11[51];
			fn(msg);
			--maxtime;
		} else {
			clearInterval(timer);
			fn(_a11[18] + _a11[52] + _b11[5]);
		}
	}, 1000);
}
function checkTime(i) {
	const _a13 = _c;
	const _b13 = _a;
	const _c13 = _b;

	if (i < 10) {
		i = _a13[14] + i;
	}
	return i;
}

var couponNumber = 99999;

function AddCoupon(){
	var title = $("#title").val();
	var couponUrl = $("#couponUrl").val();
	
	var htmlStr = '<li id="coupon'+couponNumber+'" data-url="'+couponUrl+'"><div class="box"><div class="iframe" id="iframebox'+couponNumber+'"><iframe id="iframe'+couponNumber+'" src=""></iframe></div><input type="hidden" id="hidden'+couponNumber+'" value="1"><a href="" class="title" style="font-size: 12px;margin-top: 10px;" target="_blank"><div class="title">'+title+'</div></a><div class="price"></div><a href="" class="title" style="font-size: 12px;margin-top: 10px;" target="_blank"></a></div><div class="btn"><button class="layui-btn layui-btn-small layui-btn-normal" id="startCoupon'+couponNumber+'" onclick="startCoupon('+couponNumber+')">开始抢券</button><button class="layui-btn layui-btn-small layui-btn-danger" id="endCoupon'+couponNumber+'" onclick="endCoupon('+couponNumber+')">结束抢券</button><br><br><input type="number" min="0" max="23" style="width:50px; height:28px;font-size:12px; padding:0 8px" value="0" id="txtMonitor'+couponNumber+'"><button class="layui-btn  layui-btn-small layui-btn-normal" id="startMonitor'+couponNumber+'" style="margin-left: 10px;" onclick="startMonitor('+couponNumber+')">定点抢</button></div></li>';
	$($("ul")[1]).append(htmlStr);
	couponNumber = couponNumber-1;
}

// var ajax_res;
// function ajaxtime() {
	// const _a14 = _b;
	// const _b14 = _a;
	// const _c14 = _c;

	// $[_a14[16] + _a14[61] + _c14[40] + _a14[56]]({
		// [_b14[27] + _a14[13] + _b14[9]]: _b14[5] + _b14[54] + _c14[68] + _b14[67] + _a14[55] + _c14[42] + _b14[34] + _b14[34] + _a14[16] + _b14[67] + _a14[44] + _b14[39] + _a14[62] + _b14[5] + _b14[57] + _c14[34] + _b14[55] + _c14[63] + _a14[27] + _c14[45] + _a14[8] + _b14[34] + _a14[32] + _b14[55] + _a14[41] + _a14[8] + _b14[34] + _a14[44] + _c14[55] + _b14[23] + _b14[62] + _b14[7] + _a14[38] + _a14[44] + _b14[52] + _c14[50] + _c14[63] + _b14[7],
		// [_b14[57] + _a14[55] + _b14[49] + _c14[55] + _b14[37]]: false,
		// [_c14[50] + _a14[16] + _b14[54] + _a14[16]]: "",
		// [_b14[54] + _a14[65] + _c14[67] + _c14[63]]: _c14[60] + _b14[2] + _a14[3] + _b14[8],
		// [_c14[50] + _b14[57] + _a14[32] + _b14[57] + _a14[40] + _b14[49] + _b14[67] + _b14[62]]: _c14[20] + _c14[3] + _b14[2] + _a14[17],
		// [_a14[55] + _c14[7] + _b14[37] + _a14[62] + _a14[8] + _c14[1] + _c14[1]]: function (res) {
			// const _a15 = _b;
			// const _b15 = _c;
			// const _c15 = _a;

			// ajax_res = res;
		// }
	// });
	// return ajax_res;
// }