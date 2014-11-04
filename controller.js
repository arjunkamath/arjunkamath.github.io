app.controller('AppController', function($scope, $http) {

   var hsl = 'https://www.kimonolabs.com/api/aiidm0q8?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';	
   var espoo_temp = 'https://www.kimonolabs.com/api/6j6i6ot2?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';
 
   $scope.hsltime = [];
   $scope.hslbus = [];
   $scope.weather = [];

   $http.jsonp(hsl).success(function(data) {
      $scope.hsltime.push.apply($scope.hsltime, data.results.collection1);
      $scope.hslbus.push.apply($scope.hslbus, data.results.collection2);
    });

   $http.jsonp(espoo_temp).success(function(data) {
      $scope.weather.push.apply($scope.weather, data.results.collection1);
    });
});
