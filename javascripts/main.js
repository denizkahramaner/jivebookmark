gadgets.util.registerOnLoadHandler(function() {

    $.get('/bookmarks?itemView=detail', function(data) {
//        console.log('success', data);
        var el = $('<div></div>');
        el.html(data);
        var res = $("tbody .j-browse-details-body").find("td .j-td-title").each(function(index, element) {
            console.log(element);
        })
    });
});
