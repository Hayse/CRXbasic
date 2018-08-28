"use strict";!(function() {
    var city = localStorage.city || 'beijing';
    var ip = localStorage.myip || '127.0.0.1';
    document.getElementById('welcome').innerHTML = '外网IP：'+ip+'，欢迎来自 '+city+' 的朋友！';

    document.getElementById('city').value = city;
    
    document.getElementById('save').onclick = function() {
        localStorage.city = document.getElementById('city').value;
        var status = document.getElementById('status');
        status.innerHTML = 'Options Saved.';
        setTimeout(function() {
            status.innerHTML = '';
        },750);
    };



})();
