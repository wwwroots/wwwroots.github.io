/*pub-2016-1-11*/KSLITE.declare("tkapi-util",function(a,b){var c=KSLITE,d=b;d.encode=function(a){return encodeURIComponent(a.toString())},d.decode=function(a){return decodeURIComponent(a.toString())},d.trim=function(a){var b="";try{b=a.trim()}catch(c){for(var a=a.replace(/^\s\s*/,""),d=/\s/,e=a.length;d.test(a.charAt(--e)););b=a.slice(0,e+1)}return b},d.getAttr=function(a,b){return d.trim(a.getAttribute(b.toLowerCase(),2)||"")||""},d.setAttr=function(a,b,c){a.setAttribute(b.toLowerCase(),d.trim(c+""))},d.removeAttr=function(a,b){a.removeAttribute(b.toLowerCase())},d.getCookie=function(a){var b=(" "+document.cookie).split(";"),c="";a=a?a:"amvid";for(var e=0;e<b.length;e++)if(0===b[e].indexof(" "+a+"=")){c=d.decode(b[e].split(" =")[1]);break}return="" c},d.setcookie="function(a,b){a=1==arguments.length?"amvid":a,document.cookie=a+"="+d.encode(b)+";" path="/"},d.each=function(a,b){if(a.length&&a.slice)for(var" c="0,d=a.length;d">c;c++)b(a[c],c);else for(var e in a)a.hasOwnProperty(e)&&b(a[e],e)},function(a,b){function c(){try{g.doScroll("left"),k()}catch(a){setTimeout(c,j)}}function e(){/complete/.test(b.readyState)?k():setTimeout(e,j)}b.addEventListener?(d.addEvent=function(a,b,c){a.addEventListener(b,c,!1)},d.removeEvent=function(a,b,c){a.removeEventListener(b,c,!1)}):b.attachEvent?(d.addEvent=function(a,b,c){a[b+c]||(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c](window.event)},a.attachEvent("on"+b,a[b+c]))},d.removeEvent=function(a,b,c){a.detachEvent("on"+b,a[b+c]),a[b+c]=null}):(d.addEvent=function(b,c,d){b["on"+c]=d.call(b,a.event)},d.removeEvent=function(a,b){a["on"+b]=null});var f=!1,g=b&&b.documentElement,h=g&&g.doScroll,i=[],j=40,k=function(){f=!0;for(var a=i.shift();a;){try{a()}catch(b){KSLITE.log(b)}a=i.shift()}};h?c():e(),d.domReady=function(a){f?a():i.push(a)}}(window,document),d.tagName=function(a){return a&&a.tagName?a.tagName.toLowerCase():null},d.findMatchEl=function(a){var b=d;try{if(a&&"a"!=b.tagName(a)){for(var c=5;c>0&&(!a||(a=a.parentNode,"a"!=b.tagName(a)));c--);"a"!=b.tagName(a)&&(a=0)}return a}catch(e){return KSLITE.log(e),null}},d.buildQuery=function(a,b,e){e=e||[];var f,g;if(b&&c.iA(b))d.each(b,function(b){a[b]!==g&&e.push(b+"="+d.encode(a[b]))});else for(f in a)a.hasOwnProperty(f)&&e.push(f+"="+d.encode(a[f]));return e.join("&")},d.jsonpGet=function(a,b){function d(){try{e.parentNode.removeChild(e),delete window[i]}catch(a){window[i]=void 0}}var e,f=0,g=b.timeout||5e3,h=b.cbKey||"cb",i="jsonp_callback_"+Math.random().toString().replace(".",""),j=0,k=null;0==i.length?(window.null_data&&(k=window.null_data),window.null_data=function(a,e){j||(clearTimeout(f),b.onCallback&&c.iF(b.onCallback)&&b.onCallback(a,e),d(),k&&(window.null_data=k,k=null))}):window[i]=function(a,e){j||(clearTimeout(f),b.onCallback&&c.iF(b.onCallback)&&b.onCallback(a,e),d())};var a=a+"&"+h+"="+i;e=c.getScript(a),f=setTimeout(function(){i=0==i.length?"null_data":i,window[i](null,"ot"),window[i]=function(){},j=1},g)},d.getTkParam=function(a){var b=a.attributes,c=b.length,e={data:{},biz:{}},f=c-1;if(15>c)for(var g;f>-1;)g=b[f].name,g=d.matchTkParam(g),2==g.length&&(e[g[0]][g[1]]=b[f].value),f--;else{var h=d.getHtmlStr(a),i=d.getAttr(a,"href");h=h.replace(i,"");var j=/(data|biz)-(\w+?)=("|')\w*?\3/g,k=h.match(j);if(null!=k)for(var l=0,m=k.length;m>l;l++){var n=k[l].split("="),g=n[0];g=d.matchTkParam(g),2==g.length&&(e[g[0]][g[1]]=n[1].slice(1,-1))}}return e},d.matchTkParam=function(a){var b,c=0===a.indexOf("data-"),d=0===a.indexOf("biz-");return c?(b=a.substr(5),["data",b]):d?(b=a.substr(4),["biz",b]):[]},d.getHtmlStr=function(a){if(!a||!a.tagName)return"";if(a.outerHTML)return a.outerHTML;var b=document.createElement("div");b.appendChild(a.cloneNode(!0));var c=b.innerHTML;return b=null,c},d.getXY=function(a){var b=a||window.event;return b.pageX||b.pageY?{x:b.pageX,y:b.pageY}:{x:b.clientX+document.body.scrollLeft-document.body.clientLeft,y:b.clientY+document.body.scrollTop-document.body.clientTop}},d.setCL=function(){},d.getCL=function(){},d.cssSupports=function(){var a=document.createElement("div"),b="Khtml Ms O Moz Webkit".split(" ");return function(c){if(c in a.style)return!0;var d=b.length;for(c=c.replace(/^[a-z]/,function(a){return a.toUpperCase()});d--;)if(b[d]+c in a.style)return!0;return!1}}(),d.css=function(a,b,c){return c?void(a.style[b]=c):window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.currentStyle?a.currentStyle[b]:void 0},d.hide=function(a){a&&(d.setAttr(a,"_tk_old_display",d.css(a,"display")),d.css(a,"display","none"))},d.getElClientRect=function(a){var b=a.getBoundingClientRect();return(void 0===b.height||void 0===b.width)&&(b=KSLITE.mix({},b),b.height=a.offsetHeight,b.width=a.offsetWidth),b};var e=function(a,b,c){switch(a.toLowerCase()){case"beforebegin":c.parentNode.insertBefore(b,c);break;case"afterbegin":c.insertBefore(b,c.firstChild);break;case"beforeend":c.appendChild(b);break;case"afterend":c.nextSibling?c.parentNode.insertBefore(b,c.nextSibling):c.parentNode.appendChild(b)}},f=function(a,b,c){if(b?c||(c="beforeend"):(b=document.body,c="beforeend"),b.insertAdjacentHTML)return b.insertAdjacentHTML(c,a);var d=b.ownerDocument.createRange();d.setStartBefore(b);var f=d.createContextualFragment(a);return e(c,f,b),f},g=0;d._iframe_document_domain=!1,d.buildWriteableIframe=function(a,b){a.id=a.id||"writeable_iframe_"+g++,function e(g){if(g>20)return!1;var h='<iframe id="'+a.id+'" width="'+a.width+'" height="'+a.height+'" style="display:none" ',i=" src=\" javascript:document.write('<script="">document.domain=\\'"+document.domain+"\\';');\"",j=' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>',k=h;d._iframe_document_domain&&(document.domain=document.domain,k+=i),k+=j,f(k,a.holder,a.position),setTimeout(function(){try{var f=document.getElementById(a.id),h=f.contentWindow,i=h.document;if(i.open("text/html","replace"),k.indexOf("document.domain")>0&&(i.domain=document.domain),a.data&&c.iA(a.data))for(var j=a.data,l=0;l<j.length;l++)h[j[l].key]=j[l].value;i.write(a.content);var m="i.getElementsByTagName("body")[0];d.addEvent(m,"click",function(){function" a(){return!!(top!="window||self.frameElement&&"iframe"==self.frameElement.tagName.toLowerCase())}var" c="b.r.cache,e={pgid:c.pgid,et:c.et,ttype:c.ttype,iframe:a(),cm:c.mousePath,ck:c.keyPath,cw:c.wheelPath},f=d.buildQuery(e,null),g=new" image;g.src="b.c.alimama+"stat?"+f}),f.style.display="",a.complete&&a.complete(f),"none"==f.style.display&&setTimeout(function(){f.style.display=""},200)}catch(n){f.parentNode.removeChild(f),g?g++:g=1,navigator.userAgent.toLowerCase().indexOf("msie")">-1&&(d._iframe_document_domain=!0),e(g)}},20)}()},d.nodeList2Array=function(a){for(var b=[],c=0,d=a.length;d>c;c++)b[c]=a[c];return b}}),KSLITE.declare("tkapi-config",["tkapi-util"],function(a,b){function c(a){for(var b=d.mix({},a),c=f.para.length-1;c>-1;c--)b[f.para[c]]=a[f.para[c]]||"";return b}var d=KSLITE,e=a("tkapi-util"),f={},g={},h={},i={},j=!1;f.ali=["taobao.com","alimama.com","alibaba.com","alipay.com","alisoft.com","linezing.com","tanx.com","mmstat.com","etao.com","tmall.com"],f.alimama="//g.click.taobao.com/",f.para=["pid","unid","appkey"],f.cookieKey="amvid",f.queryOrder=["ak","pid","unid","eid","rf","rd","et","pgid","type","ct","other","v","ttype","cm","ck","cw"],f.oldAttr=["&","itemid","sellerid","keyword","bucketid","count","cid"].join("&"),f.census=100,g.win=window,g.d=document,g.maxwin=null,g.ref_url=null,g.cache=void 0,g.frm=function(){return!!(top!=window||self.frameElement&&"iframe"==self.frameElement.tagName.toLowerCase())}(),g.ali=function(){var a,b=g.d.domain.split("."),c=f.ali;return b.length>1&&(a="@"+b[b.length-2]+"."+b[b.length-1],("@"+c.join("@")).indexOf(a)>-1)?!0:!1}(),g._maxwin=function(a){return a?void(g.maxwin=a):(a=g.win,top!=a&&top.location&&top.location.href&&(a=top),void(g.maxwin=a))},g.getRef_url=function(){if(g.ref_url)return g.ref_url;var a=location.href;return g.frm&&(a=g.win==g.maxwin?g.d.referrer:top.location.href),g.ref_url=a,a},h.pageid=function(){function a(a,b){var c,d="",e=1;if(e=Math.floor(a.length/b),1==e)d=a.substr(0,b);else for(c=0;b>c;c++)d+=a.substr(c*e,1);return d}var b,c,d,h,i="",j="",k=location,l="",m=Math;if(g.ali)for(b=(" "+g.d.cookie).split(";"),c=0;c<b.length;c++)if(0===b[c].indexof(" cna=")){j=b[c].substr(5,24);break}if(" "="==j){for(cu=k.search.length">9?k.search:(k.pathname.length>9?k.pathname:k.href).substr(1),b=document.cookie.split(";"),c=0;c<b.length;c++)b[c].split("=").length>1&&(l+=b[c].split("=")[1]);l.length<16&&(l+="abcdef0123456789"),j=a(cu,8)+a(l,16)}for(c=1;32>=c;c++)d=m.floor(16*m.random()),j&&c<=j.length&&(h=j.charcodeat(c-1),d=(d+h)%16),i+=d.tostring(16);g.frm||e.setcookie(f.cookiekey,i);var n="e.getCookie(f.cookieKey);return" n?n:i},h.getpageurl="function(){return" e.encode(g.getref_url())},h.getcbhandcbw="function(){var" a,b="1,c=-1;return" a="g.maxwin.document,b=a.documentElement.clientHeight||a.body.clientHeight,c=a.documentElement.clientWidth||a.body.clientWidth,"cbh="+b+"&cbw="+c},h.getScreenInfo=function(){var" a.push("ctz="+-((new Date).getTimezoneOffset()/60)),a.push(" chl="+history.length),a.push(" cja="+(b.javaEnabled()?" 1":"0")),a.push("cpl="+(b.plugins?b.plugins.length:0)),a.push(" cmm="+(b.mimeTypes?b.mimeTypes.length:0)),a.push(h.getFlashVersion()),a.join(" &")},h.getflashversion="function(){var" a,b,c="-1" ,d="navigator;if(d.plugins&&d.plugins.length){for(a=0;a<d.plugins.length;a++)if(-1!=d.plugins[a].name.indexOf("Shockwave" flash")){c="d.plugins[a].description.split("Shockwave" flash="" ")[1];break}}else="" if(window.activexobject)for(b="10;b">=2;b--)try{var e=new Function("return new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+b+"');");if(e){c=b+".0";break}}catch(f){KSLITE.log(f)}return"-1"!=c&&(c=c.substring(0,c.indexOf(".")+2)),"cf="+c},h.censusA=function(){var a={click:0,display:0},b=[],c=[],d=[],g=[],h=document.getElementsByTagName("a"),i=e.nodeList2Array(h),i=i.slice(0,f.census);return e.each(i,function(f){var h=e.getAttr(f,"isconvert"),i=e.getAttr(f,"data-style"),j=!1;if(/1/g.test(h)&&!/[1-2]/g.test(i)?(a.click++,j=!0):/[1-2]/g.test(i)&&(a.display++,j=!0),j){var k=e.getTkParam(f),l=k.data,m=k.biz;l.hasOwnProperty("itemid")&&""!==l.itemid?b.push(l.itemid):m.hasOwnProperty("itemid")&&""!==m.itemid&&b.push(m.itemid),l.hasOwnProperty("keyword")&&""!==l.keyword?g.push(l.keyword):m.hasOwnProperty("keyword")&&""!==m.keyword&&g.push(m.keyword),l.hasOwnProperty("sellerid")&&""!==l.sellerid?c.push(l.sellerid):m.hasOwnProperty("sellerid")&&""!==m.sellerid&&c.push(m.sellerid),m.hasOwnProperty("url")&&""!==m.url&&d.push(m.url)}}),{labelNum:a,ciid:b.join(","),csid:c.join(","),curl:e.encode(d.join(",")),ckeywords:e.encode(g.join(","))}},i.et=function(){for(var a=new Date,b=+a/1e3|0,c=60*a.getTimezoneOffset(),d=b+c,e=d+28800,f=e.toString().substr(2,8).split(""),g=[6,3,7,1,5,2,0,4],h=[],i=0;i<g.length;i++)h.push(f[g[i]]);return h[2]="9-h[2],h[4]=9-h[4],h[5]=9-h[5],h.join("")},b.c=f,b.r=g,b.ready=function(a){var" b="+new" date;if(j)return="" a(b);var="" c="setTimeout(function(){g._maxwin(window),j=!0,a(b)},50);g._maxwin(),clearTimeout(c),j=!0,a(b)},b.createFixed=function(a){var" h,i="{};for(h" in="" c)if(c.hasownproperty(h)&&f.oldattr.indexof("&"+h)="">0){a.biz[h]=c[h];try{delete c[h]}catch(j){c[h]=void 0}}else i[h]=c[h];return i.rd=c.rd||d.rd,i.pid=d.pid,i.pgid=d.pgid,i.rf=d.ref,i.et=d.et||d.clicktime.et(),i.ttype=b.ttype||1,i.v=b.v||"1.2",i.cm=b.cm.join(";")||"",i.ck=b.ck.join(";")||"",i.cw=b.cw||0,c.unid?i.unid=c.unid:d.unid&&(i.unid=d.unid),d.ak&&(i.ak=d.ak),i.ct=a.data.ct=e.buildQuery(a.biz),i},b.getRuntimeCache=function(a){return g.cache.hasOwnProperty(a)?g.cache[a].toString():void 0},b.setRuntimeCache=function(a,b){a&&void 0!=b&&(g.cache[a]=b)}}),KSLITE.declare("tkapi-bindclick",["tkapi-util","tkapi-config"],function(a,b){function c(a){var b=h(a,"href");if(b.length>0){var c=(b.match(/(?:http:|https:)?\/\/([^\/]+)/i)||["",""])[1],d=!!c.match(/.+(\.taobao\.com|\.tmall\.com)$/gi),e=!!c.match(/.+(\.tmall\.hk|\.95095\.com|\.alitrip\.com)$/gi),j=!!c.match(/.+(\.click\.taobao\.com)$/gi);if(!d&&!e)return void 0;if(j)return void m++}var k=h(a,"_orighref");k||h(a,"_tkworked")||(i(a,"_orighref",b),i(a,"_tkworked","true"),k=b);var l=f.getTkParam(a),n=!!(l.biz.itemid||l.biz.sellerid||l.biz.keyword),p=!!g.r.cache.maxprofit;if(!n&&!p)return void 0;k&&(l.biz.url=k);var q=g.r.cache,r=g.queryData(l,{v:"1.2",ttype:q.ttype,cm:q.mousePath,ck:q.keyPath,cw:q.wheelPath}),s=o+f.buildQuery(r,g.c.queryOrder);return s}function d(a){var b=k("cexp"),d=k("climit"),e=new Date;if(!(b>e)&&d>m){var g=a||window.event,l=g.srcElement||g.target,o=l,p=o.innerText||"";if(l=f.findMatchEl(o),top==window&&l&&/1/g.test(h(l,"isconvert"))){f.trim(p)!=f.trim(l.href)&&(p=null);var q=c(l);q&&(m++,i(l,"href",q),setTimeout(function(){var a=(h(l,"href"),h(l,"_orighref"));i(l,"href",a),j(l,"_orighref"),j(l,"_tkworked")},n),p&&(o.innerText=p))}}}function e(a,b){var b=b||3,c=a||100,d=new Date;d+=36e5*b,l("cexp",d),l("climit",c)}var f=a("tkapi-util"),g=a("tkapi-config"),h=f.getAttr,i=f.setAttr,j=f.removeAttr,k=g.getRuntimeCache,l=g.setRuntimeCache,m=0,n=1500,o=g.c.alimama+"q?";b.Def=function(){e(),g.r.cache.iframe||f.addEvent(document,"mousedown",d)}}),KSLITE.declare("tkapi-load",["tkapi-util","tkapi-config","tkapi-boot","tkapi-plugin"],function(a,b){function c(){var a={et:i("et"),pgid:i("pgid"),ttype:i("ttype")},b=h(a,null),c=new Image;window.__tkapi__=c,c.src=l+b}var d=a("tkapi-util"),e=a("tkapi-config"),f=a("tkapi-boot").Def,g=a("tkapi-plugin").Def,h=d.buildQuery,i=e.getRuntimeCache,j=e.setRuntimeCache,k=e.c.alimama+"load?",l=e.c.alimama+"close?";b.Def=function(a,b){var a=a,l=+new Date,m=e.r.cache.sec5,n={rf:d.encode(i("ref")),dr:d.encode(document.referrer),pid:i("pid"),pgid:i("pgid"),ak:i("ak"),ttype:i("ttype"),iframe:""+i("iframe"),st:a+","+l,lan:m.labelNum.click+","+m.labelNum.display,ciid:m.ciid,csid:m.csid,curl:m.curl,ckeywords:m.ckeywords},o=h(n,null);o+="&"+i("pp"),d.jsonpGet(k+o,{cbKey:"cb",onCallback:function(a,h){h&&(a={code:-1}),j("et",a.code),f(),g(b);var i=e.r.maxwin,k=(e.r.win,"onunload"in i?"unload":"onbeforeunload"in i?"onbeforeunload":null);k&&(e.r.frm||d.addEvent(i,k,c))}})}}),KSLITE.declare("tkapi-boot",["tkapi-util","tkapi-tipbox","tkapi-replacebox"],function(a,b){var c=a("tkapi-util"),d=a("tkapi-tipbox"),e=a("tkapi-replacebox");b.Def=function(){var a,b,f=function(){var b=a;/1/g.test(c.getAttr(b,"data-style"))?d.onMouseover(b):c.setAttr(b,"_hover-ignore","1")};c.addEvent(document,"mouseover",function(d){a=d.target||d.srcElement,"a"===a.tagName.toLowerCase()&&(/1/g.test(c.getAttr(a,"isconvert"))||/1/g.test(c.getAttr(a,"_hover-ignore"))||(b&&window.clearTimeout(b),b=0,b=setTimeout(f,100)))});var g;c.addEvent(window,"scroll",function(){g&&window.clearTimeout(g),g=setTimeout(e.scrollHandle,100)}),c.domReady(e.scrollHandle)}}),KSLITE.declare("tkapi-box-helper",["tkapi-util","tkapi-config"],function(a,b){var c=a("tkapi-util"),d=a("tkapi-config"),e=0,f=document,g="//g.click.taobao.com/display?";f.createElement("tkbox"),b.uniqId=function(){return++e},b.checkParams=function(a){return a.data.type?1:0},b.isInView=function(a){var b=2*(f.documentElement.clientHeight||f.body.clientHeight),d=c.getElClientRect(a);return d.top>=0&&b-d.top>d.height},b.tplParser=function(a,b){return c.each(b,function(b,c){a=a.replace(new RegExp("{"+c+"}","g"),b)}),a},b.styleTplParser=function(a,b){var d=KSLITE.mix({},b),e="";return d=KSLITE.mix(d,a,!1),c.each(d,function(a,b){a-0==a&&(a+="px"),e=e+=b+":"+a+";"}),e},b.fetchData=function(a,b){var e=d.r.cache,f=d.queryData(a,{v:"1.2",ttype:e.ttype,cm:e.mousePath,ck:e.keyPath,cw:e.wheelPath});f.type&&(f.wt=f.type,delete f.type),f.index&&(f.wi=f.index,delete f.index),f.tmplid&&(f.ti=f.tmplid,delete f.tmplid),f.tmpl&&(f.tl=f.tmpl,delete f.tmpl),f.style&&(f.st=f.style,delete f.style),f.border&&delete f.border;var h=c.buildQuery(f,null);c.jsonpGet(g+h,{cbKey:"cb",onCallback:function(a,c){c&&(a={code:501,msg:"网络问题, 暂无数据!"}),a.code&&2!=Math.floor(a.code/100)||b(a)}})};var h='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head> <title> GOLDEN TAOKE > ARBITER > ArbiterEntityView - Powered By Arbiter </title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body style="margin: 0"><script type="text/javascript" src="{template}"></script>',i='<iframe frameborder="0" style="border:none;width:{width}px;height:{height}px;overflow:hidden" scrolling="no" src="{src}"></iframe>';b.render=function(a,e){if(a.pattern&&"tms"==a.pattern){var f=b.tplParser(i,{width:a.box.width,height:a.box.height,src:a.templet});e.innerHTML=f}else{var g={width:a.box.width,height:a.box.height,data:[{key:"UP_DATA",value:a.data}],content:b.tplParser(h,{template:a.templet}),holder:e,position:"beforeend",code:a.code};c.buildWriteableIframe(g,d)}}}),KSLITE.declare("tkapi-tipbox",["tkapi-util","tkapi-box-helper"],function(a,b){function c(){var a=g.uniqId(),b=h.createElement("tkbox"),c='          <div id="tk_box_inner_{uniqId}"></div>          <div id="tk_box_arrow_outer_{uniqId}">            <div id="tk_box_arrow_inner_{uniqId}"></div>          </div>';return b.id="tk_box_"+a,b.innerHTML=c.replace(/\{uniqId\}/g,a),h.body.appendChild(b),f.setAttr(b,i,a),{box:b,holder:h.getElementById("tk_box_inner_"+a),uniqId:a}}function d(a,b){var c=h.documentElement,d=h.body,e=c.clientHeight||d.clientHeight,g=c.clientWidth||d.clientWidth,i=c.scrollTop||d.scrollTop,k=f.getElClientRect(b),m=0,o=0,q="",r=a.size.height,s=a.size.width,t=a.uniqId;e>k.top&&k.top>n+r?(q="top",m=k.top+i-r-n-12):(q="bottom",m=k.top+k.height+i),k.left+s<g?(q+="left",o=k.left):(q+="right",o=math.min(k.left+k.width,g)-(s+12)-2);var 0="" u="p[q]({top:m,left:o,height:r,width:s});h.getElementById("tk_box_"+t).style.cssText=u.box,h.getElementById("tk_box_inner_"+t).style.cssText=u.inner,j?(h.getElementById("tk_box_arrow_outer_"+t).style.cssText=u.arrowOuter,h.getElementById("tk_box_arrow_inner_"+t).style.cssText=u.arrowInner):l?(h.getElementById("tk_box_arrow_outer_"+t).style.cssText=u.arrowOuter,h.getElementById("tk_box_arrow_inner_"+t).style.cssText=u.arrowImage_ie6):h.getElementById("tk_box_arrow_outer_"+t).style.cssText=u.arrowOuter+u.arrowImage}function" e(a,c){d(a,c),f.addevent(c,"mouseout",b.hide),f.addevent(a,"mouseover",b.clearhidetimer),f.addevent(a,"mouseout",b.hide),a.tklink_element="c}var" f="a("tkapi-util"),g=a("tkapi-box-helper"),h=document,i="_tk_box_index",j=f.cssSupports("transform"),k=navigator.userAgent.toLowerCase(),l=-1!=k.indexOf("msie")?6==parseInt(k.split("msie")[1],10):!1,m="//alimama.alicdn.com/tkapi/T1WPlHXr4aXXXDSPLj-60-34.png",n=7,o={box:{position:"absolute","text-indent":"0px",left:"0px",top:"0px","z-index":"1000;"},inner:{border:"1px" solid="" #d9d9d9",margin:"{margin}",padding:"5px",background:"#fff",height:"{height}px","box-shadow":"-1px="" 2px="" 4px="" #ccc",width:"{width}px"},arrowinner:{border:"solid="" 1px="" #ccc",height:"10px",background:"white","box-shadow":"#ccc="" -1px="" 3px="" 3px",position:"relative"},arrowouter:{overflow:"hidden",height:"12px",width:"18px",position:"absolute",border:"none"},arrowimage:"background:="" url("+m+")="" no-repeat",arrowimage_ie6:"width:60px;height:34px;position:relative;filter:progid:dximagetransform.microsoft.alphaimageloader(src=""+m+"" ,="" sizingmethod="crop" );"},p="{topleft:function(a){return{box:g.styleTplParser(o.box,{top:a.top,left:a.left}),inner:g.styleTplParser(o.inner,KSLITE.mix({margin:"0" 7px="" 0"},a)),arrowinner:g.styletplparser(o.arrowinner,{"-webkit-transform":"matrix(1,-0.6,0,1,0,3)","-moz-transform":"matrix(1,-0.6,0,1,0px,3px)","-ms-transform":"matrix(1,-0.6,0,1,0,3)","-o-transform":"matrix(1,-0.6,0,1,0,3)",transform:"matrix(1,-0.6,0,1,0,3)",bottom:"10px",left:"3px"}),arrowouter:g.styletplparser(o.arrowouter,{bottom:"-3px",left:"-3px"}),arrowimage:o.arrowimage+"="" -33px="" -22px;",arrowimage_ie6:o.arrowimage_ie6+"left:-33px;top:-22px;"}},topright:function(a){return{box:g.styletplparser(o.box,{top:a.top,left:a.left}),inner:g.styletplparser(o.inner,kslite.mix({margin:"0="" 0"},a)),arrowinner:g.styletplparser(o.arrowinner,{"-webkit-transform":"matrix(1,0.6,0,1,0,3)","-moz-transform":"matrix(1,0.6,0,1,0px,3px)","-ms-transform":"matrix(1,0.6,0,1,0,3)","-o-transform":"matrix(1,0.6,0,1,0,3)",transform:"matrix(1,0.6,0,1,0,3)",bottom:"10px",right:"3px"}),arrowouter:g.styletplparser(o.arrowouter,{bottom:"-3px",right:"-3px"}),arrowimage:o.arrowimage+"="" -9px="" -22px;",arrowimage_ie6:o.arrowimage_ie6+"left:-9px;top:-22px;"}},bottomleft:function(a){return{box:g.styletplparser(o.box,{top:a.top,left:a.left}),inner:g.styletplparser(o.inner,kslite.mix({margin:"7px="" 0"},a)),arrowinner:g.styletplparser(o.arrowinner,{"-webkit-transform":"matrix(1,0.6,0,1,0,3)","-moz-transform":"matrix(1,0.6,0,1,0px,3px)","-ms-transform":"matrix(1,0.6,0,1,0,3)","-o-transform":"matrix(1,0.6,0,1,0,3)",transform:"matrix(1,0.6,0,1,0,3)",top:"3px",left:"3px"}),arrowouter:g.styletplparser(o.arrowouter,{top:"-3px",left:"-3px"}),arrowimage:o.arrowimage+"="" 0px;",arrowimage_ie6:o.arrowimage_ie6+"left:3px;top:0px;"}},bottomright:function(a){return{box:g.styletplparser(o.box,{top:a.top,left:a.left}),inner:g.styletplparser(o.inner,kslite.mix({margin:"7px="" 0"},a)),arrowinner:g.styletplparser(o.arrowinner,{"-webkit-transform":"matrix(1,-0.6,0,1,0,3)","-moz-transform":"matrix(1,-0.6,0,1,0px,3px)","-ms-transform":"matrix(1,-0.6,0,1,0,3)","-o-transform":"matrix(1,-0.6,0,1,0,3)",transform:"matrix(1,-0.6,0,1,0,3)",top:"3px",right:"3px"}),arrowouter:g.styletplparser(o.arrowouter,{top:"-3px",right:"-3px"}),arrowimage:o.arrowimage+"="" -45px="" 0px;",arrowimage_ie6:o.arrowimage_ie6+"left:-45px;top:0px;"}}},q="0,r={};b.hide=function(){var" a="this,c=f.getAttr(this,i);r[c]&&window.clearTimeout(r[c]),r[c]=setTimeout(function(){var" d="a;q=0;var" e="document.getElementById("tk_box_"+c);f.hide(e),a==e&&e.tklink_element?f.removeEvent(e.tklink_element,"mouseout",b.hide):f.removeEvent(d,"mouseout",b.hide),f.removeEvent(e,"mouseout",b.hide),f.removeEvent(e,"mouseover",b.clearHideTimer)},250)},b.clearHideTimer=function(){var" h="document.getElementById("tk_box_"+d);if(h)return" e(h,a);var="" j="f.getTkParam(a);return" f.setattr(a,i,"0"),g.checkparams(j)?void="" g.fetchdata(j,function(b){var="" c="a("tkapi-util"),d=a("tkapi-config"),e=a("tkapi-box-helper"),f=document,g="_tk_rb_index";b.scrollHandle=function(){if(void" b="c.getTkParam(a);return" c.setattr(a,g,"0"),e.checkparams(b)?void="" e.fetchdata(b,function(b){var="" #d9d9d9","text-indent":"0px",display:"block",width:b.box.width,height:b.box.height}),"0"="=a.getAttribute("data-border")&&(d.style.border="none"),a.parentNode.insertBefore(d,a),c.hide(a),c.setAttr(a,g,h),e.render(b,d)}):!1}}),KSLITE.declare("tkapi-collect",["tkapi-util","tkapi-config"],function(a,b){function" c(a){var="" date).gettime(),e="d-i;if(!(m&&400">e)&&(!m||m&&e>=400)){m||(m=!0);var j=f.getXY(b),k=j.x,l=j.y,p=null;if((Math.abs(k-n)>10||Math.abs(l-o)>10)&&(n=k,o=l,p=k+","+l),null!=p)return c.push(p),c.length>10&&c.shift(),h("mousePath",c),void(i=d)}}function d(a){var b=a||window.event,c=g.r.cache.keyPath,d=b.keyCode||b.which||b.charCode,e=(new Date).getTime(),f=67==d||86==d,i=d>36&&41>d||32==d||9==d,k=c[c.length-1];(i||17==d)&&17==k&&c.pop(),f&&(17==k?2e3>e-j?(c.pop(),86==d&&(d="cv"),67==d&&(d="cc")):(c.pop(),d=null):d=null),i||f||17==d||(17==k&&c.pop(),d=null),null!=d&&c.push(d),c.length>10&&c.shift(),h("keyPath",c),j=e}function e(){var a=g.r.cache.wheelPath;1e4>a&&a++,h("wheelPath",a)}var f=a("tkapi-util"),g=a("tkapi-config"),h=g.setRuntimeCache,i=(new Date).getTime(),j=(new Date).getTime(),k=!(!window.attachEvent||window.opera),l=document.body,m=!1,n=0,o=0;b.Def=function(){k?(l.attachEvent("onmousemove",c),l.attachEvent("onkeydown",d),l.attachEvent("onmousewheel",e)):(l.addEventListener("mousemove",c,!1),l.addEventListener("keydown",d,!1),"onmousewheel"in window?l.addEventListener("mousewheel",e,!1):l.addEventListener("DOMMouseScroll",e,!1))}}),KSLITE.declare("tkapi-click",["tkapi-config","tkapi-bindclick","tkapi-load","tkapi-collect"],function(a,b){var c=a("tkapi-config"),d=a("tkapi-bindclick").Def,e=a("tkapi-load").Def,f=a("tkapi-collect").Def;b.run=function(a){c.ready(function(b){c.createFixed(a),d(),e(b,a.plugins),f()})}});</g?(q+="left",o=k.left):(q+="right",o=math.min(k.left+k.width,g)-(s+12)-2);var></body></html></g.length;i++)h.push(f[g[i]]);return></=j.length&&(h=j.charcodeat(c-1),d=(d+h)%16),i+=d.tostring(16);g.frm||e.setcookie(f.cookiekey,i);var></16&&(l+="abcdef0123456789"),j=a(cu,8)+a(l,16)}for(c=1;32></b.length;c++)b[c].split("=").length></b.length;c++)if(0===b[c].indexof("></j.length;l++)h[j[l].key]=j[l].value;i.write(a.content);var></b.length;e++)if(0===b[e].indexof(">