/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

    .controller("adminabcController",function($scope,$rootScope,dataService, $mdToast){

        $scope.showPasswordForm = true;
        $scope.showPageContent = false;
        var hardCodedPassword = "pakistanpakistan";

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

        $scope.guests = dataService.guests;
        $scope.vitamins = dataService.vitamins;
        $scope.number = '';

        $scope.addToHero = function() {

            $scope.existInList = null;
            $scope.existInVitamins = null;


            for (i = 0; i < $scope.guests.length; i++) {
                if ($scope.number == $scope.guests[i].number) {
                    $scope.existInList = i;


                    for (j = 0; j < $scope.vitamins.length; j++) {
                        console.log($scope.vitamins.length);

                        if ($scope.number == $scope.vitamins[j].number ) {
                            $scope.existInVitamins = true;
                        }
                    }
                    break;
                }
            }
            if($scope.existInList != null && $scope.existInVitamins == null) {

                $scope.vitamins.$add($scope.guests[ $scope.existInList]);
                $scope.showSimpleToast("details of " + $scope.number + " is added to admin list");
                $scope.number = '';

            }else if($scope.existInList != null && $scope.existInVitamins == true){

                $scope.showSimpleToast("Sorry this number is already exist in admin list you can not add it two times");
            }else if($scope.existInList == null){

                $scope.showSimpleToast("Sorry this number is not exist in Guests list, Please add this number in guests list first");
            }



        };

//toast code start
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        $scope.toastPosition = angular.extend({},last);
        $scope.getToastPosition = function() {
            sanitizePosition();
            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };
        function sanitizePosition() {
            var current = $scope.toastPosition;
            if ( current.bottom && last.top ) current.top = false;
            if ( current.top && last.bottom ) current.bottom = false;
            if ( current.right && last.left ) current.left = false;
            if ( current.left && last.right ) current.right = false;
            last = angular.extend({},current);
        }

        $scope.showSimpleToast = function(text) {
            $mdToast.show(
                $mdToast.simple()
                    .content(text)
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };

//toast code end
        $scope.del = function(index){

            $scope.vitamins.$remove(index);
console.log("admin del");
        };

    });
