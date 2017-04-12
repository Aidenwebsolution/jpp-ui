// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'angular-loading-bar',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })

    .state('players', {
        url: "/players",
        templateUrl: "views/template.html",
        controller: 'PlayersCtrl'
    })

    .state('wallpaper', {
        url: "/wallpaper",
        templateUrl: "views/template.html",
        controller: 'WallpapperCtrl'
    })

    .state('gallery-inner', {
        url: "/gallery-inner/:id",
        templateUrl: "views/template.html",
        controller: 'GalleryInnerCtrl'
    })

    .state('wallpapper-inner', {
        url: "/wallpaper-inner/:id",
        templateUrl: "views/template.html",
        controller: 'WallpapperInnerCtrl'
    })

    .state('fan-corner', {
        url: "/fan-corner",
        templateUrl: "views/template.html",
        controller: 'FanCornerCtrl'
    })

    .state('gallery', {
        url: "/gallery",
        templateUrl: "views/template.html",
        controller: 'GalleryCtrl'
    })

    .state('fixtures', {
        url: "/fixtures/:id",
        templateUrl: "views/template.html",
        controller: 'FixturesCtrl'
    })

    .state('news-media', {
        url: "/news-media",
        templateUrl: "views/template.html",
        controller: 'NewsMediaCtrl'
    })

    .state('invite-friends', {
        url: "/invite-friends",
        templateUrl: "views/template.html",
        controller: 'InviteFriendsCtrl'
    })

    .state('news-detail', {
        url: "/news-detail",
        templateUrl: "views/template.html",
        controller: 'NewsDetailCtrl'
    })

    .state('ticket-merchandise', {
        url: "/ticket-merchandise",
        templateUrl: "views/template.html",
        controller: 'TicketMerchandizeCtrl'
    })


    .state('ticket', {
        url: "/ticket",
        templateUrl: "views/template.html",
        controller: 'TicketCtrl'
    })

    .state('jpp-tv', {
        url: "/jpp-tv",
        templateUrl: "views/template.html",
        controller: 'JPPTVCtrl'
    })

    .state('about-us', {
        url: "/about-us",
        templateUrl: "views/template.html",
        controller: 'AboutUsCtrl'
    })
    
    .state('points-table', {
        url: "/points-table",
        templateUrl: "views/template.html",
        controller: 'PointsCtrl'
    });

    if (isproduction) {
        $locationProvider.html5Mode(true);
    }

    $urlRouterProvider.otherwise("/");

});
firstapp.directive('fancyboxThumb', function() {
    return {
        restrict: 'C',
        replace: false,
        link: function($scope, element, attrs) {
            $('.fancybox-thumb').fancybox({
                prevEffect: 'none',
                nextEffect: 'none',
                helpers: {
                    title: {
                        type: 'outside'
                    },
                    thumbs: {
                        width: 70,
                        height: 70
                    }
                }
            });

        }
    };
});
firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
firstapp.filter('serverimage', function() {
    return function(input) {
        if (input) {
            return imgurl + input;
        } else {
            return "";
        }
    };
});
firstapp.filter('thumbimage', function() {
    return function(input) {
        if (input) {
            return mainurl + 'image/index?name=' + input + '&width=400';
        } else {
            return "";
        }
    };
});


firstapp.filter('teamColor', function() {
    return function(input) {

        var returnImg = "";
        switch (input) {
            case "1":
                returnImg += "patna";
                break;

            case "2":
                returnImg += "bengaluru";
                break;

            case "3":
                returnImg += "bengal";
                break;

            case "4":
                returnImg += "delhi";
                break;

            case "5":
                returnImg += "jaipur";
                break;

            case "6":
                returnImg += "puneri";
                break;

            case "7":
                returnImg += "telgu";
                break;

            case "8":
                returnImg += "mumba";
                break;

        }
        return returnImg;
    };
});


firstapp.filter('teamImg', function() {
    return function(input) {

        var returnImg = "img/team/";
        switch (input) {
            case "1":
                returnImg += "5.png";
                break;

            case "2":
                returnImg += "1.png";
                break;

            case "3":
                returnImg += "2.png";
                break;

            case "4":
                returnImg += "3.png";
                break;

            case "5":
                returnImg += "4.png";
                break;

            case "6":
                returnImg += "6.png";
                break;

            case "7":
                returnImg += "7.png";
                break;

            case "8":
                returnImg += "8.png";
                break;
            case "8":
                returnImg += "8.png";
                break;
            case "10":
            returnImg += "India.png";
            break;
            case "11":
            returnImg += "SouthKorea.png";
            break;
            case "12":
            returnImg += "USA.png";
            break;
            case "13":
            returnImg += "Iran.png";
            break;
            case "14":
            returnImg += "England.png";
            break;
            case "15":
            returnImg += "Bangladesh.png";
            break;
            case "16":
            returnImg += "Poland.png";
            break;
            case "16":
            returnImg += "Poland.png";
            break;
            case "16":
            returnImg += "Poland.png";
            break;
            case "17":
            returnImg += "Kenya.png";
            break;
            case "18":
            returnImg += "Australia.png";
            break;
            case "19":
            returnImg += "Argentina.png";
            break;
            case "20":
            returnImg += "Japan.png";
            break;
            case "21":
            returnImg += "Thailand.png";
            break;
            default:
                returnImg += "TBD.png";
        }
        return returnImg;
    };
});

firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function() {
                $element.css("min-height", windowHeight);
                console.log("Aiyyo!");
            };
            addHeight();
        }
    };
});
firstapp.directive('aplhaOnly', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
firstapp.directive('noPaste', function($filter) {
    return {
        scope: {},
        link: function(scope, element) {
            element.on('cut copy paste', function(event) {
                event.preventDefault();
            });
        }
    };
});

firstapp.directive('childHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var parentHeight = $('.parent-height').height();
            var addHeight = function() {
                $element.css("height", parentHeight);
            };
            addHeight();
        }
    };
});
firstapp.filter('cut', function() {
    return function(value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');
    };
});
firstapp.directive('mycircle', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var amount = 1;
            var myinterval = {};
            $element.ready(function() {
                console.log("DEMO");

                $element.hover(function() {
                    clearInterval(myinterval);
                }, function() {


                    myinterval = setInterval(function() {
                        var $element = $(element);
                        var $elementli = $element.children("li");
                        $abc = $elementli;



                        amount++;
                        var elewidth = $elementli.eq(0).width();
                        //                        console.log(elewidth);
                        var num = amount % elewidth;
                        if (num === 0 && amount > 0) {
                            amount = -15;
                            //                            console.log(amount);
                            var $firstelement = $elementli.eq(0);
                            $element.append("<li>" + $firstelement.html() + "</li>");
                            $firstelement.eq(0).remove();
                        }



                        for (var i = 0; i < $elementli.length; i++) {
                            $elementli.eq(i).css("transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-webkit-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-moz-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-ms-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-o-transform", "translateX(" + (-1 * amount) + "px)");
                        }

                    }, 10);

                });

                $element.trigger("mouseleave");


            });

        }
    };
});
firstapp.filter('semiIt',function () {
  return function (value) {
    console.log(value);
    if(value.toUpperCase().indexOf('SEMI') === -1){
      return value;
    }else{
      console.log(value.toUpperCase().split("SEMI"));
      return "semi "+ value.toUpperCase().split("SEMI")[1];
    }
  };
});
firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {
                    $event: event
                });
            });
        });
    };
});
firstapp.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var windowHeight = $(window).height();
            if (windowHeight > 600) {
                //$('#boutique').boutique();
            }
            if (this.pageYOffset >= windowHeight) {
                console.log(windowHeight);
                element.addClass('affix');
            } else {
                element.removeClass('affix');
            }
        });
    };
});
firstapp.filter('twodigit',function(){
  return function(value) {
      if(value < 10){
        return '0'+value;
      }else{
        return value;
      }
  };
});
firstapp.filter('spaceToPlus', function() {
    return function(text) {
        if (text) {
            var str = text.replace(/\s+/, "-");
            return str;
        }

    };
});
firstapp.filter('spaceToDash', function() {
    return function(text) {
      if(text) {
        var str = text.replace(/\s+/, "-").toLowerCase();
        return str;
      }
    };
});
firstapp.filter('hindimonth', function() {
    return function(date, onlymonth) {
        date = new Date(date);
        var onlyday = date.getDate();
        var onlyyear = date.getFullYear();
        var day = "";
        var dayname = "";
        if (date) {
            if (onlymonth) {

                switch (date.getMonth()) {
                    case 0:
                        day = "जनवरी";
                        break;
                    case 1:
                        day = "फरवरी";
                        break;
                    case 2:
                        day = "मार्च";
                        break;
                    case 3:
                        day = "अप्रैल";
                        break;
                    case 4:
                        day = "मई";
                        break;
                    case 5:
                        day = "जून";
                        break;
                    case 6:
                        day = "जुलाई";
                        break;
                    case 7:
                        day = "अगस्त";
                        break;
                    case 8:
                        day = "सितम्बर";
                        break;
                    case 9:
                        day = "अक्टूबर";
                        break;
                    case 10:
                        day = "नवंबर";
                        break;
                    case 11:
                        day = "दिसंबर";
                        break;
                };
                return onlyday + " " + day + " " + onlyyear;
            } else {
                switch (date.getMonth()) {
                    case 0:
                        day = "जनवरी";
                        break;
                    case 1:
                        day = "फरवरी";
                        break;
                    case 2:
                        day = "मार्च";
                        break;
                    case 3:
                        day = "अप्रैल";
                        break;
                    case 4:
                        day = "मई";
                        break;
                    case 5:
                        day = "जून";
                        break;
                    case 6:
                        day = "जुलाई";
                        break;
                    case 7:
                        day = "अगस्त";
                        break;
                    case 8:
                        day = "सितम्बर";
                        break;
                    case 9:
                        day = "अक्टूबर";
                        break;
                    case 10:
                        day = "नवंबर";
                        break;
                    case 11:
                        day = "दिसंबर";
                        break;
                };
                switch (date.getDay()) {
                    case 0:
                        dayname = "रविवार";
                        break;
                    case 1:
                        dayname = "सोमवार";
                        break;
                    case 2:
                        dayname = "मंगलवर";
                        break;
                    case 3:
                        dayname = "बुधवार";
                        break;
                    case 4:
                        dayname = "गुरुवार";
                        break;

                    case 5:
                        dayname = "शुक्रवार";
                        break;
                    case 6:
                        dayname = "शनिवार";
                        break;
                };
                return dayname + " " + onlyday + " " + day + " " + onlyyear;

            }
        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
