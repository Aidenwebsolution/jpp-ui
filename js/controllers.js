angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'ngAnimate'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // TemplateService.header = "";

  // $scope.mySlides = [
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  // ];
  //  $scope.$on('$viewContentLoaded', function(){
  //  $timeout(function(){
  //    console.log("timeout");
  //      $('#boutique').boutique();
  //  },3000)
  //  });

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

  $scope.news = [{
    id: 0,
    image: "img/banner/01_banner.jpg",
    // title: "New from the camp",
    desc: "View All Fixtures of Season 3",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }, {
    id: 1,
    image: "img/banner/02_banner.jpg",
    // title: "New from the camp",
    desc: "Download Exclusive Wallpapers for Desktop & Mobile",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }, {
    id: 2,
    image: "img/banner/03_banner.jpg",
    // title: "New from the camp",
    desc: "Know Your Panthers",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }, {
    id: 3,
    image: "img/banner/04_banner.jpg",
    // title: "New from the camp",
    desc: "Purchase Exclusive JPP Merchandise",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }, {
    id: 4,
    image: "img/banner/05_banner.jpg",
    // title: "New from the camp",
    desc: "Book Match Tickets",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }];

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
  } ];


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


})

.controller('FixturesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("fixtures");
  $scope.menutitle = NavigationService.makeactive("Fixtures & Results");
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
.controller('GalleryInnerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("gallery-inner");
  $scope.menutitle = NavigationService.makeactive("Gallery");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  var currIndex = 0;
  $scope.slides = [{
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g1.jpg"
  }, {
    galleryimg: "img/gallery/g2.jpg"
  }, {
    galleryimg: "img/gallery/g3.jpg"
  }];
  $scope.slides = _.chunk($scope.slides, 8);
  console.log($scope.slides);
  for (var i = 0; i < $scope.slides.length; i++) {
    $scope.slides[i] = _.chunk($scope.slides[i], 4);
  }
  console.log($scope.slides);

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
  $scope.slides = [{
img:'img/gallery/c1.jpg',
title:'LOREM IPSUM IS SIMPLY DUMMY TEXT'
  },{
img:'img/gallery/c1.jpg',
title:'LOREM IPSUM IS SIMPLY DUMMY TEXT'
  },{
img:'img/gallery/c1.jpg',
title:'LOREM IPSUM IS SIMPLY DUMMY TEXT'
  },{
img:'img/gallery/c1.jpg',
title:'LOREM IPSUM IS SIMPLY DUMMY TEXT'
  }];

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

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w1.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w1.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }]

})

.controller('WallpapperInnerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("wallpapper-inner");
  $scope.menutitle = NavigationService.makeactive("Wallpappers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.wallpapper = [{
    image: "img/wallpapper/w1.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w1.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w2.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w3.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }, {
    image: "img/wallpapper/w1.jpg",
    name: "ABHISHEK BACHAN",
    desc: "10 Wallpapers"

  }]

})

.controller('TicketMerchandizeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("ticket-merchandize");
  $scope.menutitle = NavigationService.makeactive("Tickets & Merchandize");
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
  $scope.menutitle = NavigationService.makeactive("News");
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
  }];

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

  $scope.player = [{

    image: "img/player/p1.png",
    name: "Gangadhari Mallesh",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p2.png",
    name: "RAJESH NARWAL",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p3.png",
    name: "ROHIT RANA",
    desg: "DEFENDER",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p4.png",
    name: "RAN SINGH",
    desg: "DEFENDER",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }, {

    image: "img/player/p5.png",
    name: "BALBIR SINGH",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p6.png",
    name: "JASVIR SINGH",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p1.png",
    name: "Gangadhari Mallesh",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p2.png",
    name: "RAJESH NARWAL",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p3.png",
    name: "ROHIT RANA",
    desg: "DEFENDER",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p4.png",
    name: "RAN SINGH",
    desg: "DEFENDER",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p5.png",
    name: "BALBIR SINGH",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  }, {

    image: "img/player/p6.png",
    name: "JASVIR SINGH",
    desg: "Raider",
    nationality: "Indian",
    dob: "jun 08,1993",
    jersyno: "10",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }];

  $scope.openPlayers = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/player-slider.html',
      controller: 'PlayersCtrl'
    })
  };
})

.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("about-us");
  $scope.menutitle = NavigationService.makeactive("About Us");
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
})

;
