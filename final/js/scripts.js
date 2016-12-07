/**
 * Created by kimberlybicknese on 11/8/16.
 */

// Functions

filterToggle();

properties();

// Find height of header and subtract it from search section div height

$( document ).ready(function() {
    var headerHeight = $('.header').outerHeight();
    var searchHeight = "calc(100vh - " + headerHeight + "px)";
    $('#searchLayout').css('height', searchHeight);
});

// Make property prototype

function propertyProto(address, city, state, zipcode, price, beds, baths, sqft, imageURL, status) {
    var property = {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        price: price,
        beds: beds,
        baths: baths,
        sqft: sqft,
        image: imageURL,
        status: status
    };
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.price = price;
    this.beds = beds;
    this.baths = baths;
    this.sqft = sqft;
    this.imageURL = imageURL;
    this.status = status;
    this.property = property
}

// Print results to the page using handlebars

function properties() {
    var url = "js/properties.json";
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var propertyResults = result.properties;

        $.each(propertyResults, function(index, item){

            var source = $("#properties").html();
            var template = Handlebars.compile(source);

            // Define properties with handlebars

            var propertyCard = new propertyProto(item.address, item.city, item.state, item.zipcode, item.price, item.beds, item.baths, item.sqft, item.img, item.status);

            var html = template(propertyCard.property);

            // Print articles to the #main container

            $(".properties").append(html);

            console.log(result);
        });
    }).fail(function(err) {
        throw err;
    });


}

// When user clicks on filters button, more filters panel will toggle, covering the listings area until the user
// exits out or applies new filters.

function filterToggle() {
    $("#searchFilters").on("click", function() {
        $(".filter-panel").toggle(200);
    })
}

// Listings will automatically update

