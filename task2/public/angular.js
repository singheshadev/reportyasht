var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
        templateUrl:'displaydata.html',
        controller:'viewController'
       })
        .when('/dummy',{
            templateUrl:'../html/dummy.html',
            controller:'dummyController'
        })
        .when('/dummy2',{
            templateUrl:'../html/dummy1.html',
            controller:'dummy2Controller'
        })
    .when('/adddata',{
        templateUrl:'adddata.html',
        controller:'addController'
    })
    .when('/editdata',{
        templateUrl:'editdata.html',
        controller:'editController'
    });

});
// $http.post("/updateDate/"+data._id,data);
var uid;
app.controller('MainController',MainController);
function MainController($scope,$window) {
    $scope.abc="abcde";
    $scope.redir=function()
    {
        $window.location='view.html';
    }

}
app.controller('viewController',function($scope,$location,$http){

    $http.get("http://localhost:8086/displayData").then(function (response) {


        $scope.dispdata = response.data;
        console.log($scope.dispdata[0]);
    });
    $scope.deletedata=function(x){
       $http.delete('http://localhost:8086/deleteData/'+x._id);
    }
    $scope.myorder=function(xyz){
        $scope.Orderb=xyz;
    };
    $scope.gotoEdit=function(data){uid=data._id;
        $location.path('editdata');
    }
   $scope.redirect=function()
   {
       $location.path('adddata');
   }
});
app.controller('addController',function($scope,$http,$location){
    $scope.addData=function() {
        var data = {
            username: $scope.uname,
            name: $scope.name,
            city: $scope.city,
            email: $scope.email,
            password: $scope.password

        };



        var file = $scope.myFile;
        var uploadUrl = "http://localhost:8086/multer";
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .then(function () {
                console.log("success!!");
            });
        $http.post("http://localhost:8086/register", data);
        $location.path('/');
    };
});
app.controller('editController',function($scope,$http,$location){console.log(uid);
   $http.get('http://localhost:8086/getData/'+uid).then(function(response){
       $scope.curdata=response.data;console.log($scope.curdata);
   });
    $scope.update=function(x){
        $http.post('http://localhost:8086/updateData/'+uid,x).then(function(response){

        });$location.path('/');
    }
});
app.controller('dummyController',function($scope){

});
app.controller('dummy2Controller',function($scope){

});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
MainController.$inject=['$scope','$window'];