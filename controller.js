app.controller('AppController', function($scope, $http) {

   var hsl = 'https://www.kimonolabs.com/api/aiidm0q8?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';	
   
   
   $scope.hsltime = [];
   $scope.hslbus = [];

   $http.jsonp(hsl).success(function(data) {
      $scope.hsltime.push.apply($scope.hsltime, data.results.collection1);
      $scope.hslbus.push.apply($scope.hslbus, data.results.collection2);
    });

});
