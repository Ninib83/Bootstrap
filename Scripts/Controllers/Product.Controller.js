/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("productController", [
        "$scope",
        function ($scope) {
            $scope.title = "Product";
        }
    ]);