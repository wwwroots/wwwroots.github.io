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
   
   for(var i=0; i<of.length;i++){ 200="" $(of[i]).mouseover(function(){="" $(this).css('background-color','#f9f8f9');="" $(this).mouseout(function(){="" $(this).css('background-color','#fff');="" });="" };="" })();="" (function(){="" var="" oa="$('.conNav" li.active="" a');="" oi="$('.conNav" i');="" owidth="oA.width()+40-oI.width();" oi.css('left',owidth="" 2);="" bopt="" (function="" ()="" {="" abtn="$('.bopt" .btn');="" oheight2="32px" ;="" abtn.each(function="" (index)="" $(this).click(function="" if="" ($(this).parent().prev().css('height')="=" oheight2)="" $(this).parent().parent().parent().parent().prev().prev().children().eq(1).css('display',="" 'none');="" oheight="$(this).parent().prev().children().eq(0).height();" $(this).parent().prev().animate({="" 'height':="" },="" 500);="" }="" else="" minheight="0;" ocon="$('.content');" oconrh="$('.content" aside').height()="" +="" 350;="" windowsheight="$(window).height();" (windowsheight="" -=""> oConRH) {
        minHeight = windowsHeight - 200;
    }
    else {
        minHeight = oConRH;
    }

    oCon.css('min-height', minHeight);
    
})(); 



GetHotProductList();

    //ʱ��������
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
                hotProductListStr += '<a onmousedown="AddView(' + data.ProductList[i].ProductId + ', \'Title&Price&Img\')" href="/Home/Detail/' + data.ProductList[i].ProductId + '" class="clear" target="_blank"> <img class="fl" src="' + data.ProductList[i].Pic + '"> <span class="fl"><i class="bcolor1">' + data.ProductList[i].Price + '</i> ' + data.ProductList[i].Title + '</span> </a>'
            }
            $("#HotProductList").html(hotProductListStr);
        },
        error: function () {
        }
    });
}

//��תҳ��
function ChangePageIndex(pageIndex) {
    $("#PageIndex").val(pageIndex);
    Submit();
}

//ͼƬ�ȱ�������
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
        Ratio = (wRatio <= hratio="" ?="" wratio="" :="" hratio);="" }="" else="" if="" (wratio=""> 1 || hRatio > 1) {
        Ratio = (wRatio <= hratio="" ?="" wratio="" :="" hratio);="" }="" w="w" *="" ratio;="" h="h" objimg.height="h;" objimg.width="w;" function="" ispc()="" {="" var="" useragentinfo="navigator.userAgent;" agents="["Android"," "iphone",="" "symbianos",="" "windows="" phone",="" "ipad",="" "ipod"];="" flag="true;" for="" (var="" v="0;" <="" agents.length;="" v++)="" if="" (useragentinfo.indexof(agents[v])=""> 0) {
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


</=></=></of.length;i++){>