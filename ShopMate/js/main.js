(function($) {
    $(document).ready(function() {
        //dropdown-menu on hover
        if ($(window).width() > 767) {
            $('li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeIn();
            }, function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeOut();
            });
        }

        //clear search input
        $('.clear-search').on('click', function() {
            $(this).parent('.top-search').find('input').val('');
        });
        $('.top-search input').on('focus', function() {
            $(this).parent('.top-search').find('.clear-search').fadeIn();
        });

        //search toggle for mobile
        $('#search-trigger').on('click', function(e) {
            e.preventDefault();
            if (!$(this).hasClass('in')) {
                $('.top-search').slideDown();
                $(this).addClass('in');
            } else {
                $('.top-search').slideUp();
                $(this).removeClass('in');
            }
        });

        //Cart toggle
        $('#cart-toggle').on('click', function(e) {
            e.preventDefault();
            if (!$(this).hasClass('in')) {
                $('.top-cart-table').fadeIn();
                $(this).addClass('in');
            } else {
                $('.top-cart-table').fadeOut();
                $(this).removeClass('in');
            }
        });
        $('.cart-close').on('click', function(e) {
            e.preventDefault();
            $('.top-cart-table').fadeOut();
            $('#cart-toggle').removeClass('in');
        });

    });
})(jQuery);