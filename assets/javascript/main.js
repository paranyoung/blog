$(function(){

    var downmenu = function(){
        $(this).find('ul').stop().slideDown().parent().siblings().find('ul').slideUp()
    }
    var upmenu = function(){
        $('.wrapper .nav li ul').slideUp()
    }

    $(window).resize(function(e){

        var tw = $(this).width();

        if(tw < 890){
            console.log('mobile')
            $('.wrapper .nav>ul>li').has('ul').off('mouseenter')
            $('.wrapper .nav>ul>li').has('ul').click(function(e){

                $('.wrapper .nav>ul>li').has('ul').children('ul').stop().slideUp();
                $(this).find('ul').stop().stop().slideDown();

            })
                
        }else if(tw > 890){

            console.log('PC')
            $('.wrapper .nav>ul>li').has('ul').off('click');
            $('.wrapper .nav>ul>li').mouseenter(downmenu).mouseleave(upmenu);
        }
    })

    $(window).trigger('resize');



})
