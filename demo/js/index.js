/**
 * Created by xudao on 16/11/11.
 */
$('.music').on('tap',function(){
    $(this).toggleClass('play');
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

var config = {
    0: ['fadeIn', 'fadeIn'],
    1: ['slideRight', 'slideLeft', 'zoomIn'],
    2: ['slideUp', 'slideDown'],
    3: ['heartBeat', 'heartBeat'],
    4: ['rollInRight', 'rollInLeft'],
    5: ['rollInRight']
};

var translate = new transition({
    $main: $('#pt-main'),
    loop: true,
    callback: function (index) {
        $('.pt-page').eq(index).find('.part').each(function(i, element){
            (function(i, element, index){
                var className = config[index][i];
                element = $(element);
                if(element.hasClass(className)){
                    element.show().removeClass(className).addClass(className);
                }else{
                    element.show().addClass(className);
                }
            })(i, element, index)
        });
    }
});

$('.pt-page').on('swipeUp', function (e) {
    //19:20,31:30,40:41,44:45,48:49,53:52,56:57,60:61
    translate.nextPage(56);
    setTimeout(function(){
        //$('.part').hide();
        $(this).find('.part').hide();
    }.bind(this),500);

}).on('swipeDown', function (e) {
    translate.prevPage(57);
    setTimeout(function(){
        $(this).find('.part').hide();
    }.bind(this),500);
});

$(document).on('touchstart', function(e){
    e.preventDefault();
});
