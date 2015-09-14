/**
 * Created by SkyNetServer on 9/14/2015.
 */

var app = angular.module("drawApp",['firebase','ngMaterial','ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/entry");

    $stateProvider
    .state("entry",{
        url : "/entry",
        templateUrl : "views/entry/entry.html"

    })
    .state("draw",{
            url : "/draw",
            templateUrl : "views/draw/draw.html"

        })
    .state("adminabc",{
            url : "/adminabc",
            templateUrl : "views/admin/admin.html"

        })

});

app.controller("appController",function($scope,$firebaseArray){

    var ref = new Firebase("https://markone-drawapp.firebaseio.com/guests");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.guests = $firebaseArray(ref);


    $scope.name = "";
    $scope.number = "";

    $scope.add = function(){
        $scope.guests.$add({
            name : $scope.name,
            number : $scope.number
        });
    }

});
