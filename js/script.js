

//  Title onblur
var baslik = document.title;
var yeniBaslik = "Bilişim Sektöründe Kadın Erkek Eşitliği ";
window.onblur = function(){
    document.title = yeniBaslik;
}
window.onfocus = function()
{
    document.title = baslik;
}

// ----------------
 
// menu
$('.menu-btn').on('click', function() {

    var elem = $(this),
        item = $('.menu__item'),
        active = 'is-active',
        play = 'menu__item--play';

    if (  elem.hasClass(active) ) {
        elem.removeClass(active);
        $(item.get().reverse()).each(function(i) {
            var row = $(this);
                setTimeout(function() {
                    row.removeClass(play);
            }, 50*i);
        });
    }

    else {
        elem.addClass(active);
        item.each(function(i) {
            var row = $(this);
                setTimeout(function() {
                    row.addClass(play);
            }, 50*i);
        });
    }

});
    // slider
    ( function($) {
  
        $(document).ready(function() {
          
          var s           = $('.slider'),
              sWrapper    = s.find('.slider-wrapper'),
              sItem       = s.find('.slide'),
              btn         = s.find('.slider-link'),
              sWidth      = sItem.width(),
              sCount      = sItem.length,
              slide_date  = s.find('.slide-date'),
              slide_title = s.find('.slide-title'),
              slide_text  = s.find('.slide-text'),
              slide_more  = s.find('.slide-more'),
              slide_image = s.find('.slide-image img'),
              sTotalWidth = sCount * sWidth;
          
          sWrapper.css('width', sTotalWidth);
          sWrapper.css('width', sTotalWidth);
          
          var clickCount  = 0;
          
          btn.on('click', function(e) {
            e.preventDefault();
      
            if( $(this).hasClass('next') ) {
              
              ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
            } else if ( $(this).hasClass('prev') ) {
              
              ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
            }
            TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
      
      
            //CONTENT ANIMATIONS
      
            var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
            var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
      
            TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);    
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
      
          });
                
        });
      })(jQuery);
      
      $('.overlay').addClass('overlay-blue');

// %27 
$(function () {
    'use strict';
    $('.circle').each(function() {
      $(this).animate({
        val: $(this).data('max')
      }, {
        duration:4500,
        step: function(myVal) {
          $(this).text(Math.round(myVal) + '%');
        }
      });
    });
  });

//   alanlar
$( document ).ready(function() {
    $(window).on('scroll', function () {
      var fadeInTime = 0;
  
      $('.service1').each( function(i){
  
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
  
          if( bottom_of_window > bottom_of_object/1.25 ){
  
            $(this).delay(fadeInTime).animate({'opacity':'1'},1000);
             fadeInTime = fadeInTime + 400;
          }
      });

    });
    $(function() {
      setTimeout(function() {
        $('.circle1').each(function() {
          $(this).animate({
            val: $(this).data('max')
          }, {
            duration: 14000,
            step: function(myVal) {
              $(this).text(Math.round(myVal) + '%');
            }
          });
        });
    
        $('.circle2').each(function() {
          $(this).animate({
            val: $(this).data('max')
          }, {
            duration: 14000,
            step: function(myVal) {
              $(this).text(Math.round(myVal) + '%');
            }
          });
        });
    
        $('.circle3').each(function() {
          $(this).animate({
            val: $(this).data('max')
          }, {
            duration: 14000,
            step: function(myVal) {
              $(this).text(Math.round(myVal) + '%');
            }
          });
        });
      }, 3000);
    });
    
  });

// bar
// barların başlangıçta gizlenmesi
$('.skillbar').css('opacity', 0);

