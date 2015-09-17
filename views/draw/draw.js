/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

.controller("drawController",function($scope,$firebaseArray, $mdToast){
    $scope.password = "";
    $scope.hardCodedPassword = "pakistanpakistan";
    $scope.showPasswordForm = true;
    $scope.showPageContent = false;
    $scope.errorText= '';
    $scope.winners  = [
        35353,
        35354,
        35355,
        35356,
        35357
    ];


    $scope.checkPassword = function(){
        console.log($scope.password);
        if($scope.password == $scope.hardCodedPassword){
            $scope.showPasswordForm = false;
            $scope.showPageContent = true;
        }else{
            $scope.errorText = 'You have entered wrong password';

        }
    }

});