angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'ngAnimate'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
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
    image: "img/banner/05_banner.jpg",
    // title: "New from the camp",
    desc: "Book Match Tickets",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",

  }, {
    id: 1,
    image: "img/banner/03_banner.jpg",
    // title: "New from the camp",
    desc: "Know Your Panthers",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",

  }, {
    id: 2,
    image: "img/banner/01_banner.jpg",
    // title: "New from the camp",
    desc: "Season 3 All Fixtures",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",
  }, {
    id: 3,
    image: "img/banner/02_banner.jpg",
    // title: "New from the camp",
    desc: "Wallpapers for Desktop & Mobile",
    active: false
      // date: "MONDAY, NOVEMBER 30, 2015",

  }, {
    id: 4,
    image: "img/banner/04_banner.jpg",
    // title: "New from the camp",
    desc: "Purchase Exclusive JPP Merchandise",
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
  $scope.table = [{
    no: '1',
    name: 'UMumba',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },{
    no: '2',
    name: 'Telgu Titans',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },{
    no: '3',
    name: 'Bangluru Bulls',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },{
    no: '4',
    name: 'Patan Pirates',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },{
    no: '5',
    name: 'Delhi',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },{
    no: '6',
    name: 'Jaipur Pink Panther',
    match: '14',
    won: '12',
    lost:'2',
    total:'60',
  },
];
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
  $scope.getPlayers = function () {
    if($scope.slideindex == undefined){
      $scope.slideindex=0;
    }
    $scope.player = [{

      image: "img/player/p1.png",
      name: "Anil Patil",
      desg: "All Rounder",
      nationality: "Indian",
      dob: "33",
      jersyno: "01",
      desp: "Senior National- (2007-2009,2011-2012), Departmental National (2006,2010,2013-2015).Senior National(2007)-1st Position,Senior National (2011, 2012)- 3rd Position ,Departmental National (2014)- 3rd Position.",

    }, {

      image: "img/player/p2.png",
      name: "Gangadhari Mallesh",
      desg: "All Rounder",
      nationality: "Indian",
      dob: "22",
      jersyno: "10",
      desp: "Pro-Kabaddi (2015-2014),Senior National (2015-2012),Junior National Championship (2012-2009), School Nationals(2009-2009).Pro-kabaddi (2014)- 1st Position,School Nationals(2008) -3rd Position",

    }, {

      image: "img/player/p3.png",
      name: "Jasvir Singh",
      desg: "Raider",
      nationality: "Indian",
      dob: "31",
      jersyno: "02",
      desp: "Pro-Kabaddi (2015-2014),Senior National (2013), National Game (2011), Indoor Asian Game (2013), Asian Game (2014).Pro-kabaddi (2014)- 1st Position,Senior National (2013) - 1st Position, National Game (2011)- 1st Position, Indoor Asian Game (2013) - 1st Position, Asian Game (2014) - 1st Position.",

    }, {

      image: "img/player/p4.png",
      name: "Kuldeep Singh",
      desg: "All Rounder",
      nationality: "Indian",
      dob: "23",
      jersyno: "08",
      desp: "Pro-Kabaddi (2015),National Game (2011), National (2008-15), Dept. National (2008-09).National (2012-13) - 1st Position, National Game (2011) - 3rd Position, Dept. National (2008)- 2nd Position, (2009)- 1st Position.",
    }, {

      image: "img/player/p5.png",
      name: "Navneet Gautam",
      desg: "Defender",
      nationality: "Indian",
      dob: "32",
      jersyno: "07",
      desp: "Pro-Kabaddi (2015-2014), Asian Games (2006 -10 -14), WorldCup (2004)(2007), Indoor Asian Games (2007))(2009).Pro-kabaddi (2014)- 1st Position, Arjun Awardee - (2007), Asian Games (2006-10-14) - 1st Position, World Cup (2004) (2007) - 1st Position, Indoor Asian Game (2007)(2009) - 1st Position.",

    }, {

      image: "img/player/p6.png",
      name: "Rajesh Narwal",
      desg: "All Rounder",
      nationality: "Indian",
      dob: "25",
      jersyno: "11",
      desp: "Pro-Kabaddi (2015-2014),Beach Asian Game (2014), National Games (2011) (2015), Senior National (2008-15).Pro-kabaddi (2014)- 1st Position,Beach Asian Games (2014) - 3rd Position, National Games (2015) - 1st Position, (2011) - 3rd Position, Senior National (2013-15) - 2nd Position.",

    }, {
      image: "img/player/p7.png",
      name: "Raju Lal Choudhary",
      desg: "Defender",
      nationality: "Indian",
      dob: "26",
      jersyno: "12",
      desp: "Pro-Kabaddi (2015-2014)National Games (2011), Senior National Games (2015), All India Police Games (2008-15).Pro-kabaddi (2014)- 1st Position,National Games (2011)-1st Position, Senior National (2015) - 3rd Position",

    }, {

      image: "img/player/p8.png",
      name: "Ran Singh",
      desg: "All Rounder",
      nationality: "Indian",
      dob: "28",
      jersyno: "33",
      desp: "Pro-Kabaddi (2015-2014),Senior National (2002-08), Senior National (2014), Dept. National Tournament  (2014), All India Police Tournanment (2008-11).Pro-kabaddi (2014)- 1st Position,Senior National (2007) - 2nd Position, Senior National (2006) - 3rd Position, All India Police Tournament (2008) (2011) - 1st Position, All India Police Tournament (2009-10) - 3rd Position, Dept. National Tournament (2014) - 2nd Position",

    }, {

      image: "img/player/p9.png",
      name: "Rohit Kumar Prajapat",
      desg: "Raider",
      nationality: "Indian",
      dob: "19",
      jersyno: "14",
      desp: "Pro-Kabaddi (2015), Under 20 Junior National (2012-14), All India University kabbadi tournament(2014), Under 19 School National(2012), Under 16 Sub Juniour National(2011), Junior National Federation cup (2014), Senior West Zone (2015).Departmental National Campionship (2014-2012) - 2nd Position, Departmental National Campionship (2006-2002)- 1st Position, Asian Cup (2002)- 1st Position, Senior National (2005-2003) -1st Position, Senior Federation Cup (2003)- 1st Position",

    }, {

      image: "img/player/p10.png",
      name: "Rohit Rana",
      desg: "Defender",
      nationality: "Indian",
      dob: "27",
      jersyno: "05",
      desp: "Pro-Kabaddi (2015-2014), National Games (2010-15), Senior National  (2010-14), Dept National (2011-14).Pro-kabaddi (2014)- 1st Position,National Games (2014) - 3rd Position, Dept. National (2011-14) - 1st Postion",

    }, {

      image: "img/player/p11.png",
      name: "Sonu Narwal",
      desg: "Raider",
      nationality: "Indian",
      dob: "29",
      jersyno: "22",
      desp: "Pro-Kabaddi (2015),Senior National Game (2008-09), Asian Championship(2005), Asian Game (2010), Beach Asian Game(2011), All India Police Kabaddi (2009-10-11).All India Police (2009) - 1st Position, Asian Championship (2005) - 1st Position , Asian Games (2010)- 1st Position, Beach Asian Games (2011) - 2nd Position.",

    }, {

      image: "img/player/p6.png",
      name: "JASVIR SINGH",
      desg: "Raider",
      nationality: "Indian",
      dob: "jun 08,1993",
      jersyno: "10",
      desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }];
    var i=0;
    _.each($scope.player,function(key){
      key.id=i;
      i++;
    });

    //write code to reindex player by slideindex
  }
  $scope.getPlayers();

  $scope.openPlayers = function(index) {
    $scope.slideindex = index;
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/player-slider.html',
      controller: 'PlayersCtrl',
      scope:$scope,
      resolve: {
        slideindex :   function(){
          return index;
        }
      }
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
});
