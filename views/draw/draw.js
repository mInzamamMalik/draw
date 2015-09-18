/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

.controller("drawController",function($scope,dataService, $mdToast){
    $scope.password = "";
    $scope.hardCodedPassword = "pakistanpakistan";
    $scope.showPasswordForm = true;
    $scope.showPageContent = false;
    $scope.errorText= '';
    $scope.guests = dataService.guests;
    $scope.vitamins = [];
    $scope.winners  = [];


    $scope.checkPassword = function(){
        console.log($scope.password);
        if($scope.password == $scope.hardCodedPassword){
            $scope.showPasswordForm = false;
            $scope.showPageContent = true;
        }else{
            $scope.errorText = 'You have entered wrong password';

        }
    };

    $scope.doDraw = function(){
        if($scope.guests.length == 0){
            alert("data is retriving from server try few seconds latter,if constant check internet connection");
        }else{
            alert($scope.guests[Math.floor(Math.random() * $scope.guests.length)].number);

        }
    };

    $scope.del = function(index){

        $scope.guests.$remove(index);

    };


    });