"use strict";!(function() {
    var city = localStorage.city || 'beijing';
    var ip = localStorage.myip || '127.0.0.1';
    document.getElementById('ip_div').innerHTML = '外网IP：'+ip+'，欢迎来自 '+city+' 的朋友！';
    document.getElementById('city_div').innerHTML = "配置参数City："+city+' <b>你可以在“选项”里设置</b>';

    //选择数据文件
    document.getElementById('upfile').onchange = function(){
        fMsg();
    }
        
    // 加载数据
    document.getElementById('btn').onclick = function(){
	    var file = document.getElementById('upfile').files[0];
	    if(!file) {
		    alert('你还未选择文件，请先指定数据文件！');
	    } else {
	        //读取本地文件，以gbk编码方式输出
            var reader = new FileReader();
            reader.readAsText(file,"gbk");
            reader.onload = function(){
		        //读取完毕后输出结果
                var rst= this.result;
                var arr = rst.split(/\r?\n/);
                rst=0;
                for (var i in arr) {
                    var ary = arr[i].split(',');
                    if (rst > 0 && ary[0] != '')
                    {
			            localStorage.setItem(ary[0],ary[1]);
                    }
			        rst++;
                }
		        fMsg('本次共读取数据条数：'+rst);
            }
        }
    }

    //清空数据
    document.getElementById("rst").onclick = function(){
	    var city = localStorage.city || 'beijing';
        var ip = localStorage.myip || '127.0.0.1';
        localStorage.clear();
        localStorage.city = city;
        localStorage.myip = ip;
	    fMsg('数据已清空！');
    }

    //测试TEST
    document.getElementById("test").onclick = function(){
        fMsg('刚刚按了TEST');
        //发送消息
        sendMessageToContentScript({cmd: 'test',content: 'this msg content.'},function(remsg){
            alert('Form popup.js reback at:'+remsg);
        });
        //window.close();
    }


//以下为自定义函数

//异步AJAX函数
function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4  && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

// popup或者bg向content主动发送消息
function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}

//清除提示信息
function fMsg(data) {
    data = data || '';
    var dName = 'csv_p';
    document.getElementById(dName).innerHTML = data;
    if (data != '') {
        setTimeout(function(){
            document.getElementById(dName).innerHTML = '';
        },1000*2);
    }
}


/*
//注入JS代码
document.getElementById("test").onclick = function(){
    chrome.tabs.executeScript(null,
        {code:'alert("popup.js : test ok")'});
    //window.close();
}
//注入JS文件
document.getElementById("test").onclick = function(){
    chrome.tabs.executeScript(null,
        {file:'popup.js'});
    //window.close();
}
//注入CSS代码
document.getElementById("test").onclick = function(){
    chrome.tabs.executeScript(null,
        {code:'nav#roeoeieieeooe:{color:#red}'});
    //window.close();
}
*/




//END
})();
