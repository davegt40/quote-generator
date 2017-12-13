$(document).ready(function() {
  $("#getquote").on("click", function(){
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      headers: { 'X-Mashape-Key': 'OlvpPw31lnmshWv3QAHB1jbxJW5Fp1hH8Fdjsnmh7kWUpvJIQk' },
      success: function (data) {
        var items = [];
        
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            items.push(val);
          }
        }
        
        // clear out existing content
        $(".quote-text").empty();
        $(".quote-author").empty();
        $(".alert").hide();
        
        var bq = '"';
        $(".quote-text").html(bq + items[0] + bq);
        var t = '- ';
        $(".quote-author").html(t + items[1]);
      }
    });
  });
  $("#tweet").on("click", function(){
    if ($('.quote-text').is(':empty')){
     $(".alert").html("There is no quote to tweet!");
     $(".alert").show();
    } else {
      var content = $(".quote-text").html();
      if (content.length > 140) {
        $(".alert").html("Too long of a quote to tweet!");
        $(".alert").show();  
      } else {
          window.open('https://twitter.com/intent/tweet?text=' + content, '_blank');  
        }  
    }
  });
});