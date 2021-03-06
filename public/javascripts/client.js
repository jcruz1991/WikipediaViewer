var main = function() {
  // RANDOM BUTTON CLICK EVENT
  $(".random-button").on("click", function() {
    url = "https://en.wikipedia.org/wiki/Special:Random";
    var win = window.open(url, '_blank');
  });

  // SEARCH BUTTON CLICK EVENT
  $(".search-button").on("click", function() {
    var searchItem = $(".search-item").val();
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchItem + '&format=json&callback=?';

    $.ajax({
      type: 'GET',
      url: wikiUrl,
      dataType: 'json',
      success: function(data) {
        for(var i = 0; i < data[1].length; i++) {
          // Variables
          var title = data[1][i];
          var description = data[2][i];
          var link = data[3][i];

          $(".results").append("<div class=\"wiki-result\"><p class=\"wiki-title\"><a href=" + link + ">" + title + "</a></p> <p class=\"wiki-description\">" + description + "</p></div>");
        }
      },
      error: function(error) {
        alert("Error");
      }
    });
  });
};

$(document).ready(main);
