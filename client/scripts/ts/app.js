(function (){
    
var app = angular.module('myApp', ['ngRoute']);

app.controller('MainCtrl', [function(){
    console.log('working');
}]);   
    
  app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
               templateUrl : './pages/home.html' 
            })
            
            .when('/name', {
                templateUrl : './pages/name.html',
                //controller : 'TabsCtrl'
            })
            .when('/color', {
                templateUrl : './pages/color.html',
                //controller : 'TabsCtrl'
            })
            
            .when('/number', {
                templateUrl : './pages/number.html',
                //controller : 'FormCtrl'
            });
    }]);   
    
    
})();
