// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })
    .state('players', {
        url: "/players",
        templateUrl: "views/template.html",
        controller: 'PlayersCtrl'
    })
    .state('wallpapper', {
        url: "/wallpapper",
        templateUrl: "views/template.html",
        controller: 'WallpapperCtrl'
    })
    .state('wallpapper-inner', {
        url: "/wallpapper-inner",
        templateUrl: "views/template.html",
        controller: 'WallpapperInnerCtrl'
    })
    .state('gallery', {
        url: "/gallery",
        templateUrl: "views/template.html",
        controller: 'GalleryCtrl'
    })
    .state('news-media', {
        url: "/news-media",
        templateUrl: "views/template.html",
        controller: 'NewsMediaCtrl'
    })
    .state('news-detail', {
        url: "/news-detail",
        templateUrl: "views/template.html",
        controller: 'NewsDetailCtrl'
    })
    .state('ticket-merchandize', {
        url: "/ticket-merchandize",
        templateUrl: "views/template.html",
        controller: 'TicketMerchandizeCtrl'
    })

    .state('about-us', {
        url: "/about-us",
        templateUrl: "views/template.html",
        controller: 'AboutUsCtrl'
    });

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
