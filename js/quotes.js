$(document).ready(function(){
   $("#getQuote").on("click",function(e){
        e.preventDefault();
                $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",function(json){
                    $("#quote").html(json.quoteText);
                    $("#author").html(json.quoteAuthor);
                });
    });
    
    $("#makeTweet").on("click",function(e){
            e.preventDefault();
            var text = $("#quote").text() + " - " + $("#author").text();
            if(text.length <=140){

                <a href="http://twitter.com/home?status=Custom%20status%20here" target="_blank">
                $.post("http://twitter.com/home?status="+text,function(){
                });
            }else{
                alert("Unfortunately the quote has more than 140 caracters, so it can't be twitted!");
            }
            
    });
});


