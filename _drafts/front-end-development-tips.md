

* When you're developing on mobile many times there are culprits that are larger
than the device width causing scrolling. The following will list them

$('*').filter(function () {
    return $(this).width() > 400;
})

* {outline: 2px solid hotpink !important;}

I was debugging a site's look on a tablet.
media queries for small devices < 768px using `max-width: 768px` should be `max-width: 767px`

think ranges*
