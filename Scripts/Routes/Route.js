/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />



angular.module("webShopModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

            .when("/", {
                templateUrl: "Views/Home.html",
                controller: "HomeController",
                caseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Product", {
                templateUrl: "Views/Product.html",
                controller: "ProductController",
                caseInsensitiveMatch: true,
                activeTab: "Product"
            })
            .when("/Products", {
                templateUrl: "Views/Products.html",
                controller: "ProductsController",
                caseInsensitiveMatch: true,
                activeTab: "Products"
            })
            .when("/About", {
                templateUrl: "Views/About.html",
                controller: "AboutController",
                caseInsensitiveMatch: true,
                activeTab: "About"
            });
        }
    ]);