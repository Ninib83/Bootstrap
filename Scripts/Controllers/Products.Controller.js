/// <reference path="../angular.js" />

angular.module("webShopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Add And Delete Products";
            $scope.newProduct = {};

            $scope.addProduct = function () {
                $scope.newProduct.id = Date.now();
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.saveProducts();
                $("#newProductModal").modal("hide");
            };

            $scope.remove = function (index) {
                $scope.products.splice(index,1);

                $scope.saveProducts();
            };
        }
    ]);