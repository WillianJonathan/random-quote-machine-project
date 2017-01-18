$(document).ready(function(){

  $("#getQuote").on("click",function(e){     
        $("#makeTweet").remove();   
        $("#blockquote").remove(); 
        $("#presentation").remove(); 
        $("#father").append('<blockquote id="blockquote"><p id="quote"></p><footer id="author"></footer></blockquote>');
        $("#button").append('<a id="makeTweet" class="btn btn-info" href="#" target="_blank">Tweet</a>');
        e.preventDefault();
                $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",function(json){

                    if(json.quoteAuthor.length === 0){
                          json.quoteAuthor = "Unknown";
                    }

                    $("#quote").html(json.quoteText);
                    $("#author").html(json.quoteAuthor);

                    if( json.quoteText.length > 0){
                        var text = (json.quoteText + " - " + json.quoteAuthor).replace(";",".");
                        $("#makeTweet").attr("href","http://twitter.com/home?status="+text);
                    }

                    $("#makeTweet").css("visibility","visible");

                });
    });

});

