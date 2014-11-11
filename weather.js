// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Helsinki',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = weather.temp + '&deg' + weather.units.temp + ' ' +weather.currently;
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
