gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
//    var object = {
//        'href': 'https://brewspace.jiveland.com/bookmarks?itemView=detail',
//        'noCache': true,
//    }
//    osapi.http.get(object).execute(function(response) {
//        console.log("response",response);
//    });
    $.get('/bookmarks?itemView=detail', function(data) {
//        console.log('success', data);
        var el = $('<div></div>');
        el.html(data);
        $("tbody .j-browse-details-body").find("td .j-td-title").forEach(function(row) {
            console.log(row);
        });

    });
});
