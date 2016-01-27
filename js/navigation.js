var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
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
      name: "Fixtures & Results",
      url: "#/fixtures",
      classis: "active"
    }, {
      name: "Players",
      url: "#/players",
      classis: "active"
    }, {
      name: "Gallery",
      url: "#/gallery",
      classis: "active"
    }
    //						 ,{
    //
    //      name: "Fan Corner",
    //      url: "#/fan-Corner"
    //
    //    }
    , {
      name: "About Us",
      url: "#/about-us",
      classis: "active"
    }, {
      name: "Tickets & Merchandize",
      url: "#/ticket-merchandize",
      classis: "active"
    }
  ];

  return {
    getnav: function() {
      return navigation;
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
