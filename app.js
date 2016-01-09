/**
 * Created by SkyNetServer on 9/14/2015.
 */

var app = angular.module("drawApp",['firebase','ngMaterial','md.data.table','ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/entry");

    $stateProvider
    .state("entry",{
        url : "/entry",
        controller : "entryController",
        templateUrl : "views/entry/entry.html"


    })
    .state("draw",{
            url : "/draw",
            templateUrl : "views/draw/draw.html",
            controller : "drawController"

        })
    .state("adminabc",{
            url : "/adminabc",
            templateUrl : "views/admin/admin.html",
            controller : "adminabcController"

        })

});


