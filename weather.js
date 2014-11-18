// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Helsinki',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = ' <b>@Helsinki</b> ' + weather.temp + '&deg' + weather.units.temp + ' ' + weather.currently;
      html += '<p><img src="'+ weather.thumbnail+'"></p>'
      $("#weather_hel").html(html);
    },
    error: function(error) {
      $("#weather_hel").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    location: 'Kirkkonummi',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<b>@Kirkkonummi</b> ' + weather.temp + '&deg' + weather.units.temp + ' ' + weather.currently;
      html += '<p><img src="'+ weather.thumbnail+'"></p>'
      $("#weather_kik").html(html);
    },
    error: function(error) {
      $("#weather_kik").html('<p>'+error+'</p>');
    }
  });


  $.simpleWeather({
    location: 'Espoo',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<b>@Espoo</b> ' + weather.temp + '&deg' + weather.units.temp + ' ' + weather.currently;
      html += '<p><img src="'+weather.thumbnail+'"></p>'
      $("#weather_esp").html(html);
    },
    error: function(error) {
      $("#weather_esp").html('<p>'+error+'</p>');
    }
  });

  
  $.simpleWeather({
    location: 'Turku',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<b>@Turku</b> ' + weather.temp + '&deg' + weather.units.temp + ' ' + weather.currently;
      html += '<p><img src="'+weather.thumbnail+'"></p>'
      $("#weather_tur").html(html);
    },
    error: function(error) {
      $("#weather_tur").html('<p>'+error+'</p>');
    }
  });

});
