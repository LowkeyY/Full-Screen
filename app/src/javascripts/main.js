(function () {

    // load dependencies
    var animationControl = require('./animation-control.js');

    $(document).ready(function () {
        if (window.location.pathname === '/cnvhelp/bk/index.html') { //服务器地址
        // if (window.location.pathname === '/') {
            // var bgMusic = $('audio').get(0);
            // var $btnMusic = $('.btn-music');
            var $upArrow = $('.up-arrow');

            // background music control
            // $btnMusic.click(function () {
            //     if (bgMusic.paused) {
            //         bgMusic.play();
            //         $(this).removeClass('paused');
            //     } else {
            //         bgMusic.pause();
            //         $(this).addClass('paused');
            //     }
            // });

            // init Swiper

            var swiper = new Swiper('.swiper-container', {
                mousewheelControl: true,
                effect: 'coverflow',    // slide, fade, coverflow or flip
                speed: 400,
                direction: 'vertical',
                initialSlide: $.getUrlParam('index')||0,
                autoHeight: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                fade: {
                    crossFade: false
                },
                coverflow: {
                    rotate: 100,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false     // do disable shadows for better performance
                },
                flip: {
                    limitRotation: true,
                    slideShadows: false     // do disable shadows for better performance
                },
                onInit: function (swiper) {
                    animationControl.initAnimationItems();  // get items ready for animations
                    animationControl.playAnimation(swiper); // play animations of the first slide
                },
                onTransitionStart: function (swiper) {     // on the last slide, hide .btn-swipe
                    if (swiper.activeIndex === swiper.slides.length - 1) {
                        $upArrow.hide();
                    } else {
                        $upArrow.show();
                    }
                },
                onTransitionEnd: function (swiper) {       // play animations of the current slide
                    animationControl.playAnimation(swiper);
                },
                onTouchStart: function (swiper, event) {
                   // mobile devices don't allow audios to play automatically, it has to be triggered by a user event(click / touch).
                    // if (!$btnMusic.hasClass('paused') && bgMusic.paused) {
                    //     bgMusic.play();
                    // }
                }
            });

            // hide loading animation since everything is ready
            $('.loading-overlay').slideUp();
            var startScroll, touchStart, touchCurrent;
            swiper.slides.on('touchstart', function (e) {
                startScroll = this.scrollTop;
                touchStart = e.targetTouches[0].pageY;
            });
            swiper.slides.on('touchmove', function (e) {
                touchCurrent = e.targetTouches[0].pageY;
                var touchesDiff = touchCurrent - touchStart;
                var slide = this;
                var onlyScrolling =
                    (slide.scrollHeight > slide.offsetHeight) &&
                    (
                        (touchesDiff < 0 && startScroll === 0) ||
                        (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
                        (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
                    );
                if (onlyScrolling) {
                    e.stopPropagation();
                }
            });

        }
    });
})();
