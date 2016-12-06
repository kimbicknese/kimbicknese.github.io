/*
  Please add all Javascript code to this file.
*/

// Load loading icon until DOM elements are ready

$(window).load(function() {
    $(".loader").fadeOut("slow");
});

// Create a prototype for the list of article elements for handlebars

function articleProto(title, author, url, image, category) {
    var article = {
        articleTitle: title,
        articleAuthor: author,
        articleURL: url,
        articleImage: image,
        articleSection: category
    };
    this.title = title;
    this.author = author;
    this.url = url;
    this.image = image;
    this.category = category;
    this.article = article;
}

// Declare the API functions ahead of time so later it will be easier to place the code blocks into containers
// without pasting the whole thing over and over

function CNN() {

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

            $.each(articleResults, function (index, item) {

                var source = $("#handlebar-template").html();
                var template = Handlebars.compile(source);

                // Define article assets with handlebar

                var articleCNN = new articleProto(item.title, item.author, item.url, item.urlToImage, item.category);

                var html = template(articleCNN.article);

                // Print articles to the #main container

                $("#main").append(html);

                $("#popUp h1").text(item.title);

                $(function() {
                    $(".articlePopup").click(function (e) {
                        e.preventDefault();
                        $("#popUp").removeClass("loader").addClass("display");
                    });
                    $(".closePopUp").click(function() {
                        $("#popUp").removeClass("display");
                    })

                });
            });

            // Log the JSON results in the console for reference
            console.log(result);
        }
        // If grabbing the API fails, throw an error
    }).fail(function(err) {
        throw err;
    });
}

function NYT() {

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
                var imageNYT = item.media[0]["media-metadata"][1].url;
                var articleNYT = new articleProto(item.title, item.byline, item.url, imageNYT, item.section);

                var html = template(articleNYT.article);

                // Print articles to the #main container

                $("#main").append(html);
            });

            // Log the JSON results in the console for reference
            console.log(result);
        }
    }).fail(function(err) {
        throw err;
    });
}

// Dump all articles in the container when first loading. User then can filter which source they'd like to see

$("#main").append(CNN(), NYT());

// When you click on the CNN articles link, display only CNN articles and remove the other articles if there are any
// in the container.

$("#cnnArticles").on("click", function() {

    // Replace text in the <span> with the article name
    $("#sourceName").text(this.textContent);

    // Empty whatever content is currently in the container
    $("#main").empty();

    CNN();
});

// When you click on NY Articles, display those articles and remove any other articles from the container.

$("#nytArticles").on("click", function() {

    // Replace text in the <span> with the article name
    $("#sourceName").text(this.textContent);

    // Empty whatever content is currently in the container
    $("#main").empty();

    NYT();
});

// When you click on an article name, pop up the article with the description, etc.





