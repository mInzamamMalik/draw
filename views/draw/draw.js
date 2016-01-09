/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

.controller("drawController",function($scope,dataService, $mdToast){
    $scope.password = "";
        var hardCodedPassword = "pakistanpakistan";
    $scope.showPasswordForm = true;
    $scope.showPageContent = false;
    $scope.errorText= '';
    $scope.guests = dataService.guests;
    $scope.vitamins = dataService.vitamins;
    $scope.winners  = [];


    $scope.checkPassword = function(){
        if($scope.password == hardCodedPassword){
            $scope.showPasswordForm = false;
            $scope.showPageContent = true;
        }else{
            $scope.errorText = 'Sorry wrong password';

            setTimeout(function(){

                $scope.errorText = ''

            },3000);

        }
    };

    $scope.doDraw = function(){

        var randNumb;
        var matched = 0;

        if($scope.vitamins.length != 0){
            $scope.winners.push($scope.vitamins[0]);

            $scope.vitamins.$remove(0)


        }else{

            if($scope.guests.length == 0){
                alert("data is retriving from server try few seconds latter,if constant check internet connection");
            }else{
                randNumb = Math.floor(Math.random() * $scope.guests.length);


                for(var i = 0 ; i < $scope.winners.length ; i++){

                    if($scope.winners[i].number == $scope.guests[randNumb].number){
                        matched =1;
                    }
                }

                if(matched != 1) {
                    $scope.winners.push($scope.guests[randNumb]);
                }else if($scope.winners.length < $scope.guests.length){
                    $scope.doDraw();
                }else{
                    alert("can't do more draw, maximum limit reached");
                }
            }
        }
    };

    $scope.del = function(index){

        $scope.guests.$remove(index);

        console.log("draw del");

    };


    });