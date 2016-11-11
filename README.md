Website
======================
https://chaunjie.github.io/page-transitions/

Introduction
======================
Transition effect of some CSS3 pages cool, you can also customize their Transition effect.

How to use this library.
=======================
Dependent libraries have these.

 - Css library: 
 
 ```
    <link rel="stylesheet" type="text/css" href="css/animations.css"/>
 ```
 - Javascript library: 

```
	<script src="./js/jquery.min.js"></script>
	<script src="js/transition.js"></script>
```
 - Html: 

```
	<div class="pt-page pt-page-4"></div>
	className .pt-page is necessary;
```
  

Options:

|Name|Type|Description|Need|
|:--|:--|:--|:--|
|$main|Object|The container of transition pages|true|
|loop|Bool|Whether the list list of transition pages can be recycledthe |false|
|callback|Function|Callback for page changed|false|

Methods:

|Name|Description|Args|
|:--|:--|:--|
|nextPage(x)|Do transition pages method|transition type(int)|
|prevPage(x)|Do transition pages method|transition type(int)|
|appendPage(html)|Append pages to main container|append content(string)|

Useage:

```
    var translate = new transition(options);
    
    translate.nextPage(x);
```

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

Transition type:

|Type|OutClass|InClass|
|:--|:--|:--|
|01|pt-page-moveToLeft|pt-page-moveFromRight|
|02|pt-page-moveToRight|pt-page-moveFromLeft|
|03|pt-page-moveToTop|pt-page-moveFromBottom|
|04|pt-page-moveToBottom|pt-page-moveFromTop|
|05|pt-page-fade|pt-page-moveFromRight pt-page-ontop|
|06|pt-page-fade|pt-page-moveFromLeft pt-page-ontop|
|07|pt-page-fade|pt-page-moveFromBottom pt-page-ontop|
|08|pt-page-fade|pt-page-moveFromTop pt-page-ontop|
|09|pt-page-moveToLeftFade|pt-page-moveFromRightFade|
|10|pt-page-moveToRightFade|pt-page-moveFromLeftFade|
|11|pt-page-moveToTopFade|pt-page-moveFromBottomFade|
|12|pt-page-moveToBottomFade|pt-page-moveFromTopFade|
|13|pt-page-moveToLeftEasing pt-page-ontop|pt-page-moveFromRight|
|14|pt-page-moveToRightEasing pt-page-ontop|pt-page-moveFromLeft|
|15|pt-page-moveToTopEasing pt-page-ontop|pt-page-moveFromBottom|
|16|pt-page-moveToBottomEasing pt-page-ontop|pt-page-moveFromTop|
|17|pt-page-scaleDown|pt-page-moveFromRight pt-page-ontop|
|18|pt-page-scaleDown|pt-page-moveFromLeft pt-page-ontop|
|19|pt-page-scaleDown|pt-page-moveFromBottom pt-page-ontop|
|20|pt-page-scaleDown|pt-page-moveFromTop pt-page-ontop|
|21|pt-page-scaleDown|pt-page-moveFromTop pt-page-ontop|
|22|pt-page-scaleDownUp|pt-page-scaleUp pt-page-delay300|
|23|pt-page-moveToLeft pt-page-ontop|pt-page-scaleUp|
|24|pt-page-moveToRight pt-page-ontop|pt-page-scaleUp|
|25|pt-page-moveToTop pt-page-ontop|pt-page-scaleUp|
|26|pt-page-moveToBottom pt-page-ontop|pt-page-scaleUp|
|27|pt-page-scaleDownCenter|pt-page-scaleUpCenter pt-page-delay400|
|28|pt-page-rotateRightSideFirst|pt-page-moveFromRight pt-page-delay200 pt-page-ontop|
|29|pt-page-rotateLeftSideFirst|pt-page-moveFromLeft pt-page-delay200 pt-page-ontop|
|30|pt-page-rotateTopSideFirst|pt-page-moveFromTop pt-page-delay200 pt-page-ontop|
|31|pt-page-rotateBottomSideFirst|pt-page-moveFromBottom pt-page-delay200 pt-page-ontop|
|32|pt-page-flipOutRight|pt-page-flipInLeft pt-page-delay500|
|33|pt-page-flipOutLeft|pt-page-flipInRight pt-page-delay500|
|34|pt-page-flipOutTop|pt-page-flipInBottom pt-page-delay500|
|35|pt-page-flipOutBottom|pt-page-flipInTop pt-page-delay500|
|36|pt-page-rotateFall pt-page-ontop|pt-page-scaleUp|
|37|pt-page-rotateOutNewspaper|pt-page-rotateInNewspaper pt-page-delay500|
|38|pt-page-rotatePushLeft|pt-page-moveFromRight|
|39|pt-page-rotatePushRight|pt-page-moveFromLeft|
|40|pt-page-rotatePushTop|pt-page-moveFromBottom|
|41|pt-page-rotatePushBottom|pt-page-moveFromTop|
|42|pt-page-rotatePushLeft|pt-page-rotatePullRight pt-page-delay180|
|43|pt-page-rotatePushRight|pt-page-rotatePullLeft pt-page-delay180|
|44|pt-page-rotatePushTop|pt-page-rotatePullBottom pt-page-delay180|
|45|pt-page-rotatePushBottom|pt-page-rotatePullTop pt-page-delay180|
|46|pt-page-rotateFoldLeft|pt-page-moveFromRightFade|
|47|pt-page-rotateFoldRight|pt-page-moveFromLeftFade|
|48|pt-page-rotateFoldTop|pt-page-moveFromBottomFade|
|49|pt-page-rotateFoldBottom|pt-page-moveFromTopFade|
|50|pt-page-moveToRightFade|pt-page-rotateUnfoldLeft|
|51|pt-page-moveToLeftFade|pt-page-rotateUnfoldRight|
|52|pt-page-moveToBottomFade|pt-page-rotateUnfoldTop|
|53|pt-page-moveToTopFade|pt-page-rotateUnfoldBottom|
|54|pt-page-rotateRoomLeftOut pt-page-ontop|pt-page-rotateRoomLeftIn|
|55|pt-page-rotateRoomRightOut pt-page-ontop|pt-page-rotateRoomRightIn|
|56|pt-page-rotateRoomTopOut pt-page-ontop|pt-page-rotateRoomTopIn|
|57|pt-page-rotateRoomBottomOut pt-page-ontop|pt-page-rotateRoomBottomIn|
|58|pt-page-rotateCubeLeftOut pt-page-ontop|pt-page-rotateCubeLeftIn|
|59|pt-page-rotateCubeRightOut pt-page-ontop|pt-page-rotateCubeRightIn|
|60|pt-page-rotateCubeTopOut pt-page-ontop|pt-page-rotateCubeTopIn|
|61|pt-page-rotateCubeBottomOut pt-page-ontop|pt-page-rotateCubeBottomIn|
|62|pt-page-rotateCarouselLeftOut pt-page-ontop|pt-page-rotateCarouselLeftIn|
|63|pt-page-rotateCarouselRightOut pt-page-ontop|pt-page-rotateCarouselRightIn|
|64|pt-page-rotateCarouselTopOut pt-page-ontop|pt-page-rotateCarouselTopIn|
|65|pt-page-rotateCarouselBottomOut pt-page-ontop|pt-page-rotateCarouselBottomIn|
|66|pt-page-rotateSidesOut|pt-page-rotateSidesIn pt-page-delay200|
|67|pt-page-rotateSlideOut|pt-page-rotateSlideIn|
