var mainurl = "http://admin.jaipurpinkpanthers.com/beta/index.php/"
    // var mainurl1 = "http://admin.jaipurpinkpanthers.com/index.php/";
    // var mainurl = "http://192.168.0.101/jppbackend/index.php/";
    //wohlig url for testing

var imgurl = "http://admin.jaipurpinkpanthers.com/beta/uploads/";
var tempUrl = "http://admin.jaipurpinkpanthers.com/beta/index.php/json/";
var tempimgurl = "http://admin.jaipurpinkpanthers.com/beta/uploads/";
// var imgurl = "http://192.168.1.107/jppbackend/uploads/";
// var imgurl="";
var adminurl = mainurl + "json/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Fixtures & Results",
            // url: "fixtures({id:1})",
            url: "Comingsoon",
            classis: "active"
        }, {
            name: "Panther World",
            link: "http://jaipurpinkpanthers.com/beta/pantherworld/",
            id: "panther",
            classis: "active",
            subnav: []
                // {
                //     name: "Wallpapers",
                //     url: "wallpaper",
                //     classis: "active"
                // }, {
                //     name: "Gallery",
                //     url: "gallery",
                //     classis: "active"
                // }, {
                //     name: "Games",
                //     link: "jpp-tv",
                //     classis: "active"
                // }, {
                //     name: "JPP TV",
                //     url: "jpp-tv",
                //     classis: "active"
                // }
        }, {
            name: "Tickets",
            // url: "ticket",
            url: "Comingsoon",
            classis: "active"
        }, {
            name: "Merchandise",
            // url: "ticket-merchandise",
            url: "Comingsoon",
            classis: "active",
            // highlighter: "high"
        }, {
            name: "Players",
            url: "players",
            // url: "Comingsoon",
            classis: "active"
        },
        // {
        //     name: "Photo Gallery",
        //     url: "gallery",
        //     classis: "active"
        // },
        // {
        //     name: "JPP TV",
        //     url: "jpp-tv",
        //     classis: "active"
        // },
        // {
        //     name: "Wallpapers",
        //     url: "wallpaper",
        //     classis: "active"
        // },
        {
            name: "News",
            url: "news-media",
            classis: "active"
        }, {
            name: "About",
            url: "about-us",
            classis: "active"
        }, {
            name: "Fan Corner",
            url: "fan-corner",
            classis: "active"
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },

        getAllSliders: function (callback) {
            $http.get(adminurl + "getAllSliders").then(callback);
        },
        contactus: function (register, callback) {
            $http({
                url: adminurl + 'contactus',
                method: 'POST',
                data: register
            }).success(callback);
        },
        submitFriends: function (frienddetail, callback) {
            $http({
                url: adminurl + 'submitClan',
                method: 'POST',
                data: frienddetail
            }).success(callback);
        },
        getallpoint: function (callback) {
            $http.get(adminurl + "getallpoint").then(callback);
        },
        getLatestMatch: function (callback) {
            $http.get(adminurl + "getLatestMatch").then(callback);
        },
        getScheduleSeason4: function (callback) {
            $http.get(adminurl + "getScheduleSeason4").then(callback);
        },
        getHomeGameSeason4: function (callback) {
            $http.get(adminurl + "getHomeGameSeason4").then(callback);
        },
        getAllGallery: function (callback) {
            $http.get(adminurl + "getAllGallery").then(callback);
        },
        getAllSeason: function (callback) {
            $http.get(adminurl + "getAllSeason").then(callback);
        },
        getAllVideoGallery: function (callback) {
            $http.get(adminurl + "getAllVideoGallery").then(callback);
        },
        getallnews: function (callback) {
            $http.get(adminurl + "getallnews").then(callback);
        },
        getWallpaperCategoryForDesktop: function (callback) {
            $http.get(adminurl + "getWallpaperCategoryForDesktop").then(callback);
        },
        getSchedule: function (callback) {
            $http.get(adminurl + "getSchedule").then(callback);
        },
        getGallerySlide: function (request, callback) {
            $http.get(adminurl + "getGallerySlide?galleryid=" + request).then(callback);
        },

        getsingleplayer: function (id, callback) {
            $http.get(tempUrl + "getsingleplayer?id=" + id).then(callback);
        },


        getallwallpaper: function (request, callback) {
            $http.get(adminurl + "getallwallpaper?wallpapercategory=" + request.wallpaperid + "&pageno=" + request.pageno).success(callback);
        },
        getSlider: function (callback) {
            $http.get(adminurl + "getAllSliders").then(callback);
        },

        getguesswho: function (callback) {
            $http.get(adminurl + "getguesswho").success(callback);
        },
        getpantherworldguesswho: function (callback) {
            $http.get(tempUrl + "getpantherworldguesswho").then(callback);
        },

        getAuthenticate: function (callback) {
                $http.get(adminurl + "authenticate").success(callback);
            }
            // callProfile: function (callback) {
            //     //console.log('Navigation form data: ', formData);
            //     $http({
            //         url: adminurl + 'user/profile',
            //         method: 'POST',
            //         withCredentials: true

        //     }).then(function (data) {
        //         data = data.data;
        //         callback(data);
        //     });
        // }
        ,
        logoutUser: function (callback) {
            $http.get(adminurl + "logout").success(callback);
        },
        submitSignup: function (formData, callback) {
            $http({
                url: adminurl + 'signup',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        signupOtpSubmit: function (formData, callback) {
            $http({
                url: adminurl + 'signupotpsubmit',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        forgotPassword: function (formData, callback) {
            $http({
                url: adminurl + 'forgotpassword',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        forgotPasswordSubmit: function (formData, callback) {
            $http({
                url: adminurl + 'forgotpasswordsubmit',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        submitLogin: function (loginData, callback) {
            $http({
                url: adminurl + 'login',
                method: 'POST',
                withCredentials: true,
                data: loginData
            }).success(callback);
        },
        getallplayers: function (callback) {
            $http.get(tempUrl + "getallplayers").then(callback);
        },

        getcongratulation: function (callback) {
            $http.get(tempUrl + "getcongratulation").success(callback);
        },

        getjourney: function (callback) {
            $http.get(tempUrl + "getjourney").success(callback);
        },
        //  getjourney: function(callback) {
        //     $http.get(adminurl + "getjourney").success(callback);
        // },
        changeTimerRapid: function () {
            var rapidTimer = $.jStorage.get("rapidTimer");
            var returnVal;
            if (rapidTimer && rapidTimer != 1) {
                returnVal = rapidTimer - 1;
                $.jStorage.set("rapidTimer", returnVal);
            } else if (rapidTimer != 1) {
                $.jStorage.set("rapidTimer", 90);
                returnVal = 90;
            } else {
                $.jStorage.set("rapidTimer", null);
                returnVal = 0;
            }
            return returnVal;
        },

        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },


    };
});