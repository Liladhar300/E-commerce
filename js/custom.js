
$(window).on('load', function(){
    setTimeout(function() {
        $('.pre-loader').hide();
    }, 1000);    
});

$(document).ready(function() {
    
    //back to top
    //Check to see if the window is top if not then display button
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }

        $('.nav-link').unbind('focus');
        $('.nav-link').bind('focus');
    });

    //Click event to scroll to top
    $('.scrollToTop').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //Dropdown Menus
    $(".dropdown").hover(
        function() {
            $(this).addClass('show');
        },
        function() {
            $(this).removeClass('show');
        }
    );

    //Zoom in plugin
    $(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15 , hover: true});
    $(".xzoom1, .xzoom-gallery1").xzoom({tint: '#333', Xoffset: 15 , hover: true});

    //heart hover
     $(".like-btn").hover(
        function() {
            var id = ($(this)).attr('id');
            if(($('#'+id)).hasClass('fa-heart-o')){
                ($('#'+id)).removeClass('fa-heart-o');
                ($('#'+id)).addClass('fa-heart');
            }else{
                ($('#'+id)).addClass('fa-heart-o');
                ($('#'+id)).removeClass('fa-heart');
            }
        }
    );

    
    // Make a sticky navbar on scrolling
    $(window).scroll(function() {
        function makeItFixed(x) {

            var body = $('body'),
                navbar = $('nav.navbar');

            if ($(window).scrollTop() >= x) {
                navbar.addClass('fixed-top');
                body.css('padding-top', $('nav.navbar').outerHeight());
            } else {
                navbar.removeClass('fixed-top');
                body.css('padding-top', '0');
            }
        }

        makeItFixed($('.top-bar').outerHeight());
    });

});


//Datatable
$(document).ready(function() {
    $('#datatable').DataTable({
        "bLengthChange": false,
        "paging": false,
        "bInfo": false,
        "bSort":false,
        responsive:true,
        "bFilter": false,
        "aaSorting": [[ 1, 'asc' ]],
        "aoColumnDefs": 
        [
            { "bSortable": false, "aTargets": [5]},
            {"aTargets": [0], "sWidth":'40%'},
            {"aTargets": [1], "sWidth":'10%'},
            {"aTargets": [2], "sWidth":'15%'},
        ],
    });

    $('#datatable tbody').on('mouseover', 'tr', function () {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover',
            html: true,
            placement:'bottom'
        });
    });

    
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        html: true,
        placement:'top'
    });

    var owl = $('.owl-carousel.logoSlider');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        navText:[],
        dots: false,
        moveSlides: 6,
        margin:20,
        responsive: {
            320: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        }
    });

    var owl = $('.owl-carousel.productSlider');
    owl.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: true,
        navText:[],
        dots: false,
        moveSlides: 4,
        margin:20,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

});
