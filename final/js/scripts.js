/**
 * Created by kimberlybicknese on 11/8/16.
 */

// Functions

filterToggle();


// Find height of header and subtract it from search section div height

    var headerHeight = $('.header').outerHeight();
    var searchHeight = "calc(100vh - " + headerHeight + "px)";
    $('#searchLayout').css('height', searchHeight);

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

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7128, lng: -74.0059},
        scrollwheel: false,
        zoom: 8
    });

    // Create searchbox for the map
    var input = document.getElementById('searchTextField');
    var options = {
        types: ['(cities)'],
        componentRestrictions: {country: 'usa'}
    };
    var searchBox = new google.maps.places.SearchBox(input, options);

    // Add a listener for a location and show the marker for it. Also, once location has changed, find property
    // matches and display them in the property container

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });
    var markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            $("#propertyListings").text("No properties found.")
            return;

        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {

            // Clear property container with each new place


            // Pull fake properties from the json

            $(function (){
                $("#propertyListings, #homesForSale").empty();

                var url = "js/properties.json";
                $.ajax({
                    url: url,
                    method: 'GET',
                }).done(function(result) {
                    var propertyResults = result.propertyList;

                    if ( propertyResults.length == 0 ) {

                    } else {
                        $.each(propertyResults, function(index, item){

                            var propertyCityVal = document.getElementById('searchTextField').value;
                            var location = item.city + ", " + item.state + ", United States" ;

                            if (location == propertyCityVal) {
                                // Print articles to the #main container

                                var source = $("#properties").html();
                                var template = Handlebars.compile(source);

                                // Define properties with handlebars

                                var propertyCard = new propertyProto(item.address, item.city, item.state, item.zipcode, item.price, item.bedrooms, item.bathsFull, item.sqft, item.img, item.status);

                                var html = template(propertyCard.property);

                                $("#propertyListings").append(html);
                            }
                        });

                        $("#homesForSale").text(propertyResults.city.length + " Homes for Sale");

                        console.log(result);
                    }
                }).fail(function(err) {
                    throw err;
                });
            });

            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

// When user clicks on filters button, more filters panel will toggle, covering the listings area until the user
// exits out or applies new filters.

function filterToggle() {
    $("#searchFilters").on("click", function() {
        var searchBar = $(".searchbar");

        $(".properties").toggle();
        $(".filter-panel").toggleClass("open");
        $(searchBar).toggleClass("open");

        if ( searchBar.hasClass("open") ) {
            $("#savedSearch").hide();
            $("#searchFilters").text("Apply");
        } else {
            $("#savedSearch").show();
            $("#searchFilters").html("<span class='icon-filter'></span>")
        }
    })
}

function scroll() {
    var container = $(".search-listings");
    container.on("scroll", function() {
        if (this.scrollTop > 100) {
            container.addClass("fix-search");
            $("#searchOptions").hide();
        } else {
            container.removeClass("fix-search");
            $("#searchOptions").show();
        }
    });
}
scroll();

// Listings will automatically update

