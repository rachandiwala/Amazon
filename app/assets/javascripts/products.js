$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'html'
    }).done(function(data){
      $('#products').html(data);
    });
  });
});


  // 1. Figure out when I'm close to the bottom of the page
  // 2. Figure out where to send the request
  // 3. What should I send as the response?
  // 4. How should I update the page with my response?
  var nextPageUrl;

  $(window).scroll(function() {
    if ( $(document).height() - ($(window).scrollTop() + $(window).height()) < 200 ) {
      var proposedNextPage = $('.next > a').attr('href');

      if ( proposedNextPage !== nextPageUrl ) {
        nextPageUrl = proposedNextPage;

        if ( nextPageUrl ) {
          $.ajax({
            url: nextPageUrl,
            dataType: 'script',
            type: 'GET'
          });
        }
      }
    }
  });


/*
// inside the submit event callback, replace the $.ajax portion with the following
// less code to write, however up to me to choose the code I want to work with(both are same)
    $.get('/products?search=' + searchValue)
      .done(function(data){
        console.log(data);
        $('#products').html(data);
      });
  ....................

// inside the submit event callback, replace the $.get portion with the following
// Option 3:

    $.getScript('/products?search=' + searchValue);
...

*/