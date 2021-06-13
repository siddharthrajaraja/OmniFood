$(document).ready(function(){
    
    $('.js-section-features').waypoint(function(direction){
        console.log(direction)
        if(direction=="down"){
            $('nav').addClass('sticky')
        }
        else $('nav').removeClass('sticky')
    },{
        offset:'50px'
    })

    $('.js-scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top},1000);
    })

    $('.js-scroll-to-feature').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-features').offset().top},1000);
    })
    $('.js-scroll-to-how-it-work').click(function(){
        $('html,body').animate({scrollTop: $('.js-how-it-works').offset().top},1000);
    })

    $('.js-scroll-to-cities').click(function(){
        $('html,body').animate({scrollTop: $('.js-cities').offset().top},1000);
    })

    $('.js-scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top},1000);
    })

    
    


})