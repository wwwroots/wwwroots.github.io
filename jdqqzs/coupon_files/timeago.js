(function() {
  var TimeAgo;

  TimeAgo = (function() {

    function TimeAgo(element, options) {
      this.startInterval = 60000;
      this.init(element, options);
    }

    TimeAgo.prototype.init = function(element, options) {
      this.$element = $(element);
      this.options = $.extend({}, $.fn.timeago.defaults, options);
      this.updateTime();
      return this.startTimer();
    };

    TimeAgo.prototype.startTimer = function() {
      var self;
      self = this;
      return this.interval = setInterval((function() {
        return self.refresh();
      }), this.startInterval);
    };

    TimeAgo.prototype.stopTimer = function() {
      return clearInterval(this.interval);
    };

    TimeAgo.prototype.restartTimer = function() {
      this.stopTimer();
      return this.startTimer();
    };

    TimeAgo.prototype.refresh = function() {
      this.updateTime();
      return this.updateInterval();
    };

    TimeAgo.prototype.updateTime = function() {
      var self;
      self = this;
      return this.$element.findAndSelf(this.options.selector).each(function() {
        var timeAgoInWords;
        timeAgoInWords = self.timeAgoInWords($(this).attr(self.options.attr));
        return $(this).html(timeAgoInWords);
      });
    };

    TimeAgo.prototype.updateInterval = function() {
      var filter, newestTime, newestTimeInMinutes, newestTimeSrc;
      if (this.$element.findAndSelf(this.options.selector).length > 0) {
        if (this.options.dir === "up") {
          filter = ":first";
        } else if (this.options.dir === "down") {
          filter = ":last";
        }
        newestTimeSrc = this.$element.findAndSelf(this.options.selector).filter(filter).attr(this.options.attr);
        newestTime = this.parse(newestTimeSrc);
        newestTimeInMinutes = this.getTimeDistanceInMinutes(newestTime);
        if (newestTimeInMinutes >= 0 && newestTimeInMinutes <= 44="" &&="" this.startinterval="" !="=" 60000)="" {="" return="" this.restarttimer();="" }="" else="" if="" (newesttimeinminutes="">= 45 && newestTimeInMinutes <= 89="" 60000="" &&="" this.startinterval="" !="=" *="" 22)="" {="" 22;="" return="" this.restarttimer();="" }="" else="" if="" (newesttimeinminutes="">= 90 && newestTimeInMinutes <= 2519="" 60000="" &&="" this.startinterval="" !="=" *="" 30)="" {="" 30;="" return="" this.restarttimer();="" }="" else="" if="" (newesttimeinminutes="">= 2520 && this.startInterval !== 60000 * 60 * 12) {
          this.startInterval = 60000 * 60 * 12;
          return this.restartTimer();
        }
      }
    };

    TimeAgo.prototype.timeAgoInWords = function(timeString) {
      var absolutTime;
      absolutTime = this.parse(timeString);
      return this.distanceOfTimeInWords(absolutTime) + (this.options.lang.suffix);
    };

    TimeAgo.prototype.parse = function(iso8601) {
      var timeStr;
      timeStr = $.trim(iso8601);
      timeStr = timeStr.replace(/\.\d\d\d+/, "");
      timeStr = timeStr.replace(/-/, "/").replace(/-/, "/");
      timeStr = timeStr.replace(/T/, " ").replace(/Z/, " UTC");
      timeStr = timeStr.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
      return new Date(timeStr);
    };

    TimeAgo.prototype.getTimeDistanceInMinutes = function(absolutTime) {
      var timeDistance;
      timeDistance = new Date().getTime() - absolutTime.getTime();
      return Math.round((Math.abs(timeDistance) / 1000) / 60);
    };

    TimeAgo.prototype.distanceOfTimeInWords = function(absolutTime) {
      var dim;
      dim = this.getTimeDistanceInMinutes(absolutTime);
      if (dim === 0) {
        return "" + this.options.lang.prefixes.lt + " " + this.options.lang.units.minute;
      } else if (dim === 1) {
        return "1 " + this.options.lang.units.minute;
      } else if (dim >= 2 && dim <= 44)="" {="" return="" ""="" +="" dim="" "="" this.options.lang.units.minutes;="" }="" else="" if="" (dim="">= 45 && dim <= 1="" 89)="" {="" return="" ""="" +="" this.options.lang.prefixes.about="" "="" this.options.lang.units.hour;="" }="" else="" if="" (dim="">= 90 && dim <= 1439)="" {="" return="" ""="" +="" this.options.lang.prefixes.about="" "="" (math.round(dim="" 60))="" this.options.lang.units.hours;="" }="" else="" if="" (dim="">= 1440 && dim <= 2519)="" {="" return="" "1="" "="" +="" this.options.lang.units.day;="" }="" else="" if="" (dim="">= 2520 && dim <= 43199)="" {="" return="" ""="" +="" (math.round(dim="" 1440))="" "="" this.options.lang.units.days;="" }="" else="" if="" (dim="">= 43200 && dim <= 1="" 86399)="" {="" return="" ""="" +="" this.options.lang.prefixes.about="" "="" this.options.lang.units.month;="" }="" else="" if="" (dim="">= 86400 && dim <= 525599)="" {="" return="" ""="" +="" (math.round(dim="" 43200))="" "="" this.options.lang.units.months;="" }="" else="" if="" (dim="">= 525600 && dim <= 1="" 655199)="" {="" return="" ""="" +="" this.options.lang.prefixes.about="" "="" this.options.lang.units.year;="" }="" else="" if="" (dim="">= 655200 && dim <= 1="" 914399)="" {="" return="" ""="" +="" this.options.lang.prefixes.over="" "="" this.options.lang.units.year;="" }="" else="" if="" (dim="">= 914400 && dim </=></=></=></=></=></=></=></=></=></=></=></=>