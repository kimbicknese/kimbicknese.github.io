$(function() {
  // DOM is now ready
    _500px.init({
        sdk_key: '7a5a34828f3dc43f72fdfd463daaced03e8beabe'
    });

    // If the user clicks the login link, log them in
    $('#login').click(function() {
        _500px.login();
    });
    //	When	a	successful	login	to	500px	is	made,	they	fire	off	the	'authorization_obtained'	event
    _500px.on('authorization_obtained', function() {
        // Successful OAuth login!
        $('.sign-in-view').hide();
        $('.image-results-view').show();
        if (navigator.geolocation) {
            // if it is use the getCurrentPosition method to retrieve the Window's location
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                console.log('lat: ', lat);
                console.log('long: ', long);
                var radius = '25mi';
                var searchOptions = {
                    geo: lat + ',' + long + ',' + radius,
                    only: 'Landscapes', // We only want landscape photos
                    image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
                    rpp: 50,
                    sort: 'highest_rating'
                };
                _500px.api('/photos/search', searchOptions, function(response) {
                    if (response.data.photos.length == 0) {
                        alert('No photos found!');
                    } else {
                        // Handle the successful response here by calling a function
                        var allData = response.data.photos;

                        $.each(allData, function() {
                            var element = $('<img>').attr('src', this.image_url).addClass('image');
                            $('.images').append(element);
                        });

                        console.log(response);
                    }
                });
            });
        } else {
            $('.images').append('Sorry, the browser does not support geolocation');
        }
    });

});
