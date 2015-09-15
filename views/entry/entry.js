/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

.controller("entryController",function($scope,$firebaseArray){

    var ref = new Firebase("https://markone-drawapp.firebaseio.com/guests");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.guests = $firebaseArray(ref);

    $scope.name = "";
    $scope.number = "";
    $scope.mobile = "";


    $scope.add = function(){

        var alreadyExist = null;
        var empty = null;
        var wrongNumber = null;


        for(i=0 ; i<$scope.guests.length ; i++){
            if($scope.number == $scope.guests[i].number){
                exist = 1;
            }
        }
        if($scope.mobile.toString().length != 11){
            wrongNumber = 1;
        }
        if($scope.name == '' || $scope.number == '' || $scope.mobile == ''){
            empty = 1;
        }

        if(!exist && !empty && !wrongNumber){
            if($scope.mobile.toString().length == 11 ) {
                $scope.guests.$add({
                    name: $scope.name,
                    number: $scope.number,
                    mobile: $scope.mobile
                });
        }
    }
    }

});