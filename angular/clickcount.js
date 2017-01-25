var app=angular.module('myApp',[]);
app.controller('myctrl',function ($scope) {
    $scope.click=0;
    $scope.add1=function()
    {
        $scope.click=$scope.click+1;
    }

})