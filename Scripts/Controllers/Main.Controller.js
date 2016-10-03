/// <reference path="../angular.js" />


angular.module("webShopModule")
        .controller("MainController", [
            "$scope",
            "$route",

            function ($scope, $route) {
                $scope.$route = $route;
                $scope.products = [];

                $scope.loadProducts = function () {
                    var dataString = localStorage.getItem("Products");

                    if (dataString)
                        $scope.products = JSON.parse(dataString);
                };
                $scope.saveProducts = function () {
                    var jsonString = JSON.stringify($scope.products);
                    localStorage.setItem("Products", jsonString);
                };


                $scope.go = function (url) {
                    $route.path(url);
                }

                $scope.loadProducts();             
            }
        ]);