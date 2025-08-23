        $(document).ready(function() {

            // 1. Smooth scrolling for navigation links
            $('.main-nav a[href^="#"]').on('click', function(event) {
                event.preventDefault(); // Prevent default anchor click behavior

                var target = this.hash; // Get the target section ID from the clicked link
                var $target = $(target); // Convert to jQuery object

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 85 // -85 is how much the href^="#" (e.g. #instructions) will be offset from the sticky header after being clicked on nav
                }, 800, 'swing'); // 800ms for the animation duration
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