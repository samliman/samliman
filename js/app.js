var urls = ["https://fixify-react-app.herokuapp.com", "https://nomistock.herokuapp.com/", "https://instantgrammer.herokuapp.com/home", "https://nomistockexpress.herokuapp.com/"];
for (var i = 0; i < urls.length; i++) {
  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
  });
  $.get(
    urls[i],
    function (response) {
    });
}