// sayfayı scroll ettiğinde barların görünmesi

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scrollHeight = $(document).scrollTop() + windowHeight;

  $('.skillbar').each(function() {
    var position = $(this).offset().top;
    if (position < scrollHeight) {
      $(this).animate({opacity: 14}, 14000);
    }
  });

  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },20000);
  });
  

});



  

  // body scroll navbar
  $(document).ready(function(){
    $('#link1').click(function(e){
          e.preventDefault();
            $('body, html').animate({
              scrollTop: $('#target1').offset().top,
            }, 600);
          });		
          $('#link2').click(function(e){
            e.preventDefault();
            $('body, html').animate({
              scrollTop: $('#target2').offset().top,
            }, 600);
          });		
        $('#link3').click(function(e){
            e.preventDefault();
            $('body, html').animate({
              scrollTop: $('#target3').offset().top,
            }, 600);
          });	
            $('#link4').click(function(e){
            e.preventDefault();
            $('body, html').animate({
              scrollTop: $('#target4').offset().top,
            }, 600);
          });	
         $('#link5').click(function(e){
            e.preventDefault();
            $('body, html').animate({
              scrollTop: $('#target5').offset().top,
            }, 600);
          });
        });
        
    
      $(function scrolly(){
          //Keep track of last scroll
          var lastScroll = 0;
          $(window).scroll(function(event){
              //Sets the current scroll position
              var st = $(this).scrollTop();
              //Determines up-or-down scrolling
              if (st > lastScroll){
                 //Replace this with your function call for downward-scrolling
                //Maybe some timeout?
               // setTimeout( function () {  
                $('nav').addClass('fixedAtTop');
               // }, 800);
              }
              else {
                 //Replace this with your function call for upward-scrolling
                
                $('nav').removeClass('fixedAtTop');
                
              }
              //Updates scroll position
              lastScroll = st;
          });
        $('nav').hover(function(){
          $(this).removeClass('fixedAtTop');
        });
      });


// chart
      setTimeout(function() {


function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;

  $(id + " ." + sliceID).css({
    "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  });

  $(id + " ." + sliceID + " span").css({
    "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color
  });
}

function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var
    maxSize = 179,
    sliceID = "s" + dataCount + "-" + sliceCount;

  if( sliceSize <= maxSize ) {
    addSlice(id, sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(id, maxSize, pieElement, offset, sliceID, color);
    iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}

function createPie(id) {
  var
    listData      = [],
    listTotal     = 0,
    offset        = 0,
    i             = 0,
    pieElement    = id + " .pie-chart__pie"
    dataElement   = id + " .pie-chart__legend"

    color         = [
      "#926BE6",
      "#0CBC8B",
     
    ];

  color = shuffle( color );

  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });

  for(i = 0; i < listData.length; i++) {
    listTotal += listData[i];
  }

  for(i=0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
    $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
    offset += size;
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function createPieCharts() {
  createPie('.pieID--micro-skills' );
  createPie('.pieID--categories' );
  createPie('.pieID--operations' );
}
        createPieCharts();
      }, 21000);



      // scroll button
      $(document).ready(function(){

        $(window).scroll(function(){
          if($(this).scrollTop() > 1000){
            $('#topBtn').fadeIn();
          } else{
            $('#topBtn').fadeOut();
          }
        });
      
        $("#topBtn").click(function(){
          $('html ,body').animate({scrollTop : 0},600);
        });
      });



      // map
    var svgTurkeyMap = document.getElementById("svg-turkey-map").getElementsByTagName("path");
    var cityName = document.getElementById("city-name");
    
    for (i = 0; i < svgTurkeyMap.length; i++) {
    
    svgTurkeyMap[i].addEventListener("mousemove", function() {
    cityName.classList.add("show-city-name--active");
    cityName.style.left = (event.clientX + 20 + "px");
    cityName.style.top = (event.clientY + 20 + "px")
    cityName.innerHTML = this.getAttribute("title");
    });
    
    svgTurkeyMap[i].addEventListener("mouseleave", function() {
    cityName.classList.remove("show-city-name--active");
    });
    
    svgTurkeyMap[i].addEventListener("click", function() {
    window.location.href = this.getAttribute("data-city-name");
    });
    
    }
    
    
 
