/**
 * Created by SkyNetServer on 9/14/2015.
 */


angular.module("drawApp")
    .service("dataService",function($firebaseArray){

        var ref = new Firebase("https://markone-drawapp.firebaseio.com/guests");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        this.guests = $firebaseArray(ref);

        var ref1 = new Firebase("https://markone-drawapp.firebaseio.com/adminPassword");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        this.adminPassword = $firebaseArray(ref);

        var ref2 = new Firebase("https://markone-drawapp.firebaseio.com/vitamins");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        this.vitamins = $firebaseArray(ref);





    });
