(function (){
    
var app = angular.module('myApp', ['ngRoute']);

app.controller('MainCtrl', ['$scope','mainService',function($scope, mainService){
    ;
   
    $scope.isGreen = function () {
        console.log(mainService.color);
      if (mainService.color === "green") {
          return true;
      }  else {
          return false;
      }
    };
    
   $scope.isRed = function () {
        console.log(mainService.color);
      if (mainService.color === "red") {
          return true;
      }  else {
          return false;
      }
    };
    
  $scope.isYellow = function () {
        console.log(mainService.color);
      if (mainService.color === "yellow") {
          return true;
      }  else {
          return false;
      }
    };
}]);   

app.controller('HomeCtrl', ['$scope','mainService',function($scope, mainService){
    $scope.home = {};
    $scope.home.name = mainService.name;
    $scope.home.num = mainService.num;
    $scope.home.color =mainService.color;
   
    
}]);

app.controller('NameCtrl',['$scope','mainService',function($scope, mainService){
   $scope.name = {};
   $scope.name.name = mainService.name;
   
   $scope.$watch('name.name', function(){
      mainService.name = $scope.name.name; 
   });
   
}]);

app.controller('NumberCtrl',['$scope','mainService',function($scope, mainService){
    $scope.num ={};
    $scope.num.num = mainService.num;
    
    $scope.$watch('num.num', function(){
       mainService.num = $scope.num.num; 
    });
}]);

app.controller('ColorCtrl', ['$scope','mainService',function($scope, mainService){
    $scope.color = {};
    $scope.color.selected = mainService.color;
    
    $scope.$watch('color.selected', function(){
       mainService.color = $scope.color.selected; 
    });
}]);
    
  app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
               templateUrl : './pages/home.html',
               controller : 'HomeCtrl' 
            })
            
            .when('/name', {
                templateUrl : './pages/name.html',
                controller : 'NameCtrl'
            })
            .when('/color', {
                templateUrl : './pages/color.html',
                controller : 'ColorCtrl'
            })
            
            .when('/number', {
                templateUrl : './pages/number.html',
                controller : 'NumberCtrl'
            });
    }]);   
    
  app.service('mainService', function(){
     
     this.name = "default";
     this.num = 0;
     this.color = "";
      
  });  
  
  
    
    
})();
