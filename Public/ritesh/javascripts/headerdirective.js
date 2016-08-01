/**
 * Created by abc on 21/07/2016.
 */
var app=angular.module('app');

app .directive('headerDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'veiws/headerdirective.html',
        replace:'true'
    };
})
app .directive('footerDirective',function() {
    return{
        restrict:'AEC',
        templateUrl:'veiws/footerdirective.html',
        replace:'true'
    };
})