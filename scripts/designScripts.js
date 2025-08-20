        $(document).ready(function() {

            // 1. Smooth scrolling for navigation links
            $('.main-nav a[href^="#"]').on('click', function(event) {
                event.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 70 // Offset for the sticky header
                }, 800, 'swing');
            });

            // 2. Reveal sections on scroll
            function revealSections() {
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();

                $('.reveal-on-scroll').each(function() {
                    var $this = $(this);
                    var elementOffsetTop = $this.offset().top;

                    // Reveal when the top of the element is about 150px from the bottom of the viewport
                    if (scrollTop + windowHeight > elementOffsetTop + 150) {
                        $this.addClass('visible');
                    }
                });
            }

            // Initial check on page load
            revealSections();

            // Check on scroll
            $(window).on('scroll', revealSections);

        });