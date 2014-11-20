app.controller('AppController', function($scope, $http) {

   var hsl = 'https://www.kimonolabs.com/api/aiidm0q8?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';	
   var hsl_back = 'https://www.kimonolabs.com/api/4f7yboo6?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';	
   //var antell_url = 'https://www.kimonolabs.com/api/8k73atw6?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';
   var antell_url = 'https://www.kimonolabs.com/api/6hl3375i?apikey=jvGLSJppQ52Xpgelxepq468kRrKNEgli&callback=JSON_CALLBACK';
   
   var date = new Date();
   var day = date.getDay()
   
   $scope.hsltime = [];
   $scope.hsltime_back = [];
   $scope.hslbus = [];
   $scope.hslbus_back = [];
   $scope.weather = [];
   $scope.antell_menu = [];
   $scope.antell_single_day_menu = [];
   $scope.exer_for_today = [];
   $scope.display_date = date;
   
   var exer_mon = ["Athletico T25 @ 15:00", "Floorball @ 17:00", "Badminton @ 16:30"];
   var exer_tue = ["Athletico T25 @ 15:00", "Badminton @ 16:30"];
   var exer_wed = ["Floorball @ 7:30", "Jogging @ 11:00", "Athletico T25 @ 15:00", "Badminton @ 16:30", "Bowling @ 17:00"];
   var exer_thu = ["Athletico T25 @ 15:00", "Badminton @ 16:30" ,"Athletico Asylum @ 17:00"];
   var exer_fri = ["Rinkball @ 7:00", "Athletico T25 @ 15:00", "Basketball @ 16:00", "Athletico Asylum @ 17:00"];
   
   if (day === 1)
   {
		var exer_today = exer_mon;
		$scope.exer_for_today.push.apply($scope.exer_for_today, exer_today);
		console.log (exer_today);
		console.log ($scope.exer_for_today);
   }
   else if (day === 2)
   {
		var exer_today = exer_tue;
		$scope.exer_for_today.push.apply($scope.exer_for_today, exer_today);
		console.log (exer_today);
		console.log ($scope.exer_for_today);
   }
	else if (day === 3)
   {
		var exer_today = exer_wed;
		$scope.exer_for_today.push.apply($scope.exer_for_today, exer_today);
		console.log (exer_today);
		console.log ($scope.exer_for_today);
   }
   else if (day === 4)
   {
		var exer_today = exer_thu;
		$scope.exer_for_today.push.apply($scope.exer_for_today, exer_today);
		console.log (exer_today);
		console.log ($scope.exer_for_today);
   }
   else if (day === 5)
   {
		var exer_today = exer_fri;
		$scope.exer_for_today.push.apply($scope.exer_for_today, exer_today);
		console.log (exer_today);
		console.log ($scope.exer_for_today);
   }
   
   $http.jsonp(hsl).success(function(data) {
      $scope.hsltime.push.apply($scope.hsltime, data.results.collection1);
      $scope.hslbus.push.apply($scope.hslbus, data.results.collection2);
    });
   
   $http.jsonp(hsl_back).success(function(data) {
      $scope.hsltime_back.push.apply($scope.hsltime_back, data.results.collection1);
      $scope.hslbus_back.push.apply($scope.hslbus_back, data.results.collection2);
   });

   $http.jsonp(antell_url).success(function(data) {
      $scope.antell_menu.push.apply($scope.antell_menu, data.results.collection1); 
      $scope.antell_menu.push.apply($scope.antell_menu, data.results.collection2); 
      $scope.antell_menu.push.apply($scope.antell_menu, data.results.collection3); 
      $scope.antell_menu.push.apply($scope.antell_menu, data.results.collection4); 
      $scope.antell_menu.push.apply($scope.antell_menu, data.results.collection5); 
	  
      if (day === 1)
      {
        console.log("Weekday:" + day);
		$scope.antell_single_day_menu.push.apply($scope.antell_single_day_menu, data.results.collection1); 
      }
      else if (day === 2)
      {
	console.log("Weekday:" + day);
	$scope.antell_single_day_menu.push.apply($scope.antell_single_day_menu, data.results.collection2); 
      }
      else if (day === 3)
      {
        console.log("Weekday:" + day);
	$scope.antell_single_day_menu.push.apply($scope.antell_single_day_menu, data.results.collection3); 
      }
      else if (day === 4)
      {
        console.log("Weekday:" + day);
        $scope.antell_single_day_menu.push.apply($scope.antell_single_day_menu, data.results.collection4); 
      }
      else if (day === 5)
      {
        console.log("Weekday:" + day);
        $scope.antell_single_day_menu.push.apply($scope.antell_single_day_menu, data.results.collection5); 
      }		
    });
});

