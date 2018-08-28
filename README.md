# CRXbasic
Chrome扩展是用于扩充Chrome浏览器功能的程序，Chrome应用是以Chrome为平台运行的程序，两者似乎并没有太明确的区别，甚至有些程序既可以设计成Chrome扩展也可以设计成Chrome应用。

Chrome扩展主要用于对浏览器功能的增强，它更强调与浏览器相结合。比如Chrome扩展可以在浏览器的工具栏和地址栏中显示图标，它可以更改用户当前浏览的网页中的内容，也可以更改浏览器代理服务器的设置等等。

Chrome应用更强调是独立的程序，你可以不打开Chrome浏览器而运行这些程序。同时这些程序可以调用更加底层的系统接口，比如串口、USB、本地文件读写等等。同时Chrome应用可以拥有样式更加自由的独立窗口，而Chrome扩展的界面只能限定在浏览器窗口中。

Chrome扩展是一系列文件的集合，这些文件包括HTML文件、CSS样式文件、JavaScript脚本文件、图片等静态文件以及manifest.json。

扩展被安装后，Chrome就会读取扩展中的manifest.json文件。这个文件的文件名固定为manifest.json，内容是按照一定格式描述的扩展相关信息，如扩展名称、版本、更新地址、请求的权限、扩展的UI界面入口等等。这样Chrome就可以知道在浏览器中如何呈现这个扩展，以及这个扩展如何同用户进行交互。

### 学习资料来源
http://www.ituring.com.cn/book/1421

http://open.se.360.cn/open/extension_dev/overview.html

https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html

https://jingyan.baidu.com/season/39867
