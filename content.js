"use strict";!(function() {
    // 监听消息(接收消息)，并处理反馈(一次性消息:one-time requests)
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        //console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
        if(request.cmd == 'test') {
            sendResponse("ok");
        }else {
            sendResponse('操作已完成！');
        }
    });

    // 监听消息(接收消息)，并处理反馈(长效消息:long-lived connections)
    chrome.runtime.onConnect.addListener(function(port) {
        console.log(port.name == "con1");
        port.onMessage.addListener(function(msg) {
            if(msg.cmd == "mycmd")
                port.postMessage({recmd: "remycmd"});
            else if (msg.cmd == "mycmd2")
                port.postMessage({recmd: "remycmd2"});
            else if (msg.cmd == "mycmd3")
                port.postMessage({recmd: "remycmd3"});
        });
    });

/*
    //从content script发送给background：一次性消息（one-time requests）
    chrome.runtime.sendMessage({cmd: "mycmd"}, function(response) {
        console.log(response);
    });

    //发送消息：长效消息
    var port = chrome.runtime.connect({name: "con1"});
    port.postMessage({cmd: "mycmd"});
    port.onMessage.addListener(function(msg){
        if (msg.recmd == "remycmd")
            port.postMessage({cmd: "mycmd2"});
        else if (msg.recmd == "remycmd2")
            port.postMessage({cmd: "mycmd3"});
    });


    // 向页面注入JS
    function injectCustomJs(jsPath) {
        jsPath = jsPath || 'inject.js';
        var temp = document.createElement('script');
        temp.setAttribute('type', 'text/javascript');
        temp.src = chrome.extension.getURL(jsPath);
        temp.onload = function() {
            // 放在页面不好看，执行完后移除掉
            this.parentNode.removeChild(this);
        };
        document.head.appendChild(temp);
    };
*/



})();
