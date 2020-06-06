(function ($) {

  "use strict";

  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();


  /* showcase Slider
  =============================*/
  var owl = $(".showcase-slider");
  owl.owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    margin: 10,
    stopOnHover: true,
    autoPlay: true,
    items: 5,
    itemsDesktopSmall: [1024, 3],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
  });


  /*
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  /*
   One Page Navigation
   ========================================================================== */


  $(window).on('load', function () {

    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });

  });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
    if ($(window).width() <= 768) {
      $('.navbar-collapse .nav-link[id!="navbarDropdown"]').on('click', function (e) {
         $('.navbar-collapse').collapse('hide');
      });
    }
    else {
      $('.navbar .navbar-inverse a').off('click');
    }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));


// ==================图片懒加载
// 注意: 需要引入jQuery和underscore
$(function () {
  // 获取window的引用:
  var $window = $(window);
  // 获取包含data-src属性的img，并以jQuery对象存入数组:
  var lazyImgs = $.each($('img[data-src]').get(), function (_,item) {
    return $(item);
  });
  // 定义事件函数:
  var onScroll = function () {
    // 获取页面滚动的高度:
    var wtop = $window.scrollTop();
    // 判断是否还有未加载的img:
    if (lazyImgs.length > 0) {
      // 获取可视区域高度:
      var wheight = $window.height();
      // 存放待删除的索引:
      var loadedIndex = [];
      // 循环处理数组的每个img元素:
      $.each(lazyImgs, function ( index,item) {
        $i=$(item);
        // 判断是否在可视范围内:
        if ($i.offset().top - wtop < wheight) {
          // 设置src属性:
          $i.attr('src', $i.attr('data-src'));
          // 添加到待删除数组:
          loadedIndex.unshift(index);
        }
      });
      // 删除已处理的对象:
      $.each(loadedIndex, function (index) {
        lazyImgs.splice(index, 1);
      });
    }
  };
  $(window).on('scroll', onScroll);
  // 手动触发一次:
  onScroll();
});

// =============scrolling-nav
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

  $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top -80)
              }, 1500, "easeInOutExpo");
              return false;
          }
      }
  });

});


// ===================== end