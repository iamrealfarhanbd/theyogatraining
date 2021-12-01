	// Owl Carousel Scripts
    jQuery(window).on( 'pluginCarouselReady', function(){
        $('#oc-teachers').owlCarousel({
            items: 1,
            margin: 30,
            nav: true,
            navText: ['<i class="icon-line-arrow-left"></i>','<i class="icon-line-arrow-right"></i>'],
            dots: false,
            smartSpeed: 300,
            stagePadding: 60,
            responsive:{
                768: { stagePadding: 100, margin: 30, items: 1 },
                991: { stagePadding: 100, margin: 40, smartSpeed: 400, items: 2 },
                1200: { stagePadding: 100, margin: 40, smartSpeed: 400, items: 2}
            },
        });
    });

    //Current Week
    Date.prototype.getWeek = function(start) {
        //Calcing the starting point
        start = start || 0;
        var today = new Date(this.setHours(0, 0, 0, 0));
        var day = today.getDay() - start;
        var date = today.getDate() - day;

        // Grabbing Start/End Dates
        var StartDate = new Date(today.setDate(date));
        var EndDate = new Date(today.setDate(date + 6));
        return [StartDate, EndDate];
    }
    var Dates = new Date().getWeek();
    $("#week-details").text(Dates[0].toLocaleDateString() + ' - '+ Dates[1].toLocaleDateString());