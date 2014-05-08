/* ===========================================================
 * jquery-fullpage-menu.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a Full Page, Fully CSS3 Animated Menu for 
 * your Navigation with Full Page Menu
 *
 * https://github.com/peachananr/fullpage-menu
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    openButton: "Menu",
    closeButton: "Close X",
    animationSpeed: 100,
    autoNumber: true,
    animation: "fadeInLeft"
	};
	
	function romanize (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
	
  
  $.fn.fullpageMenu = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        fired = false;  
    
    $("body").addClass("fm-body")
    
    el.addClass("fm-menu")
    el.wrapInner("<div class='fm-wrapper'></div>")
    
    el.find("nav").addClass("fm-nav");
    
    $.fn.closeMenu = function() {
      if ( fired == false ) {
        fired = true;
        if ($("body").hasClass("fm-activate")) {
          $(".fm-nav.active > a").hide();
          $(".fm-button").html(settings.openButton);
          $(".fm-menu").removeClass("fm-animated")
          $("body").removeClass("fm-activate")
          fired = false;
        } 
      }
    }
    
    $.fn.openMenu = function() {
      if (!$("body").hasClass("fm-activate")) {
        if ( fired == false ) {
          fired = true;
      
          $(".fm-menu").addClass("fm-animated")
          $(".fm-button").html(settings.closeButton);
          
          $(".fm-overlay").fadeIn("fast", function() {
            $("body").addClass("fm-activate")
            
            var animations = []
            $(".fm-nav.active > a").each(function() {
              
              animations.push({ 
                    time: settings.animationSpeed,
                    step: "animated " + settings.animation,
                    selector: this,
                });
            });
            var timeline = 0;
            
            for(var i=0; i<animations.length; i++){
              timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
              runAnimation(i, timeline, animations);
            }
            
            fired = false;
            
          });
        }
      } else {
        el.closeMenu();
      }
      
    }
    
    if ($(".fm-button").length < 1) {
      $("<a href='#' class='fm-button'>" + settings.button + "</a>").insertAfter(el)
    }
    
    if ($(".fm-overlay").length < 1) {
      $("<div class='fm-overlay fm-scrollable'></div>").hide().prependTo("body")
      var menu = $('.fm-menu').clone()
      $('.fm-menu').remove();
      $('.fm-overlay').html(menu);
    }
    
    $(".fm-button").click(function() {
      el.openMenu();
      return false;
    });
    
    $(".fm-menu .fm-first-level > li > a").each(function(index) {
      var el2 = $(this), 
          href = el2.attr("href");
      if (settings.autoNumber == true) el2.attr("data-fm-index",index + 1)
      if ($(href).hasClass("active")) el2.parent().addClass("active")

      el2.click(function() {
        // Clear Default
        $(".fm-nav.active > a").hide();
        $(".fm-menu .fm-first-level > li").removeClass("active");
        $(".fm-menu .fm-nav").removeClass("active");
        
        
        el2.parent().addClass("active")
        $(".fm-menu " + href).addClass("active");
        
        var animations = []
        $(".fm-nav.active > a").each(function() {
          
          animations.push({ 
                time: settings.animationSpeed,
                step: "animated " + settings.animation,
                selector: this,
            });
        });
        var timeline = 0;
        
        for(var i=0; i<animations.length; i++){
          timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
          runAnimation(i, timeline, animations);
        }
        
        return false;
      });
    })
    
    $(".fm-menu .fm-nav").each(function(index) {
       $(this).find(" > a").each(function(index) {
         var el3 = $(this), 
             href = el3.attr("href");
         if (settings.autoNumber == true) el3.attr("data-fm-index", romanize(index + 1))
       });
    });

    function runAnimation(i, timeline, animations){
      setTimeout(function(){        
        if (animations[i].remove) {
          if (animations[i].hide == true) {
            $(animations[i].selector).removeClass(animations[i].remove).addClass(animations[i].step).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
              $(this).hide()
            });
          } else {
            $(animations[i].selector).removeClass(animations[i].remove).addClass(animations[i].step).show();
          }
        } else {
          if (animations[i].hide == true) {
            $(animations[i].selector).addClass(animations[i].step).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
              $(this).hide()
            });
          } else {
            $(animations[i].selector).addClass(animations[i].step).show()
          }
        }
      }, timeline);
    }

    
    
  }
}(window.jQuery);

