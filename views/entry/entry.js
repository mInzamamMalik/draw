/**
 * Created by SkyNetServer on 9/14/2015.
 */
angular.module("drawApp")

.controller("entryController",function($scope,$mdToast,dataService){

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

//firebase code start
//    var ref = new Firebase("https://markone-drawapp.firebaseio.com/guests");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.guests = dataService.guests;
//firebase code end

//page logic code start
    $scope.name = "";
    $scope.number = "";
    $scope.mobile = "";


    $scope.add = function(){


        $mdToast.hide();

        var alreadyExist = 0;
        var empty = 0;


        for(i=0 ; i<$scope.guests.length ; i++){
            if($scope.number == $scope.guests[i].number){
                alreadyExist = 1;
                $scope.showSimpleToast("card number already exist");

            }
        }

        if($scope.name == '' || $scope.number == '' || $scope.mobile == ''){
            empty = 1;
            $scope.showSimpleToast('you can not leave any box empty');
        }

        if(!alreadyExist && !empty){
                $scope.guests.$add({
                    name: $scope.name,
                    number: $scope.number,
                    mobile: $scope.mobile
                });

                $scope.showSimpleToast('Thank you for coming ' + $scope.name);

                $scope.name = "";
                $scope.number = "";
                $scope.mobile = "";
        }
    };

    $scope.del = function(index){

        $scope.guests.$remove(index);

    };
//page logic code end


//controller end
});