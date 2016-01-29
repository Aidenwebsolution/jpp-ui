// var mainurl = "http://wohlig.io:81/callApi/takecare/";
var mainurl = "http://wohlig.co.in/jppbackend/index.php/";
// var mainurl = "http://localhost/jppbackend/index.php/";
var imgurl = "http://wohlig.co.in/jppbackend/uploads/";
// var imgurl = "http://localhost/jppbackend/uploads/";
// var imgurl="";
var adminurl = mainurl + "json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
      name: "Fixtures & Results",
      url: "#/fixtures",
      classis: "active"
    }, {
      name: "Players",
      url: "#/players",
      classis: "active"
    }, {
      name: "Wallpapers",
      url: "#/wallpaper",
      classis: "active"
    }, {
      name: "News",
      url: "#/news-media",
      classis: "active",
      subnav: [{
        name: "Press Release",
        classis: "active",
        link: "#/Press Release"
      }, {
        name: "Interviews",
        classis: "active",
        link: "#/Interviews"
      }]
    }, {
      name: "Gallery",
      url: "#/gallery",
      classis: "active"
    }, {
      name: "Tickets & Merchandize",
      url: "#/ticket-merchandize",
      classis: "active"
    }
    //						 ,{
    //
    //      name: "Fan Corner",
    //      url: "#/fan-Corner"
    //
    //    }
    , {
      name: "About",
      url: "#/about-us",
      classis: "active"
    }
  ];

  return {
    getnav: function() {
      return navigation;
    },
    getAllSliders: function(callback) {
      $http.get(adminurl + "getAllSliders").success(callback);
    },
    getallpoint: function(callback) {
      $http.get(adminurl + "getallpoint").success(callback);
    },
    getAllGallery: function(callback) {
      $http.get(adminurl + "getAllGallery").success(callback);
    },
    getAllVideoGallery: function(callback) {
      $http.get(adminurl + "getAllVideoGallery").success(callback);
    },
    getallnews: function(callback) {
      $http.get(adminurl + "getallnews").success(callback);
    },
    getSchedule: function(callback) {
      $http.get(adminurl + "getSchedule").success(callback);
    },
    getGallerySlide: function(request, callback) {
      $http.get(adminurl + "getGallerySlide?galleryid=" + request).success(callback);
    },    getWallpaper: function (request, callback) {
      $http.get(adminurl+"getWallpaper?type="+request).success(callback);
    },
    makeactive: function(menuname) {
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
