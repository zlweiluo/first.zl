;$(function()
   {
      'use strict';

      var sidebar = $('loginBox'),
        login-pop = $('.login-pop'),
        backButton = $('.back-to-top'),
        loginpop= $('#loginpop');

     function showSideBar()
    {
       login-pop.fadeIn();
        sidebar.css( 'right', 0 );
    }
    function  hideSideBar()
    {
        login-pop.fadeOut();
        sidebar.css('right', -sidebar.width());
    }
      loginpop.on('click', showSideBar)
       login-pop.on('click', hideSideBar)
       backButton.on('click',function()
       {
           $('html,body').animate({
               scrollTop: 0
           },800);
       })
       $(window).on ('scroll',function()
       {
           if($(window).scrollTop() > $(window).height())
           {
               backButton.fadeIn();
           }
           else {
               backButton.fadeOut();
           }
       })
       $(window).trigger('scroll');
})
