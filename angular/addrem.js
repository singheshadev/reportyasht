/**
 * Created by lcom23_one on 1/27/2017.
 */
var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
    $scope.products=["product1","product2","product3"];
    $scope.var1="lion"
    $scope.addItem=function(){
        $scope.products.push($scope.additem);
        $scope.additem="";
    }
    $scope.index=$scope.products.length;
    $scope.removePro=function(x){
        $scope.products.splice(x,1);
    }
});
app.controller('myctrl2',function($scope){
    $scope.arr="abcd";

})