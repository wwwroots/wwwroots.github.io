// JavaScript Document

$(function(){
   
//conMain
(function(){
   var oF=$('.conMain');
   var oFH=oF.height();
   var oS=$('.conBtn');
   var oSH=oS.height();
   var oHeight=0;
   
   oHeight=(oFH-oSH)/2;
   oS.css('margin-top',oHeight);
   
   for(var i=0; i<oF.length;i++){
       $(oF[i]).mouseover(function(){
           $(this).css('background-color','#f9f8f9');
           $(this).mouseout(function(){
               $(this).css('background-color','#fff');
           });
       });
           
   };
    
         
})();   
   
(function(){
    var oA=$('.conNav li.active a');
    var oI=$('.conNav li.active i');
    
    oWidth=oA.width()+40-oI.width();
    
    oI.css('left',oWidth/2);
    
})(); 
   
//bopt
(function () {
    var aBtn = $('.bopt .btn');
    var oHeight2 = "32px";

    aBtn.each(function (index) {
        $(this).click(function () {
            if ($(this).parent().prev().css('height') == oHeight2) {
                $(this).parent().parent().parent().parent().prev().prev().children().eq(1).css('display', 'none');
                var oHeight = $(this).parent().prev().children().eq(0).height();
                $(this).parent().prev().animate({ 'height': oHeight }, 500);
            } else {
                $(this).parent().prev().animate({ 'height': oHeight2 }, 500);

            };
        });
    });


})();

    (function () {
        var minHeight = 0;
    var oCon=$('.content');
    var oConRH = $('.content aside').height() + 350;

    var windowsHeight = $(window).height();

    if (windowsHeight - 200 > oConRH) {
        minHeight = windowsHeight - 200;
    }
    else {
        minHeight = oConRH;
    }

    oCon.css('min-height', minHeight);
    
})(); 



GetHotProductList();

    //时间差插件
$('.timeago').timeago();

    //scroll
var navH = $(".bsider5").offset().top - 78;
    //alert(navH);
$(window).scroll(function () {
    var scroH = $(this).scrollTop();

    //alert(offsetTop);

    if (scroH > navH) {
        $(".bsider5").css({
            "position": "fixed",
            "top": "78px",
            "width": "248px",
        });
    } else if (scroH < navH) {
        $(".bsider5").css({
            "position": "static"
        });
    }
});

});


//AddView
function AddView(productId, action) {
    $.ajax({
        type: 'POST',
        url: '/Home/AddView',
        data: {
            productId: productId,
            action: action,
        },

        dataType: 'json',
        success: function (data) {
            if (data.result == "true") {
            } else {
            }
        },
        error: function () {
        }
    });
}

//GetHotProductList
function GetHotProductList() {
    $.ajax({
        type: 'POST',
        url: '/Home/GetHotProduct',
        dataType: 'json',
        success: function (data) {
            var hotProductListStr = "";
            for (var i = 0; i < data.ProductList.length; i++)
            {
                hotProductListStr += '<a onmousedown="AddView(' + data.ProductList[i].ProductId + ', \'Title&Price&Img\')" href="/Home/Detail/' + data.ProductList[i].ProductId + '" class="clear" target="_blank"> <img class="fl" src="' + data.ProductList[i].Pic + '" /> <span class="fl"><i class="bcolor1">' + data.ProductList[i].Price + '</i> ' + data.ProductList[i].Title + '</span> </a>'
            }
            $("#HotProductList").html(hotProductListStr);
        },
        error: function () {
        }
    });
}

//跳转页码
function ChangePageIndex(pageIndex) {
    $("#PageIndex").val(pageIndex);
    Submit();
}

//图片等比例缩放
function AutoResizeImage(maxWidth, maxHeight, objImg) {
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if (maxWidth == 0 && maxHeight == 0) {
        Ratio = 1;
    } else if (maxWidth == 0) {//
        if (hRatio < 1) Ratio = hRatio;
    } else if (maxHeight == 0) {
        if (wRatio < 1) Ratio = wRatio;
    } else if (wRatio < 1 || hRatio < 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
    }
    else if (wRatio > 1 || hRatio > 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
    }
    w = w * Ratio;
    h = h * Ratio;
    objImg.height = h;
    objImg.width = w;
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

//search
(function(){
    var oDiv=$('.search-box');
    oDiv.hover(function(){
        $(this).addClass('search-box2');
    },function(){
        $(this).removeClass('search-box2');
    });
})();


