Website
======================
https://chaunceyxu.github.io/page-transitions/

Introduction
======================
Transition effect of some CSS3 pages cool, you can also customize their Transition effect.

How to use this library.
=======================
Dependent libraries have these.

 - Css library: animations.css.
 - Javascript library: jquery and transition.js

options:

|Name|Type|Description|Need|
|:--|:--|:--|:--|
|$main|Object|The container of transition pages|true|
|$pages|Object|The list of transition pages|true|
|loop|Bool|Whether the list list of transition pages can be recycledthe |false|
|callback|Function|Callback for page changed|false|


Example：

```
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/component.css"/>
    <link rel="stylesheet" type="text/css" href="css/animations.css"/>
    <style>
        html, body {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Lato', Calibri, Arial, sans-serif;
            color: #fff;
            background: #333;
            overflow: hidden;
        }
    </style>
  </head>
  <body class="no-js">
    <div class="pt-triggers" style="display: block;">
    <button id="iterateEffects" class="pt-touch-button">显示下一页	切换</button>
	</div>
	<div id="pt-main" class="pt-perspective">
    <div class="pt-page pt-page-1"><h1><span>A collection of</	span>页面切换效果</h1></div>
    <div class="pt-page pt-page-2"><h1><span>A collection of</	span>页面切换效果</h1></div>
    <div class="pt-page pt-page-3"><h1><span>A collection of</	span>页面切换效果</h1></div>
    <div class="pt-page pt-page-4"><h1><span>A collection of</	span>页面切换效果</h1></div>
    <div class="pt-page pt-page-5"><h1><span>A collection of</	span>页面切换效果</h1></div>
    <div class="pt-page pt-page-6"><h1><span>A collection of</	span>页面切换效果</h1></div>
	</div>
	<script src="./js/jquery.min.js"></script>
	<script src="js/transition.js"></script>
	<script>
    var translate = new transition({
        $main: $('#pt-main'),
        $pages: $('#pt-main').children('div.pt-page'),
        loop: true,
        callback: function (index) {
            console.log(index);
        }
    });

    $('#iterateEffects').click(function () {
        var x = Math.ceil(Math.random() * 67);
        translate.nextPage(x);
    });
	</script>
  </body>
</html>
```


