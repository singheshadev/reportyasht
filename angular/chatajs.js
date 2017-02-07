var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
    $scope.message="";
    $scope.messages=[];
    $scope.reply1=function(){
        if(($scope.message=="HI")||($scope.message=="Hi")||($scope.message=="hi"))
        {   $scope.check="";
            $scope.messages.push($scope.message);
            $scope.mes="hi!!";
            $scope.messages.push($scope.mes);
            $scope.message="";

        }
        else if(($scope.message=="who are you"))
        {
            $scope.messages.push($scope.message);
            $scope.mes="I am bot built on angular";
            $scope.messages.push($scope.mes);
            $scope.message="";
        }
        else if(($scope.message=="Whats current time")||($scope.message=="time")||($scope.message=="time?"))
        {
            $scope.messages.push($scope.message);
            $scope.mes=new Date();
            $scope.messages.push($scope.mes);
            $scope.message="";
        }
        else if(($scope.message=="take me to google"))
        {
            $scope.messages.push($scope.message);
            $scope.mes="<a href='google.com'>click on me<a>";
            $scope.messages.push($scope.mes);
            $scope.message="";
        }
        else
        {
            $scope.messages.push($scope.message);
            $scope.mes="i cant undersand what you are saying";
            $scope.messages.push($scope.mes);
            $scope.message="";
        }
    }
    $scope.mes="";
});
