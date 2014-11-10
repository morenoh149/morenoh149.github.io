

* When you're developing on mobile many times there are culprits that are larger
than the device width causing scrolling. Find them like

$("*").filter(function () {
    return $(this).width() > 400;
})

* {outline: 2px solid hotpink !important;}
