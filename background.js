"use strict";!(function() {
    var city = 'city';
    var ip = 'myip';
    var handlers = {
        init: function() {
            this.getIP1();
            //this.getIP2();
        },
        //异步AJAX函数
        httpRequest: function(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText);
                }
            }
            xhr.send();
        },
        //读取IP信息
        getIP1: function() {
            this.httpRequest('http://ip.chinaz.com/getip.aspx', function(data) {
	            var arr = data.match(/'.+?'/g);
                localStorage[city] = arr[1].slice(1,-1) || 'beijing';
                localStorage[ip] = arr[0].slice(1,-1) || '127.0.0.1';
            });
        },
        //读取IP信息
        getIP2: function() {
            this.httpRequest('http://2018.ip138.com/ic.asp', function(data) {
	            var arr = data.match(/来自：[^<]*/);
                localStorage[city] = arr[0].substring(3) || 'beijing';
	            arr = data.match(/(?:\d{1,3}\.){3}\d{1,3}/g);
                localStorage[ip] = arr[0] || '127.0.0.1';
            });
        }

    };
    handlers.init();
})();
