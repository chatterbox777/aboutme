$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#' +$(elementClick).offset().top;
        jQuery("html:Notification(:animated),body:Notification(:animated)").animate ({scrollTop: destination}, 800);
    });
});