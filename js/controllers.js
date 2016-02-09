  angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'ngAnimate', 'angular-loading-bar'])

  .controller('HomeCtrl', function($scope, TemplateService, NavigationService, $interval, $filter) {

    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    
    $scope.latestmatch = {};
    $scope.countdown = {};
    $scope.image = [{
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Gangadhari Mallesh',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p2.png',
      name: 'Mallesh Gangadhari ',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p3.png',
      name: 'Gangadhari',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Gangadhari Mallesh',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Gangadhari Mallesh',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Gangadhari Mallesh',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Mallesh Gangadhari Mallesh',
      desg: 'Raider'
    }, {
      src: 'img/player-slide.png',
      src2: 'img/player/p1.png',
      name: 'Gangadhari Mallesh',
      desg: 'Raider'
    }];
    NavigationService.getAllSliders(function(data) {
      $scope.news = data;
      $scope.news = $filter('orderBy')($scope.news, "order");
    })
    NavigationService.getLatestMatch(function(data) {
      $scope.latestmatch = data;
      // $scope.schedule = $filter('orderBy')($scope.schedule, "order");
      $scope.latestmatch.team1img = _.find($scope.teams, {
        "name": $scope.latestmatch.team1
      }).image;
      $scope.latestmatch.team2img = _.find($scope.teams, {
        "name": $scope.latestmatch.team2
      }).image;
      $scope.refreshTimer($scope.latestmatch.starttimedate);
      console.log($scope.latestmatch);
    })
    $scope.refreshTimer = function(eventTime) {
      eventTime = new Date(eventTime);
      console.log(eventTime);
      $scope.rightNow = new Date();
      $scope.diffTime = eventTime - $scope.rightNow;
      var duration = moment.duration($scope.diffTime, 'milliseconds');
      $interval(function() {

        duration = moment.duration(duration - 1000, 'milliseconds');
        $scope.countdown.hours = duration.hours() + (duration.days() * 24);
        $scope.countdown.minutes = duration.minutes();
        $scope.countdown.seconds = duration.seconds();
      }, 1000)
    }
    NavigationService.getallpoint(function(data) {
      $scope.table = data;
      $scope.table = $filter('orderBy')($scope.table, "order");
      console.log($scope.table);
    })
    var clickCount = 0;
    $scope.changeSlide = function(data) {
      $scope.currentActive = data;
      if (clickCount == 0) {

      }
      $scope.currentActive.active = true;
    }

    $scope.tab2 = 'fb';
    $scope.classa = 'actives';
    $scope.classb = '';
    $scope.classc = '';

    $scope.tabchange = function(tab, a) {
      //        console.log(tab);
      $scope.result = [];
      $scope.allresult = [];
      $scope.tab2 = tab;
      if (a == 1) {
        $scope.classa = "actives";
        $scope.classb = '';
        $scope.classc = '';
      } else if (a == 2) {

        $scope.classb = "actives";
        $scope.classa = '';
        $scope.classc = '';
      } else {

        $scope.classa = '';
        $scope.classc = "actives";
        $scope.classb = '';
      }
    };

    $scope.wallpapper = [{
      img: "img/wallpapper/w5.jpg"
    }, {
      img: "img/wallpapper/w5.jpg"
    }, {
      img: "img/wallpapper/w6.jpg"
    }, {
      img: "img/wallpapper/w7.jpg"
    }, {
      img: "img/wallpapper/w4.jpg"
    }, {
      img: "img/wallpapper/w5.jpg"
    }, {
      img: "img/wallpapper/w6.jpg"
    }, {
      img: "img/wallpapper/w7.jpg"
    }];


    $scope.player = [{
      image: "img/player/p1.png",
      name: "Gangadhari Mallesh",
      desg: "Raider",
    }, {

      image: "img/player/p2.png",
      name: "RAJESH NARWAL",
      desg: "Raider",
    }, {

      image: "img/player/p3.png",
      name: "ROHIT RANA",
      desg: "DEFENDER",
    }, {

      image: "img/player/p4.png",
      name: "RAN SINGH",
      desg: "DEFENDER",
    }, {

      image: "img/player/p5.png",
      name: "BALBIR SINGH",
      desg: "Raider",
    }, {

      image: "img/player/p6.png",
      name: "JASVIR SINGH",
      desg: "Raider",
    }, {

      image: "img/player/p1.png",
      name: "Gangadhari Mallesh",
      desg: "Raider",
    }, {

      image: "img/player/p2.png",
      name: "RAJESH NARWAL",
      desg: "Raider",
    }, {

      image: "img/player/p3.png",
      name: "ROHIT RANA",
      desg: "DEFENDER",
    }, {

      image: "img/player/p4.png",
      name: "RAN SINGH",
      desg: "DEFENDER",
    }, {

      image: "img/player/p5.png",
      name: "BALBIR SINGH",
      desg: "Raider",
    }, {

      image: "img/player/p6.png",
      name: "JASVIR SINGH",
      desg: "Raider",
    }];
    $scope.scrollTo = function(image, ind) {
      $scope.listposition = {
        left: (IMAGE_WIDTH * ind * -1) + "px"
      };
      $scope.selected = image;
    }
    $scope.teams = [{
      "id": "1",
      "type": "0",
      "name": "Patna Pirates",
      "image": "img/team/5.png",
      "imagelogo": "img/team/55.png",
      "colorpoint": "patna",
      "content": ""
    }, {
      "id": "2",
      "type": "0",
      "name": "Bengaluru Bulls",
      "image": "img/team/1.png",
      "imagelogo": "img/team/11.png",
      "colorpoint": "bengaluru",
      "content": ""
    }, {
      "id": "3",
      "type": "0",
      "name": "Bengal Warriors",
      "image": "img/team/2.png",
      "imagelogo": "img/team/22.png",
      "colorpoint": "bengal",
      "content": ""
    }, {
      "id": "4",
      "type": "0",
      "name": "Dabang Delhi",
      "image": "img/team/3.png",
      "imagelogo": "img/team/33.png",
      "colorpoint": "delhi",
      "content": ""
    }, {
      "id": "5",
      "type": "0",
      "name": "Jaipur Pink Panthers",
      "image": "img/team/4.png",
      "imagelogo": "img/team/44.png",
      "colorpoint": "jaipur",
      "content": ""
    }, {
      "id": "6",
      "type": "0",
      "name": "Puneri Paltan",
      "image": "img/team/6.png",
      "imagelogo": "img/team/66.png",
      "colorpoint": "puneri",
      "content": ""
    }, {
      "id": "7",
      "type": "0",
      "name": "Telegu Titans",
      "image": "img/team/7.png",
      "imagelogo": "img/team/77.png",
      "colorpoint": "telgu",
      "content": ""
    }, {
      "id": "8",
      "type": "0",
      "name": "U Mumba",
      "image": "img/team/8.png",
      "imagelogo": "img/team/88.png",
      "colorpoint": "mumba",
      "content": ""
    }];

  })

  .controller('FixturesCtrl', function($scope, TemplateService, NavigationService,$stateParams, $timeout) {
      //Used to name the .html file
      $scope.oneAtATime = true;
      $scope.template = TemplateService.changecontent("fixtures");
      $scope.menutitle = NavigationService.makeactive("Fixtures & Results");
      TemplateService.title = $scope.menutitle;
      $scope.navigation = NavigationService.getnav();
      $scope.schedules = [];
      $scope.loaded = false;
      $scope.fixtureid=$stateParams.id;
      var i = 0;
      $scope.openAccordion = function(item) {
        item.isOpen = true;
        item.classes = "panel-open";
      };
      NavigationService.getSchedule(function(data) {
        $scope.schedules = data;
        console.log(data);
        $scope.schedules[0].isOpen = false;
        _.each($scope.schedules, function(key) {
          key.team1img = _.find($scope.teams, {
            "name": key.team1
          }).image;
          key.team2img = _.find($scope.teams, {
            "name": key.team2
          }).image;
          key.team1imglogo = _.find($scope.teams, {
            "name": key.team1
          }).imagelogo;
          key.team2imglogo = _.find($scope.teams, {
            "name": key.team2
          }).imagelogo;
          key.team1color = _.find($scope.teams, {
            "name": key.team1
          }).colorpoint;
          key.team2color = _.find($scope.teams, {
            "name": key.team2
          }).colorpoint;
        })
        if($scope.fixtureid == 1){
          $scope.openAccordion($scope.schedules[0]);

        }else{
          $scope.openAccordionById($scope.fixtureid)
        }
      });
      $scope.openAccordionById=function(id){
        console.log(id);
      _.each($scope.schedules,function(key){
        if(key.id == $scope.fixtureid){
          key.isOpen=true;
          key.classes="panel-open";
        }

      });
      }
      $scope.teams = [{
        "id": "1",
        "type": "0",
        "name": "Patna Pirates",
        "image": "img/team/5.png",
        "imagelogo": "img/team/55.png",
        "colorpoint": "patna",
        "content": ""
      }, {
        "id": "2",
        "type": "0",
        "name": "Bengaluru Bulls",
        "image": "img/team/1.png",
        "imagelogo": "img/team/11.png",
        "colorpoint": "bengaluru",
        "content": ""
      }, {
        "id": "3",
        "type": "0",
        "name": "Bengal Warriors",
        "image": "img/team/2.png",
        "imagelogo": "img/team/22.png",
        "colorpoint": "bengal",
        "content": ""
      }, {
        "id": "4",
        "type": "0",
        "name": "Dabang Delhi",
        "image": "img/team/3.png",
        "imagelogo": "img/team/33.png",
        "colorpoint": "delhi",
        "content": ""
      }, {
        "id": "5",
        "type": "0",
        "name": "Jaipur Pink Panthers",
        "image": "img/team/4.png",
        "imagelogo": "img/team/44.png",
        "colorpoint": "jaipur",
        "content": ""
      }, {
        "id": "6",
        "type": "0",
        "name": "Puneri Paltan",
        "image": "img/team/6.png",
        "imagelogo": "img/team/66.png",
        "colorpoint": "puneri",
        "content": ""
      }, {
        "id": "7",
        "type": "0",
        "name": "Telegu Titans",
        "image": "img/team/7.png",
        "imagelogo": "img/team/77.png",
        "colorpoint": "telgu",
        "content": ""
      }, {
        "id": "8",
        "type": "0",
        "name": "U Mumba",
        "image": "img/team/8.png",
        "imagelogo": "img/team/88.png",
        "colorpoint": "mumba",
        "content": ""
      }];
    })
    .controller('GalleryInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
      //Used to name the .html file
      $scope.template = TemplateService.changecontent("gallery-inner");
      $scope.menutitle = NavigationService.makeactive("Gallery");
      TemplateService.title = $scope.menutitle;
      $scope.navigation = NavigationService.getnav();
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.galleryid = $stateParams.id;
      console.log($scope.galleryid);
      NavigationService.getAllGallery(function(data) {
        $scope.galleryArr = data;
        $scope.gallerycategory = _.find($scope.galleryArr, {
          "id": $scope.galleryid
        }).name;
      })
      NavigationService.getGallerySlide($scope.galleryid, function(data) {
        console.log(data);
        $scope.slides = data;
      });



    })

  .controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("gallery");
    $scope.menutitle = NavigationService.makeactive("Gallery");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.photos = true;
    $scope.getPhotos = function() {
      NavigationService.getAllGallery(function(data) {
        $scope.slides = data;
        $scope.slides = $filter('orderBy')($scope.slides, "order");
        console.log($scope.slides);
      });
    };
    $scope.getPhotos();
    var slides = $scope.slides = [];
    $scope.videos = [];
    var currIndex = 0;

    $scope.getVideos = function() {
      NavigationService.getAllVideoGallery(function(data) {
        $scope.videos = data;
        $scope.videos = $filter('orderBy')($scope.videos, "order");
        console.log($scope.videos);
      });
    };
    $scope.changeTab = function(value) {
      if (value == true) {
        $scope.photos = true;
        $scope.getPhotos();
      } else {
        $scope.photos = false;
        $scope.getVideos();
      }
    };

  })

  .controller('WallpapperCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wallpapper");
    $scope.menutitle = NavigationService.makeactive("Wallpapers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.getWallpaperCategoryForDesktop(function(data) {
      $scope.wallpapper = data;
      console.log(data)
    })
    $scope.wallpapper = [{
      image: "img/wallpapper/w1.jpg",
      name: "Desktop",
      desc: "10 Wallpapers",
      id: 2
    }, {
      image: "img/wallpapper/w2.jpg",
      name: "Android",
      desc: "10 Wallpapers",
      id: 1
    }, {
      image: "img/wallpapper/w3.jpg",
      name: "iOS",
      desc: "10 Wallpapers",
      id: 3
    }];

  })

  .controller('WallpapperInnerCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wallpapper-inner");
    $scope.menutitle = NavigationService.makeactive("Wallpappers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.wallpapper = [];
    $scope.wallpaperArr = [];
    var pageNo = 1;
    $scope.lastpage = false;
    $scope.wallpaperid = $stateParams.id;


    NavigationService.getWallpaperCategoryForDesktop(function(data) {
      $scope.wallpaperArr = data;
      $scope.wallpapercategory = _.find($scope.wallpaperArr, {
        "id": $scope.wallpaperid
      }).name;
    })

    $scope.getWallpapers = function(page) {
      $scope.lastpage = false;
      $scope.request = {
        pageno: page,
        wallpaperid: $scope.wallpaperid
      };
      NavigationService.getallwallpaper($scope.request, function(data) {
        var temp = data.queryresult;
        console.log(page);
        console.log(temp);
        if (temp.length == 0) {
          $scope.lastpage = true;
        } else {
          _.each(temp, function(key) {
            $scope.wallpapper.push(key);
          })
        }
      });
    }
    $scope.getWallpapers(pageNo);
    $scope.viewMore = function() {
      pageNo++;
      $scope.getWallpapers(pageNo);
    };

  })

  .controller('TicketMerchandizeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("ticket-merchandize");
    $scope.menutitle = NavigationService.makeactive("Tickets & Merchandise");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
  })

  .controller('NewsMediaCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter) {
      //Used to name the .html file
      $scope.template = TemplateService.changecontent("news-media");
      $scope.menutitle = NavigationService.makeactive("News");
      TemplateService.title = $scope.menutitle;
      $scope.navigation = NavigationService.getnav();
      $scope.news = [];
      NavigationService.getallnews(function(data) {
        $scope.news = data;
        $scope.news = $filter('orderBy')($scope.news, "id");
        console.log($scope.news);
      });

    })
    .controller('FanCornerCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter) {
      //Used to name the .html file
      $scope.template = TemplateService.changecontent("fan-corner");
      $scope.menutitle = NavigationService.makeactive("Fan Corner");
      TemplateService.title = $scope.menutitle;
      $scope.navigation = NavigationService.getnav();
      $scope.news = [];
      NavigationService.getallnews(function(data) {
        $scope.news = data;
        $scope.news = $filter('orderBy')($scope.news, "id");
        console.log($scope.news);
      });

      $scope.register = {};
      $scope.showmsg = false;

      $scope.doRegister = function() {
        NavigationService.contactus($scope.register, function(data) {
          console.log(data);
          if (data.value == true) {
            $scope.showmsg = true;
          }
        })
      }

    })

  .controller('NewsDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("news-detail");
    $scope.menutitle = NavigationService.makeactive("News");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.newsMedia = {
      image: "img/news/n3.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    }

    $scope.news = [{
      image: "img/news/n1.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    }, {
      image: "img/news/n2.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    }, {
      image: "img/news/n1.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    }]

  })

  .controller('PlayersCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("players");
    $scope.menutitle = NavigationService.makeactive("Players");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.getPlayers = function() {
      if ($scope.slideindex == undefined) {
        $scope.slideindex = 0;
      }
      $scope.player = [{
        id: 1,
        image: "img/player/p1.png",
        name: "Anil Patil",
        desg: "All Rounder",
        nationality: "Mumbai",
        dob: "33",
        jersyno: "01",
        desp: "Senior National-(2007-2009,2011-2012), Departmental National (2006,2010,2013-2015).",
        desp2: "Senior National(2007)-1st Position,Senior National (2011, 2012)- 3rd Position ,Departmental National (2014)- 3rd Position."

      }, {
        id: 2,
        image: "img/player/p13.png",
        name: "C. Arun",
        desg: "Defender,Left Cover",
        nationality: "Thiruvarur",
        dob: "22",
        jersyno: "03",
        desp: "Pro-Kabaddi (2015),All India University (2012), Senior National (2015).",
        desp2: "All India University (2012) - 1st Position."

      }, {

        image: "img/player/p2.png",
        name: "Gangadhari Mallesh",
        desg: "All Rounder",
        nationality: "Choutapally",
        dob: "22",
        jersyno: "10",
        desp: "Pro-Kabaddi (2015-2014),Senior National (2015-2012),Junior National Championship (2012-2009)",
        desp2: "Pro-kabaddi (2014)- 1st Position,School Nationals(2008) -3rd Position"

      }, {

        image: "img/player/p14.png",
        name: "Jagdeesha K.K",
        desg: "Defender,Right Corner",
        nationality: "Koipaddy",
        dob: "41",
        jersyno: "09",
        desp: "Departmental National Campionship- (2015-1999),Senior National (2013-1999),National Games (2003-1999), Senior Federation Cup (2006-2003), Asian Cup(2002).",
        desp2: "Departmental National Campionship (2014-2012) - 2nd Position, Departmental National Campionship (2006-2002)- 1st Position, Asian Cup (2002)- 1st Position, Senior National (2005-2003) -1st Position, Senior Federation Cup (2003)- 1st Position"

      }, {

        image: "img/player/p3.png",
        name: "Jasvir Singh",
        desg: "Raider",
        nationality: "Panipat",
        dob: "31",
        jersyno: "02",
        desp: "Pro-Kabaddi (2015-2014),Senior National (2013), National Game (2011), Indoor Asian Game (2013), Asian Game (2014)",
        desp2: "Pro-kabaddi (2014)- 1st Position,Senior National (2013) - 1st Position, National Game (2011)- 1st Position, Indoor Asian Game (2013) - 1st Position, Asian Game (2014) - 1st Position."

      }, {

        image: "img/player/p4.png",
        name: "Kuldeep Singh",
        desg: "All Rounder",
        nationality: "Sonipat",
        dob: "23",
        jersyno: "08",
        desp: "Pro-Kabaddi (2015),National Game (2011), National (2008-15), Dept. National (2008-09).",
        desp2: "National (2012-13) - 1st Position, National Game (2011) - 3rd Position, Dept. National (2008)- 2nd Position, (2009)- 1st Position."
      }, {

        image: "img/player/p16.png",
        name: "MOHAMMAD MAGHSOUDLOU",
        desg: "All Rounder",
        nationality: "GORGAN",
        dob: "25",
        jersyno: "23",
        desp: "",
        desp2: "Asian Indoor Kabaddi Games Incheon (2014)-2nd Position, Asian Beach Kabaddi Games China (2012)-1st Position, National Kabaddi Championship (2008,2009,2010,2011,2012)-1st Position, National Kabaddi Premier League (2006,2007)-1st Position"
      }, {

        image: "img/player/p5.png",
        name: "Navneet Gautam",
        desg: "Defender, Left Corner",
        nationality: "Jaipur",
        dob: "32",
        jersyno: "07",
        desp: "Pro-Kabaddi (2015-2014), Asian Games (2006 -10 -14), WorldCup (2004)(2007), Indoor Asian Games (2007))(2009).",
        desp2: "Pro-kabaddi (2014)- 1st Position, Arjun Awardee - (2007), Asian Games (2006-10-14) - 1st Position, World Cup (2004) (2007) - 1st Position, Indoor Asian Game (2007)(2009) - 1st Position."

      }, {

        image: "img/player/p6.png",
        name: "Rajesh Narwal",
        desg: "All Rounder",
        nationality: "Sonipat",
        dob: "25",
        jersyno: "11",
        desp: "Pro-Kabaddi (2015-2014),Beach Asian Game (2014), National Games (2011) (2015), Senior National (2008-15).",
        desp2: "Pro-kabaddi (2014)- 1st Position,Beach Asian Games (2014) - 3rd Position, National Games (2015) - 1st Position, (2011) - 3rd Position, Senior National (2013-15) - 2nd Position."

      }, {
        image: "img/player/p7.png",
        name: "Raju Lal Choudhary",
        desg: "Defender,Right Corner",
        nationality: "Jaipur",
        dob: "26",
        jersyno: "12",
        desp: "Pro-Kabaddi (2015-2014)National Games (2011), Senior National Games (2015), All India Police Games (2008-15).",
        desp2: "Pro-kabaddi (2014)- 1st Position,National Games (2011)-1st Position, Senior National (2015) - 3rd Position"

      }, {

        image: "img/player/p8.png",
        name: "Ran Singh",
        desg: "All Rounder",
        nationality: "Sangrur",
        dob: "28",
        jersyno: "33",
        desp: "Pro-Kabaddi (2015-2014),Senior National (2002-08), Senior National (2014), Dept. National Tournament  (2014), All India Police Tournanment (2008-11).",
        desp2: "Pro-kabaddi (2014)- 1st Position,Senior National (2007) - 2nd Position, Senior National (2006) - 3rd Position, All India Police Tournament (2008) (2011) - 1st Position, All India Police Tournament (2009-10) - 3rd Position, Dept. National Tournament (2014) - 2nd Position"

      }, {

        image: "img/player/p9.png",
        name: "Rohit Kumar Prajapat",
        desg: "Raider",
        nationality: "Jaipur",
        dob: "19",
        jersyno: "14",
        desp: "Pro-Kabaddi (2015), Under 20 Junior National (2012-14), All India University kabbadi tournament(2014), Under 19 School National(2012), Under 16 Sub Juniour National(2011), Junior National Federation cup (2014), Senior West Zone (2015).",
        desp2: "Sub Junior National Under 16  (2012) - 2nd Position, Under 19 School national (2012)- 3rd PositionJunior National Federation Cup (2014)- 3rd Position, Senior West Zone (2015) - 3rd Position."

      }, {

        image: "img/player/p10.png",
        name: "Rohit Rana",
        desg: "Defender,Left Cover",
        nationality: "Dharmshala",
        dob: "27",
        jersyno: "05",
        desp: "Pro-Kabaddi (2015-2014), National Games (2010-15), Senior National  (2010-14), Dept National (2011-14).",
        desp2: "Pro-kabaddi (2014)- 1st Position,National Games (2014) - 3rd Position, Dept. National (2011-14) - 1st Postion"

      }, {

        image: "img/player/p18.png",
        name: "Sanjay Shrestha",
        desg: "All Rounder",
        nationality: "Dhanusha",
        dob: "31",
        jersyno: "04",
        desp: "Pro-Kabaddi (2015-2014),World Cup ( , 9th Safe game, 10th Safe Game, 11th Safe Game.",
        desp2: "Pro-kabaddi (2014)- 1st Position."

      }, {

        image: "img/player/p12.png",
        name: "Samarjeet Singh",
        desg: "All Rounder",
        nationality: "Khedi Daulatpur",
        dob: "29",
        jersyno: "77",
        desp: "Pro-Kabaddi (2015-2014),Asian Games (2010),Indoor Asian Games (2010), Safe Games (2010), Indoor Asian Games (2013)",
        desp2: "Pro-kabaddi (2014)- 1st Position,Asian Games (2010) - 1st Position , Indoor Asian Games (2010) - 1st Postion, Safe Games (2010) -1st Position, Indoor Asian Games (2013)."

      }, {

        image: "img/player/p15.png",
        name: "Satish kumar",
        desg: "Raider",
        nationality: "Rohera",
        dob: "31",
        jersyno: "06",
        desp: "Senior National -(2007,2008,2011,2015),Senior Federation Cup (2006), Beach Kabaddi National Campionship(2008).",
        desp2: "Senior National (2007,2008,2011)- 1st Positon, Senior National (2015)- 2nd Position,Senior Federation (2006) - 3rd Position, Beach Kabaddi National Campionship (2008) - 1st Position"

      }, {

        image: "img/player/p11.png",
        name: "Sonu Narwal",
        desg: "Raider",
        nationality: "Sonipat",
        dob: "29",
        jersyno: "22",
        desp: "Pro-Kabaddi (2015),Senior National Game (2008-09), Asian Championship(2005), Asian Game (2010), Beach Asian Game(2011), All India Police Kabaddi (2009-10-11).",
        desp2: "All India Police (2009) - 1st Position, Asian Championship (2005) - 1st Position , Asian Games (2010)- 1st Position, Beach Asian Games (2011) - 2nd Position."

      }];
      var i = 0;
      _.each($scope.player, function(key) {
        key.id = i;
        i++;
      });

      //write code to reindex player by slideindex
    }
    $scope.getPlayers();

    $scope.openPlayers = function(data, index) {
      // $scope.slideindex = index;
      data.active = true;
      $scope.players = $scope.player;
      var startArr = _.slice($scope.players, 0, index);
      var endArr = _.slice($scope.players, index);


      $scope.players2 = _.union(endArr, startArr);

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/modal/player-slider.html',
        controller: 'PlayersCtrl',
        scope: $scope,
        resolve: {
          slideindex: function() {
            return $scope.players;
          }
        }
      })

    };
  })

  .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.team = [{

      name: "LOREM IPSUM ",
      desg: "Owner",
      image: "img/team/p1.png",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }, {

      name: "LOREM IPSUM ",
      desg: "CEO",
      image: "img/team/p1.png",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }, {

      name: "LOREM IPSUM ",
      desg: "Team Coach",
      image: "img/team/p1.png",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }, {

      name: "LOREM IPSUM ",
      desg: "Team Coach",
      image: "img/team/p1.png",
      Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }];
  })

  .controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
  })

  .controller('footerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });

    $scope.logo = [{

      name: "Jio Chat",
      url: "img/logo/l1.png"

    }, {

      name: "Manforce",
      url: "img/logo/l2.png"

    }, {

      name: "Shakti",
      url: "img/logo/l3.png"

    }, {

      name: "Kalyan Jewellers",
      url: "img/logo/l4.png"

    }, {

      name: "tyka",
      url: "img/logo/l5.png"

    }, {

      name: "Jio Chat",
      url: "img/logo/l1.png"

    }, {

      name: "Manforce",
      url: "img/logo/l2.png"

    }, {

      name: "Shakti",
      url: "img/logo/l3.png"

    }, {

      name: "Kalyan Jewellers",
      url: "img/logo/l4.png"

    }, {

      name: "tyka",
      url: "img/logo/l5.png"

    }];
  })

  .controller('Menuctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
  });
