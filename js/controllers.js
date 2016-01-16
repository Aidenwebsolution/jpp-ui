angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
  })
.controller('FixturesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("fixtures");
    $scope.menutitle = NavigationService.makeactive("Fixtures");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.accordian = [];
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });

  })
.controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("gallery");
    $scope.menutitle = NavigationService.makeactive("Gallery");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.slides = [
      {
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g1.jpg"
      },{
        galleryimg:"img/gallery/g2.jpg"
      },{
        galleryimg:"img/gallery/g3.jpg"
      }
    ];
    $scope.slides=_.chunk($scope.slides,8);
    console.log($scope.slides);
    for(var i=0;i<$scope.slides.length;i++){
      $scope.slides[i] = _.chunk($scope.slides[i], 4);
    }
    console.log($scope.slides);
  })
.controller('WallpapperCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wallpapper");
    $scope.menutitle = NavigationService.makeactive("Wallpapper");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.wallpapper = [{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    }]

  })
.controller('WallpapperInnerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wallpapper-inner");
    $scope.menutitle = NavigationService.makeactive("Wallpapper-Inner");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.wallpapper = [{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w2.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w3.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    },{
      image: "img/wallpapper/w1.jpg",
      name: "ABHISHEK BACHAN",
      desc: "10 Wallpapers"

    }]

  })
.controller('TicketMerchandizeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("ticket-merchandize");
    $scope.menutitle = NavigationService.makeactive("Ticket-Merchandize");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
      'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
      'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
  })
  .controller('NewsMediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("news-media");
    $scope.menutitle = NavigationService.makeactive("News-Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
    }, {
      image: "img/news/n2.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    }]

  })
  .controller('NewsDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("news-detail");
    $scope.menutitle = NavigationService.makeactive("News-Detail");
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
    },{
      image: "img/news/n1.jpg",
      title: "LOREM IPSUM",
      date: "14 August 2015",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    }]

  })
  .controller('PlayersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("players");
    $scope.menutitle = NavigationService.makeactive("Players");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.player = [{

      image: "img/player/p1.png",
      name: "Gangadhari Mallesh",
      desg: "Raider"

    }, {

      image: "img/player/p2.png",
      name: "RAJESH NARWAL",
      desg: "Raider"

    }, {

      image: "img/player/p3.png",
      name: "ROHIT RANA",
      desg: "DEFENDER"

    }, {

      image: "img/player/p4.png",
      name: "RAN SINGH",
      desg: "DEFENDER"

    }, {

      image: "img/player/p5.png",
      name: "BALBIR SINGH",
      desg: "Raider"

    }, {

      image: "img/player/p6.png",
      name: "JASVIR SINGH",
      desg: "Raider"

    }, {

      image: "img/player/p1.png",
      name: "Gangadhari Mallesh",
      desg: "Raider"

    }, {

      image: "img/player/p2.png",
      name: "RAJESH NARWAL",
      desg: "Raider"

    }, {

      image: "img/player/p3.png",
      name: "ROHIT RANA",
      desg: "DEFENDER"

    }, {

      image: "img/player/p4.png",
      name: "RAN SINGH",
      desg: "DEFENDER"

    }, {

      image: "img/player/p5.png",
      name: "BALBIR SINGH",
      desg: "Raider"

    }, {

      image: "img/player/p6.png",
      name: "JASVIR SINGH",
      desg: "Raider"

    }];
  })
  .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About-Us");
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

    },{

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

    },{

      name: "tyka",
      url: "img/logo/l5.png"

    }];
  })
  .controller('Menuctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });

    $scope.navigation = [{

      name: "News",
      url: "#/News"

    }, {

      name: "Fixtures & Results",
      url: "#/Fixtures-Results"

    }, {

      name: "Players",
      url: "#/Players"

    }, {

      name: "Gallery ",
      url: "#/Gallery "

    }, {

      name: "Fan Corner",
      url: "#/Fan-Corner"

    }, {

      name: "About Us",
      url: "#/About-Us"

    }, {

      name: "Tickets & Merchandize",
      url: "#/Tickets-Merchandize"

    }];
  })

;
