var DuoJinLian = {
	takeover : 0,	//take over all click events;
	analyse : 0,	//use duomai analyse system
	ignore : '',
        only : '',
	isIE : false,

	url : '',
	base : 'http://c.duomai.com/track.php?',
	euid : '',
	sid : 0,
	site_id : 0,
	aid : 0,
	t : '',
	djl : '',

	shengchenglianjie : function(url,inner)
	{
		if(url == this.url && this.djl != '')
		{
			return this.djl;
		}
		if(!this.isIgnore(url))
		{
			return this.prepare(url);
		}
		return url;
	},
	prepare : function(u,inner)
	{
        u = u.replace(/(^\s*)|(\s*$)/g,'');
		this.aid = 0;
		this.site_id = 0;
		this.sid = 0;
		this.t = '';
		this.url = u;
		this.djl = '';
		u = u.toLowerCase();

		if(u.indexOf('duomai.com') != -1)
		{
			var i = u.indexOf('&t=');
			if(i != -1 && i != u.length - 3)
			{
				var s = u.substring(i + 3);
				i = s.indexOf('&');
				this.t = decodeURIComponent(i == -1 ? s : s.substring(0,i));
			}
			i = u.indexOf('&aid=');
			if(i != -1 && i != u.length - 5)
			{
				var s = u.substring(i + 5);
				i = s.indexOf('&');
				this.aid = decodeURIComponent(i == -1 ? s : s.substring(0,i));
			}
		}
		else
		{
			//var c = new RegExp('/([^/]*?)/?','');
			//var r = ('/' + u + '/').split(c);
			var r = u.split('/');
			if(r[0] == 'http:' || r[0] == 'https:')
			{
				var d = r[2];
				while(d != this.getDomain(d))
				{
					if(DuoMaiSiterAds[d] != null)
					{
						this.aid = DuoMaiSiterAds[d];
						this.t = this.url;
						break;
					}
    				d = this.getDomain(d);
                            }
			}
			else if(r[0] == 'file:')
			{

			}
		}
		if(!this.t && !this.aid)
		{
			return this.url;
		}
		else
		{
			var takeover = true;
			if(this.only != '')
			{
				takeover = false;
				var ig = this.only.split(',');
				for(var i = 0;i < ig.length;i++)
				{
					if(u.indexOf(ig[i]) != -1 && ig[i] != '')
					{
						takeover = true;
					}
				}
			}

			if(takeover)
			{
				this.aid = this.aid.toString();
				if(parseInt(this.aid))
				{	
					this.djl = this.base + 't=' + encodeURIComponent(this.t) + '&aid=' + this.aid + (typeof(DuoMaiLinkID) == 'undefined' ? '' : '&lid=' + DuoMaiLinkID) + (typeof(DuoMaiSID) == 'undefined' ? '' : '&sid=' + DuoMaiSID) + (typeof(DuoMaiSiteID) == 'undefined' ? '':'&site_id=' + DuoMaiSiteID) + '&euid=' + encodeURIComponent(this.euid);//+ '&inner=' + encodeURIComponent(inner);
				}
				else if(this.aid.indexOf('http://') != -1)
				{
					this.djl = this.aid;
					this.djl = this.djl.replace('ReplacEEUID' , this.euid);
					this.djl = this.djl.replace('ReplacEURL' , this.url);
				}
				else
				{	
					this.djl = this.url + (this.url.indexOf('?') == -1 ? '?' : '&') + 'tag=' + this.aid + '&linkCode=ur2&camp=536&creative=3200'
				}
				return this.djl;
			}
			return this.url;
		}
	},
	getDomain : function(o)
	{
		if(o.indexOf('.') != -1)
		{
			return o.substring(o.indexOf('.')+1,o.length);
		}
		else
		{
			return o;
		}
	},
	isIgnore : function(u)
	{
		if(this.ignore != '')
		{
			var ig = this.ignore.split(',');
			for(var i = 0;i < ig.length;i++)
			{
				if(u.indexOf(ig[i]) != -1 && ig[i] != '')
				{
					return true;
				}
			}
		}
		return false;
	},

	tongji : function()
	{
		this.analyse = 1;
	},
	duzhan : function()
	{
		this.takeover = 1;
	},
	hulue : function(o)
	{
		this.ignore = o;
	},
	fankuibiaoqian :function(o)
	{
		this.euid = o;
	},
	zhizuo : function(o)
	{
		this.only = o;
		
		//eqf
		if(typeof md5jjl == 'function')
		{
			if(eqfSites == null) eqfSites = {};
			if(eqfSites.d == null) eqfSites.d = {};
			var ig = this.only.split(',');
			for(var i = 0;i < ig.length;i++)
			{
				var d = md5jjl(ig[i],8);
				eqfSites.d[d] = '';
			}
		}
	},

        findClickObj:function(o)
        {
            for(var d = 0;d < 10; d++)
            {
                if(typeof o == 'object')
                {
                    var t = o.tagName.toLowerCase();
                    if ('a' == t || 'area' == t) {
                        return o;
                    }
                    if ('body' == t) {
                        break;
                    }
                    o= o.parentNode;
                }
                else
                {
                    break;
                }
            }
            return null;
        },
	run : function()
	{

		var click = function(e)
		{
			e = e || window.event;
			var t = DuoJinLian.findClickObj(e.srcElement || e.target);
			if(t)
			{
				var o = t.href;
				var djl = DuoJinLian.shengchenglianjie(o,t.innerHTML);
				if(o != djl)
				{
					//back
					if(t.target == '_blank')
					{
						setTimeout(function() {t.href = ' ' + o },1000);
					}
					if(document.getElementsByTagName('base')[0] != undefined)
					{
						if(document.getElementsByTagName('base')[0].target == '_blank')
						{
							setTimeout(function() {t.href = ' ' + o},1000);
						}
					}
					t.href = ' ' +  djl;
				}
			}
		}

		if(this.takeover)
		{
			var anchor = document.getElementsByTagName("A");
			for(var i = 0;i < anchor.length;i++)
			{
				anchor[i].onclick= "";
			}
		}
		if(document.attachEvent)
		{
			this.isIE = true;
			document.attachEvent('onclick',click);
		}
		else if(document.addEventListener)
		{
			document.addEventListener('click',click,true); //notice true
		}
		return false;

	},
	_init_ : function()
	{
		//this.base = document.location.protocol+'://'+(typeof(DuoMaiSiteID) == 'undefined' ? '':DuoMaiSiteID)+'c.duomai.com/track.php?';
		this.base = 'https://'+(typeof(DuoMaiSiteID) == 'undefined' ? '':DuoMaiSiteID)+'c.duomai.com/track.php?';
		return this;
	},
	_test_ : function()
	{
		var anchor = document.getElementsByTagName("A");
		for(var i = 0;i < anchor.length;i++)
		{
			anchor[i].setAttribute('href' ,' ' + this.shengchenglianjie(anchor[i].href,anchor[i].innerHTML));
		}
	}
};