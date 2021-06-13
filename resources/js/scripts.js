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
    
    // var waypoint = new Waypoint({
    //         element: $('.js-section-features')[0],
    //         handler: function() {

    //             notify('Basic waypoint triggered')
    //         }
    // })


    // console.log(waypoint)
    /*
   var waypoint = new Waypoint({
        element: document.getElementById('basic-waypoint'),
        handler: function() {
            notify('Basic waypoint triggered')
        }
    })
   */ 
})