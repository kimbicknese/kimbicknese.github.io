/**
 * Created by kimberlybicknese on 11/8/16.
 */

// Functions

// Find height of header and subtract it from search section div height

$( document ).ready(function() {
    var headerHeight = $('.header').outerHeight();
    var searchHeight = "calc(100vh - " + headerHeight + "px)";
    $('#searchLayout').css('height', searchHeight);
});

// When user clicks on filters button, more filters panel will toggle, covering the listings area until the user
// exits out or applies new filters.

function filterToggle() {
    $("#searchFilters").on("click", function() {
        $(".filter-panel").toggle();
    })
}

// Listings will automatically update

