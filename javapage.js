/*global $*/
    function appendSongToBody(srcURL) {
        $('.text-center').append('<img src=' + srcURL + '>');
    }
$.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=e8a485ebf273480961d6b26b62127701&artist=" + artistName + "&track=" + songName + "&format=json",
    method: "GET",
    success: function(response){
        
    }
});

function urlWithTerms(term) {
    
}

function getSongNameAndArtist(name, artist) {
    $("#bravo").click(function(){
        var artistName = $("#trackInfo").val();
        var songName = $("#artistInfo").val();
    });
   
}

    $("#bravo").click(function(songName){
   var searchTerm = $("input").val();       
    });

    // $("button").click(function(searchTerm) {
    //     var searchTerm = $("input").val();
    //     callGiphyAPIWithSearchTerm(searchTerm);
    //     $('.text-center').empty();
    // });