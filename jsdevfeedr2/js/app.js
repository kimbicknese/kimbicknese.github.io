/*
  Please add all Javascript code to this file.
*/

// Load loading icon until DOM elements are ready

$(window).load(function() {
    $(".loader").fadeOut("slow");
})

// When you click on the CNN articles link

$("#cnnArticles").on("click", function() {
    // Empty whatever content is currently in the container
    $("#main").empty();
    $(function() {

        // Grab CNN's recent articles
        var url = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=d5e4e40d0fa24142afe5d058c997468c";
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {

            var articleResults = result.articles;

            // If there are no articles at the moment, show an error message.
            if ( articleResults.length == 0 ) {
                $("#main").html("<p>Sorry, no articles were found at this time.</p>");
            } else {

                // For each article, print out the handlebars template and append the code into the main container,
                // where all the articles will be dumped. For future reference, index is the array index, item is like
                // results[0].articles

                $.each(articleResults, function(index, item){

                    var source = $("#handlebar-template").html();
                    var template = Handlebars.compile(source);

                    // Define article assets with handlebar

                    var articleCNN = {
                        articleTitle: item.title,
                        articleAuthor: item.author,
                        articleURL: item.url,
                        articleImage: item.urlToImage,
                        articleSection: item.category
                    };

                    var html = template(articleCNN);

                    // Print articles to the #main container

                    $("#main").append(html);
                });

                // Log the JSON results in the console for reference
                console.log(result);
            }

            // If grabbing the API fails, throw an error
        }).fail(function(err) {
            throw err;
        });
    });
});

// Wheny ou click on NY Articles, display those articles

$("#nytArticles").on("click", function() {
    // Empty whatever content is currently in the container
    $("#main").empty();
    $(function() {

        // Call the API for NYT's most popular travel articles

        var url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Travel/30.json";
        url += '?' + $.param({
                'api-key': "f5fe80edf68449c4b6717a8063524895"
            });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            var articleResults = result.results;

            // If there are no articles at the moment, show an error message.
            if ( articleResults.length == 0 ) {
                $("#main").html("<p>Sorry, no articles were found at this time.</p>");
            } else {

                // For each article, print out the handlebars template and append the code into the main container,
                // where all the articles will be dumped. For future reference, index is the array index, item is like
                // results[0].articles

                $.each(articleResults, function(index, item){

                    var source = $("#handlebar-template2").html();
                    var template = Handlebars.compile(source);

                    // Define article assets with handlebar

                    var articleNYT = {
                        articleTitle: item.title,
                        articleAuthor: item.byline,
                        articleURL: item.url,
                        articleImage: item["media.media-metadata.url"],
                        articleSection: item.section
                    };

                    var html = template(articleNYT);

                    // Print articles to the #main container

                    $("#main").append(html);
                });

                // Log the JSON results in the console for reference
                console.log(result);
            }
        }).fail(function(err) {
            throw err;
        });
    });
});



