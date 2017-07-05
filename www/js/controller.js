//fyp
app.controller('fypCtrl', function($scope,moment,$timeout,$state){
	$scope.name = 'Umrah';
	
   	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	// var test = this;
   	// test.time = new Date();



   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}


   	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   	$scope.goToMenu = function(){
   		// alert("bvn");
   		$state.go('menu');
   	}


})

app.controller('menuCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   	$scope.goToMenu2 = function(){
		// alert("bvn");
	$state.go('praUmrah');
   	}
   	 $scope.goToMenu3 = function(){
	$state.go('ihram');
	}
	 $scope.goToMenu4 = function(){
	$state.go('tawaf');
	}
	 $scope.goToMenu5 = function(){
	$state.go('saie');
	}
	$scope.goToMenu6 = function(){
	$state.go('post');
	}


})

app.controller('praUmrahCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000; //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }




   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}

   	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})


app.controller('ihramCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('tawafCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('saieCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('postCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

})
app.controller('damCtrl', function($scope,moment,$timeout,$state,$stateParams){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   	dam = ['Takhyir & Takdir','Takhyir & Ta\'dil','Tartib & Takdir','Tartib & Ta\'dil']
   	damDesc = ['Sembelih seekor Kambing atau Sedekah 2 cupak beras kepada 6 fakir Miskin atau Puasa 3 hari',
   	'Sembelih binatang sama nilai dengan buruan tadi atau beli makanan dengan nilai buruan tadi atau berpuasa dengan nilai cupak makanan buruan tadi',
   	'Sembelih seekor kambing, Jika tidak mampu: Berpuasa 10 hari',
   	'Sembelih seekor unta, Jika tidak mampu: Seekor Lembu']

	$scope.checked = $stateParams.checked;

	$scope.result = [];
   	$scope.checked.indexOf(1) > -1 ? $scope.result.push(dam[0],damDesc[0]):'';
   	$scope.checked.indexOf(2) > -1 ? $scope.result.push(dam[1],damDesc[1]):'';
   	$scope.checked.indexOf(3) > -1 ? $scope.result.push(dam[2],damDesc[2]):'';
   	$scope.checked.indexOf(4) > -1 ? $scope.result.push(dam[3],damDesc[3]):'';
   	$scope.checked.indexOf(5) > -1 ? $scope.result.push(dam[0],damDesc[0]):'';
   	// alert($scope.result)
   	// console.log($scope.result);

})



angular.module("DemoApp", ["checklist-model"])
app.controller('Demo1Ctrl', function($scope, $cordovaLocalNotification) {
$scope.roles = [
    {id: 1, text: 'Menunaikan Solat Sunat Taubat'},
    {id: 2, text: 'Memohon maaf dan keredaan dari kenalan'},
    {id: 3, text: 'Menyelesaikan hutang tertunggak'},
    {id: 4, text: 'Memastikan niat kerana Allah sahaja'}
  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.checked = function() {
    return $scope.user.roles.length!==4;
  };
  $scope.mula = function(){
    var id_selected = $scope.tempat_stop;

  	// notiService.notification("Testing tajuk", "Testing message", $scope);
    var time = new Date();

    if(id_selected == 1) {
      time.setSeconds(time.getSeconds() + 10);   

    } else if(id_selected==2) {
      time.setSeconds(time.getSeconds() + 15); 
    } else if(id_selected==3) {
      time.setSeconds(time.getSeconds() + 20); 
    } else if(id_selected==4) {
      time.setSeconds(time.getSeconds() + 5); 
    }

    $cordovaLocalNotification.add({
        id: 10,
        title: "Easy Umrah",
        message: "Anda bersedia untuk tawaf ?",
        date: time,
        data: "1"
    });

  };

  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };

  // if($scope.user.roles == 1 && $scope.user.roles == 2 && $scope.user.roles == 3 && $scope.user.roles == 4){
  // 	$scope.allIsChecked = true;
  // }

});
angular.module("DemoApp", ["checklist-model"])
app.controller('Demo2Ctrl', function($scope) {
$scope.roles = [
    {id: 1, text: 'Memakai ihram'},
    {id: 2, text: 'Memastikan pakaian tidak melanggar larangan ihram'},
    {id: 3, text: 'Berniat'},
    {id: 4, text: 'Solat sunat ihram'}
  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
      $scope.checked = function() {
    return $scope.user.roles.length!==4};
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };

});

angular.module("DemoApp", ["checklist-model"])
app.controller('Demo3Ctrl', function($scope) {
$scope.roles = [
    {id: 1, text: 'Memakai ihram'},
    {id: 2, text: 'Memastikan pakaian tidak melanggar larangan ihram'},
    {id: 3, text: 'Berniat'},
    {id: 4, text: 'Solat sunat ihram'}
  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };
    $scope.checked = function() {
    return $scope.user.roles.length!==4
  };
});

angular.module("DemoApp", ["checklist-model"])
app.controller('Demo4Ctrl', function($scope) {
$scope.roles = [
    {id: 1, text: 'Memakai ihram'},
    {id: 2, text: 'Memastikan pakaian tidak melanggar larangan ihram'},
    {id: 3, text: 'Berniat'},
    {id: 4, text: 'Solat sunat ihram'}
  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };
    $scope.checked = function() {
    return $scope.user.roles.length!==4
  };
});

angular.module("DemoApp", ["checklist-model"])
app.controller('checkCtrl', function($scope, $state) {
	$scope.roles = [
	    {id: 1, text: 'Menanggalkan bulu dan rambut di badan '}, //1
	    {id: 2, text: 'Memakai pakaian yang dilarang didalam ihram '}, //1
	    {id: 3, text: 'Mengerat atau Menanggalkan kuku'}, //1
	    {id: 4, text: 'Memakai wangi-wangian '}, //1
	    {id: 5, text: 'Memakai minyak di kepala, janggut atau bulu di muka'}, //1
	    {id: 6, text: 'Melakukan permulaan persetubuhan'}, //1
	    {id: 7, text: 'Memotong & Mencabut tumbuhan di Tanah Haram'},//3
	    {id: 8, text: 'Berburu binatang sama ada di Tanah Haram atau Halal'}, //2
	    {id: 9, text: 'Gagal untuk berniat & berihram sebelum miqat'}, //2
	    {id: 10, text: 'Tidak menunaikan tawaf wida'}, //2
	    {id: 11, text: 'Bersetubuh'}, //4
	    // {id: 5, text: 'Solat sunat ihram'}, //5
	];

	
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };

    $scope.checked = function() {
    return !$scope.user.roles.length>0;
  };

  $scope.ticked = function() {
  	$state.go('dam',{'checked':$scope.user.roles});
  };
});

app.controller("damListCtrl", ["$scope", "$stateParams", "$state", function($scope, $stateParams, $state) {
	// alert("Ticked: ");
}]);