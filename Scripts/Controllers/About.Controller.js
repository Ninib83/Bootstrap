/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("AboutController", [
        "$scope",
        function ($scope) {
            $scope.title = "About us";
        }
    ]);