var app = angular.module('myApp', []);
app.controller('indexCtrl', function($scope) {
	var arrColumn1=[
		{text:"item1"},
		{text:"item2"},
		{text:"item3"}
	];
	var arrColumn2=[
		{text:"item1"},
		{text:"item2"},
		{text:"item3"}
	];
	$scope.column="0";
	$scope.enterItem="";
	$scope.search="";
	
	$scope.initItem = function(){
		$scope.column1 = angular.copy(arrColumn1);
		$scope.column2 = angular.copy(arrColumn2);
	};
	
	$scope.initItem();
	
	$scope.searchItem = function(){
		if ($scope.search==""||$scope.search==null){
			$scope.initItem();
			return;
		}
		var searchCol1=[];
		for(var n = 0;n < $scope.column1.length; n ++){
			var str = $scope.column1[n].text;
			var index = str.indexOf($scope.search);
			if (index >= 0)
				searchCol1.push($scope.column1[n]);
		}
		$scope.column1 = searchCol1;
		var searchCol2=[];
		for(var n = 0;n < $scope.column2.length; n ++){
			var str = $scope.column2[n].text;
			var index = str.indexOf($scope.search);
			if (index >= 0)
				searchCol2.push($scope.column2[n]);
		}
		$scope.column2 = searchCol2;
		$scope.search="";
	};
	
	$scope.cssClose = function(index){
		if (index % 2 == 0)
			return true;
		else 
			return false;
	};
	
	$scope.addItem = function(){
		if($scope.enterItem==""||$scope.enterItem==null){
			alert("PLEASE ENTER ITEM!");
			return false;
		}
		if($scope.column == "0"){
			alert("PLEASE CHOOSE COLUMN!");
			return false;
		}
		if($scope.column == "1")
			arrColumn1.push({text:$scope.enterItem});
		else if($scope.column == "2")
			arrColumn2.push({text:$scope.enterItem});
		$scope.initItem();
		$scope.column="0";
		$scope.enterItem="";
	};
	
	$scope.remove1 = function (index) {
        arrColumn1.splice(index, 1);
		$scope.initItem();
    };
	
	$scope.remove2 = function (index) {
        arrColumn2.splice(index, 1);
		$scope.initItem();
    };
});
