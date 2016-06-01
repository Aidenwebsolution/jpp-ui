var translate = {};
var globalFunc = {};
var currentlang = '';
var globalLocale = moment.locale('hi');
var localLocale = moment();
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'ngAnimate', 'angular-loading-bar'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $interval, $filter, $timeout, $translate) {

    //Used to name the .html file
    $scope.openers = {};
    $scope.homegame = {};
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function() {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=329228207248886";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + "://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, "script", "twitter-wjs");
        }, 100);
    });

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

    $scope.matchData = [{
        team1score: '27',
        team2score: '18',
        team1img: 'img/team/4.png',
        team2img: 'img/team/8.png',
        team1class: "jaipur",
        team2class: "mumba",
        stadium: 'Rajiv Gandhi Indoor Stadium, Vishakapatnam',
        galleryid: 5
    }, {
        team1score: '29',
        team2score: '28',
        team1img: 'img/team/5.png',
        team2img: 'img/team/4.png',
        team1class: "patna",
        team2class: "jaipur",
        stadium: 'Rajiv Gandhi Indoor Stadium, Vishakapatnam',
        galleryid: 7
    }, {
        team1score: '36',
        team2score: '26',
        team1img: 'img/team/1.png',
        team2img: 'img/team/4.png',
        team1class: "bengaluru",
        team2class: "jaipur",
        stadium: 'Sree Kanteerava Stadium, Jaipur',
        galleryid: 6
    }, {
        team1score: '39',
        team2score: '34',
        team1img: 'img/team/4.png',
        team2img: 'img/team/3.png',
        team1class: "jaipur",
        team2class: "delhi",
        stadium: 'Netaji Subhash Chandra Bose Indoor Stadium, Kolkata',
        galleryid: 4
    }, {
        team1score: '34',
        team2score: '20',
        team1img: 'img/team/2.png',
        team2img: 'img/team/4.png',
        team1class: "bengal",
        team2class: "jaipur",
        stadium: 'Netaji Subhash Chandra Bose Indoor Stadium, Kolkata',
        galleryid: 8
    }, {
        team1score: '32',
        team2score: '32',
        team1img: 'img/team/6.png',
        team2img: 'img/team/4.png',
        team1class: "puneri",
        team2class: "jaipur",
        stadium: 'Shree Shiv Chhatrapati Sports Complex, Pune',
        galleryid: 9
    }, {
        team1score: '25',
        team2score: '27',
        team1img: 'img/team/4.png',
        team2img: 'img/team/7.png',
        team1class: "jaipur",
        team2class: "telgu",
        stadium: 'Shree Shiv Chhatrapati Sports Complex, Pune',
        galleryid: 10
    }, {
        team1score: '26',
        team2score: '35',
        team1img: 'img/team/7.png',
        team2img: 'img/team/4.png',
        team1class: "telgu",
        team2class: "jaipur",
        stadium: 'Patilputra Sports Complex, Patna',
        galleryid: 11
    }, {
        team1score: '30',
        team2score: '21',
        team1img: 'img/team/4.png',
        team2img: 'img/team/1.png',
        team1class: "jaipur",
        team2class: "bengaluru",
        stadium: 'Sawai Mansingh Stadium, Jaipur',
        galleryid: 12
    }, {
        team1score: '18',
        team2score: '33',
        team1img: 'img/team/4.png',
        team2img: 'img/team/6.png',
        team1class: "jaipur",
        team2class: "puneri",
        stadium: 'Sawai Mansingh Stadium, Jaipur',
        galleryid: 13
    }, {
        team1score: '18',
        team2score: '34',
        team1img: 'img/team/4.png',
        team2img: 'img/team/2.png',
        team1class: "jaipur",
        team2class: "bengal",
        stadium: 'Sawai Mansingh Stadium, Jaipur',
        galleryid: 14
    }, {
        team1score: '24',
        team2score: '47',
        team1img: 'img/team/4.png',
        team2img: 'img/team/5.png',
        team1class: "jaipur",
        team2class: "patna",
        stadium: 'Sawai Mansingh Stadium, Jaipur',
        galleryid: 15
    }, {
        team1score: '21',
        team2score: '21',
        team1img: 'img/team/3.png',
        team2img: 'img/team/4.png',
        team1class: "delhi",
        team2class: "jaipur",
        stadium: 'Thyagaraj Sports Complex, Delhi',
        galleryid: 16
    }, {
        team1score: '35',
        team2score: '21',
        team1img: 'img/team/8.png',
        team2img: 'img/team/4.png',
        team1class: "mumba",
        team2class: "jaipur",
        stadium: 'DOME@NSCI SVP Stadium, Mumbai',
        galleryid: 17
    }];
    $scope.englishbanner = [{
        "id": "9",
        "name": "Season 4 Schedule",
        "image": "img/homebanner/Season_4_Schedule.jpg",
        "order": "1",
        "status": "1",
        "link": "\/fixtures\/1",
        "type": "0"
    }, {
        "id": "7",
        "name": "JPP ANDROID APP",
        "image": "img/homebanner/Banners_new.jpg",
        "order": "2",
        "status": "1",
        "link": "https:\/\/play.google.com\/store\/apps\/details?id=com.jaipurpinkpanthers.android",
        "type": "0"
    }, {
        "id": "2",
        "name": "JPP Gallery",
        "image": "img/homebanner/Action_Season_3.jpg",
        "order": "3",
        "status": "1",
        "link": "\/gallery",
        "type": "1"
    }, {
        "id": "3",
        "name": "Know your panthers",
        "image": "img/homebanner/03_banner.jpg",
        "order": "4",
        "status": "1",
        "link": "\/players",
        "type": "2"
    }, {
        "id": "10",
        "name": "Tune into JPP TV",
        "image": "img/homebanner/Tune_in_to_jpp_TV.jpg",
        "order": "5",
        "status": "1",
        "link": "\/jpp-tv",
        "type": "0"
    }, {
        "id": "5",
        "name": "Wallpapers for Desktop & Mobile",
        "image": "img/homebanner/02_banner1.jpg",
        "order": "7",
        "status": "1",
        "link": "\/wallpaper",
        "type": "0"
    }, {
        "id": "8",
        "name": "LATEST NEWS OF JPP",
        "image": "img/homebanner/Banners_news.jpg",
        "order": "8",
        "status": "1",
        "link": "\/news-media",
        "type": "0"
    }];
    $scope.hindibanner = [{
        "id": "9",
        "name": "SEASON 4 SCHEDULE",
        "image": "img/homebanner/season_hindi.jpg",
        "order": "1",
        "status": "1",
        "link": "\/fixtures\/1",
        "type": "0"
    }, {
        "id": "7",
        "name": "JPP ANDROID APP",
        "image": "img/homebanner/banner_hindi.jpg",
        "order": "2",
        "status": "1",
        "link": "https:\/\/play.google.com\/store\/apps\/details?id=com.jaipurpinkpanthers.android",
        "type": "0"
    }, {
        "id": "2",
        "name": "JPP GALLERY",
        "image": "img/homebanner/season_hindi.jpg",
        "order": "3",
        "status": "1",
        "link": "\/gallery",
        "type": "1"
    }, {
        "id": "3",
        "name": "KNOW YOUR PANTHERS",
        "image": "img/homebanner/know_hindi.jpg",
        "order": "4",
        "status": "1",
        "link": "\/players",
        "type": "2"
    }, {
        "id": "10",
        "name": "TUNE INTO JPP TV",
        "image": "img/homebanner/tv_hindi.jpg",
        "order": "5",
        "status": "1",
        "link": "\/jpp-tv",
        "type": "0"
    }, {
        "id": "5",
        "name": "WALLPAPERS FOR DESKTOP & MOBILE",
        "image": "img/homebanner/banner2_hindi.jpg",
        "order": "7",
        "status": "1",
        "link": "\/wallpaper",
        "type": "0"
    }, {
        "id": "8",
        "name": "LATEST NEWS OF JPP",
        "image": "img/homebanner/news_hindi.jpg",
        "order": "8",
        "status": "1",
        "link": "\/news-media",
        "type": "0"
    }];

    // $translate.use('en');
    // $.jStorage.set("languageSet", 'en');
    // $scope.news = $scope.englishbanner;

    globalFunc.changeSlides = function(lang) {
        // console.log(lang);
        // NavigationService.getAllSliders(function(data) {
        //     $scope.news = [];
        //     $scope.news = _.filter(data, function(key) {
        //         return key.type == ((lang == 'hi') ? '2' : '1');
        //     });
        // });
        if (lang == 'hi') {
            $scope.news = $scope.hindibanner;
        } else if (lang == 'en') {
            $scope.news = $scope.englishbanner;

        }
        $scope.changeSlide($scope.news[0]);

    };

    // NavigationService.getLatestMatch(function(data) {
    //     $scope.latestmatch = data;
    //     // $scope.schedule = $filter('orderBy')($scope.schedule, "order");
    //
    //     // $scope.refreshTimer($scope.latestmatch.starttimedate);
    //     console.log($scope.latestmatch);
    //
    //     $scope.calendarDate = {};
    //     var oldDateObj1 = new Date($scope.latestmatch.starttimedate);
    //     var date1 = new Date(oldDateObj1.getTime() - 330 * 60000);
    //     var oldDateObj2 = new Date($scope.latestmatch.starttimedate);
    //     var date2 = new Date(oldDateObj2.getTime() - 280 * 60000);
    //     console.log(date1);
    //     console.log(date2);
    //       $scope.calendarDate.from = $filter('date')(date1, "yyyyMMddTHHmmss") + "Z";
    //     $scope.calendarDate.to = $filter('date')(date2, "yyyyMMddTHHmmss") + "Z";
    //     console.log($scope.calendarDate);
    // });
    $scope.refreshTimer = function(eventTime) {
        eventTime = new Date(eventTime);
        console.log(eventTime);
        $scope.rightNow = new Date();
        $scope.diffTime = eventTime - $scope.rightNow;
        var duration = moment.duration($scope.diffTime, 'milliseconds');


        if (duration._milliseconds > 0) {

            $scope.latestMatchOn = false;
        } else {

            $scope.latestMatchOn = true;
        }
        $interval(function() {

            duration = moment.duration(duration - 1000, 'milliseconds');

            $scope.countdown.months = duration.months();
            $scope.countdown.days = duration.days();
            $scope.countdown.hours = duration.hours();
            $scope.countdown.minutes = duration.minutes();
            $scope.countdown.seconds = duration.seconds();

        }, 1000);
    };
    NavigationService.getScheduleSeason4(function(data) {
        console.log("getScheduleSeason4");
        $scope.openers = data[0];
        console.log($scope.openers);
        $scope.refreshTimer($scope.openers.starttimedate);
        $scope.calendarDate = {};
        var oldDateObj1 = new Date($scope.openers.starttimedate);
        var date1 = new Date(oldDateObj1.getTime() - 330 * 60000);
        var oldDateObj2 = new Date($scope.openers.starttimedate);
        var date2 = new Date(oldDateObj2.getTime() - 280 * 60000);
        console.log(date1);
        console.log(date2);
        $scope.calendarDate.from = $filter('date')(date1, "yyyyMMddTHHmmss") + "Z";
        $scope.calendarDate.to = $filter('date')(date2, "yyyyMMddTHHmmss") + "Z";
        console.log($scope.calendarDate);
    });
    NavigationService.getHomeGameSeason4(function(data) {
        $scope.homegame = data;
        $scope.calendarDatehome = [];
        var i = 0;
        _.each($scope.homegame, function(key) {
            var oldDateObj1 = new Date(key.starttimedate);
            var date1 = new Date(oldDateObj1.getTime() - 330 * 60000);
            var oldDateObj2 = new Date(key.starttimedate);
            var date2 = new Date(oldDateObj2.getTime() - 280 * 60000);
            $scope.calendarDatehome.push({
                from: $filter('date')(date1, "yyyyMMddTHHmmss") + "Z",
                to: $filter('date')(date2, "yyyyMMddTHHmmss") + "Z"
            });

            i++;
        });
        console.log("calendar dates");
        console.log($scope.calendarDatehome);
    });
    NavigationService.getallpoint(function(data) {
        $scope.table = data;
        $scope.table = $filter('orderBy')($scope.table, "order");
        console.log($scope.table);
    });
    var clickCount = 0;
    $scope.changeSlide = function(data) {
        $scope.currentActive = data;
        if (clickCount === 0) {

        }
        $scope.currentActive.active = true;
    };

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
    };

})

.controller('FixturesCtrl', function($scope, TemplateService, NavigationService, $stateParams, $timeout, $filter) {
    //Used to name the .html file
    $scope.oneAtATime = true;
    $scope.template = TemplateService.changecontent("fixtures");
    $scope.menutitle = NavigationService.makeactive("Fixtures & Results");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.schedules = [];
    $scope.loaded = false;

    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }


    $scope.fixtureid = $stateParams.id;
    var i = 0;
    $scope.openAccordion = function(item) {
        item.isOpen = false;
        // item.classes = "panel-open";
    };
    NavigationService.getSchedule(function(data) {
        $scope.schedules = data;
        console.log(data);
        $scope.schedules[0].isOpen = false;
        var i = 0;
        $scope.calendarDate = [];
        _.each($scope.schedules, function(key) {
            var oldDateObj1 = new Date(key.starttimedate);
            var date1 = new Date(oldDateObj1.getTime() - 330 * 60000);
            var oldDateObj2 = new Date(key.starttimedate);
            var date2 = new Date(oldDateObj2.getTime() - 280 * 60000);
            $scope.calendarDate.push({
                from: $filter('date')(date1, "yyyyMMddTHHmmss") + "Z",
                to: $filter('date')(date2, "yyyyMMddTHHmmss") + "Z"
            });

            key.starttimedate = new Date(key.starttimedate);
            key.starttimedate = $filter('date')(key.starttimedate, 'EEE d MMM yyyy, H:mm');

        });
        if ($scope.fixtureid == 1) {
            $scope.openAccordion($scope.schedules[0]);

        } else {
            $scope.openAccordionById($scope.fixtureid);
        }
    });
    $scope.openAccordionById = function(id) {
        console.log(id);
        _.each($scope.schedules, function(key) {
            if (key.id == $scope.fixtureid) {
                key.isOpen = true;
                key.classes = "panel-open";
            }

        });
    };
    $scope.season = 4;
    $scope.changeTab = function(data) {
        $scope.season = data;
        console.log($scope.season);
    };

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

    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }

    console.log($scope.galleryid);
    NavigationService.getAllGallery(function(data) {
        $scope.galleryArr = data;
        $scope.gallerycategory = _.find($scope.galleryArr, {
            "id": $scope.galleryid
        }).name;
        $scope.hindigallerycategory = _.find($scope.galleryArr, {
            "id": $scope.galleryid
        }).hindiname;
    });
    NavigationService.getGallerySlide($scope.galleryid, function(data) {
        console.log(data);
        $scope.slides = data;
    });



})


.controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("gallery");
    $scope.menutitle = NavigationService.makeactive("Photo Gallery");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.msg = "";
    $scope.msg2 = "";
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.photos = true;
    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }
    $scope.getPhotos = function() {
        NavigationService.getAllGallery(function(data) {
            $scope.slides = data;
            if (data.length === 0) {
                $scope.msg = "No Data Found";
            }
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
            if (data.length === 0) {
                $scope.msg2 = "No Data Found.";
            }
            console.log($scope.videos);
        });
    };
    $scope.changeTab = function(value) {
        if (value === true) {
            $scope.photos = true;
            $scope.getPhotos();
        } else {
            $scope.photos = false;
            $scope.getVideos();
        }
    };

})

.controller('JPPTVCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("jpp-tv");
    $scope.menutitle = NavigationService.makeactive("JPP TV");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.msg = "";
    $scope.videos = [];

    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }

    $scope.getVideos = function() {
        NavigationService.getAllVideoGallery(function(data) {
            $scope.videos = data;
            if (data.length === 0) {
                $scope.msg = "Sorry, nothing to show here!";
            }
        });
    };

    $scope.getVideos();

})

.controller('WallpapperCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("wallpapper");
    $scope.menutitle = NavigationService.makeactive("Wallpapers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }


    NavigationService.getWallpaperCategoryForDesktop(function(data) {
        $scope.wallpapper = data;
    });

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
    $scope.msg = "";
    $scope.wallpapper = [];
    $scope.wallpaperArr = [];
    var pageNo = 1;
    $scope.lastpage = false;
    $scope.wallpaperid = $stateParams.id;


    $scope.currentlang = $.jStorage.get("languageSet");

    console.log(currentlang);
    globalFunc.changeLang = function() {
        $scope.currentlang = currentlang;

    }



    NavigationService.getWallpaperCategoryForDesktop(function(data) {
        $scope.wallpaperArr = data;
        $scope.wallpapercategory = _.find($scope.wallpaperArr, {
            "id": $scope.wallpaperid
        }).name;
        $scope.hindiwallpapercategory = _.find($scope.wallpaperArr, {
            "id": $scope.wallpaperid
        }).hname;
    });

    $scope.getWallpapers = function(page) {
        $scope.lastpage = false;
        $scope.request = {
            pageno: page,
            wallpaperid: $scope.wallpaperid
        };
        NavigationService.getallwallpaper($scope.request, function(data) {
            var temp = data.queryresult;
            if ($scope.wallpapper.length === 0) {
                $scope.msg = "No wallpapers found.";
            }
            console.log(page);
            console.log(temp);
            if (temp.length === 0) {
                $scope.lastpage = true;
            } else {
                _.each(temp, function(key) {
                    $scope.wallpapper.push(key);
                });
            }
        });
    };
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
        $scope.getm = [];

        //

        $scope.currentlang = $.jStorage.get("languageSet");

        console.log(currentlang);
        globalFunc.changeLang = function() {
            $scope.currentlang = currentlang;

        }
        $scope.news2 = [];
        NavigationService.getallnews(function(data) {
            $scope.news = data;

            // console.log(data[0].timestamp);
            $scope.getMonthName = function(val) {
                switch (val) {
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
                console.log(day);
                $scope.dday = day;
            }
            // $scope.test = "12";
            // for(i=0;i<$scope.news.length;i++){
            //   // console.log($scope.news.length);
            //   $scope.getm=$scope.news[i].timestamp;
            //   // console.log($scope.getm);
            //   var day=$scope.getm;
            //   // $scope.news.timestamp=day;
            //      console.log(day);
            //   switch (day.getMonth()) {
            //      case 1:
            //          day = "जनवरी";
            //          break;
            //      case 2:
            //          day = "फरवरी";
            //          break;
            //      case 3:
            //          day = "मार्च";
            //          break;
            //      case 4:
            //          day = "अप्रैल";
            //          break;
            //      case 5:
            //          day = "मई";
            //          break;
            //      case  7:
            //          day = "जून";
            //          break;
            //      case  8:
            //          day = "जुलाई";
            //          break;
            //      case  9:
            //          day = "अगस्त";
            //          break;
            //      case  10:
            //          day = "सितम्बर";
            //          break;
            //      case  11:
            //          day = "अक्टूबर";
            //          break;
            //      case  12:
            //          day = "नवंबर";
            //          break;
            //      case  12:
            //          day = "दिसंबर";
            //          break;
            //   };
            //
            // }
            // $scope.news2 = data[0];
            // console.log($scope.news2);
            // console.log('globalLocale',globalLocale);
            //             localLocale.locale('hi'); // set this instance to use French
            //   console.log(localLocale.format('LLLL')); // dimanche 15 juillet 2012 11:01
            //   globalLocale.format('LLLL'); // Sunday, July 15 2012 11:01 AM
            //
            //             $scope.newst=
            // localLocale.format('LLLL');
            //             // $scope.news.timestamp=$scope.newst;

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
        });
        $scope.register = "";
        $scope.register.favouriteplayer = "";
        $scope.changeSelected = function() {
            $scope.register.favouriteplayer = _.map(_.filter($scope.players, "status"), "name").toString();
        };
        $scope.players = [{
            name: "Jasvir Singh"
        }, {
            name: "Rajesh Narwal"
        }, {
            name: "Ran Singh"
        }, {
            name: "Rohit Rana"
        }, {
            name: "Amit Nagar"
        }, {
            name: "Parvesh"
        }, {
            name: "Parveen Narwal"
        }, {
            name: "David Tsai"
        }, {
            name: "Shabeer Bapu Sharfudheen"
        }, {
            name: "Mahipal Narwal"
        }, {
            name: "Amit Hooda"
        }, {
            name: "Shrikant Tewthia"
        }, {
            name: "Tushar Patil"
        }, {
            name: "Lo Chia Wei"
        }, {
            name: "Masayuki Shimokawa"
        }];

        $scope.register = {};
        $scope.showmsg = false;

        $scope.doRegister = function() {
            NavigationService.contactus($scope.register, function(data) {
                console.log(data);
                if (data.value === true) {
                    $scope.showmsg = true;
                }
            });
        };

    })

.controller('NewsDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("news-detail");
    $scope.menutitle = NavigationService.makeactive("News");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('PlayersCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("players");
    $scope.menutitle = NavigationService.makeactive("Players");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.getPlayers = function() {
        if ($scope.slideindex === undefined) {
            $scope.slideindex = 0;
        }
        $scope.player = [{

            image: "img/player/p3.png",
            name: "Jasvir Singh",
            desg: "Raider",
            nationality: "Panipat",
            dob: "31",
            jersyno: "02",
            desp: "Pro-Kabaddi (2015-2014),Senior National (2013), National Game (2011), Indoor Asian Game (2013), Asian Game (2014)",
            desp2: "Pro-kabaddi (2014)- 1st Position,Senior National (2013) - 1st Position, National Game (2011)- 1st Position, Indoor Asian Game (2013) - 1st Position, Asian Game (2014) - 1st Position."

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

            image: "img/player/p8.png",
            name: "Ran Singh",
            desg: "All Rounder",
            nationality: "Sangrur",
            dob: "28",
            jersyno: "33",
            desp: "Pro-Kabaddi (2015-2014),Senior National (2002-08), Senior National (2014), Dept. National Tournament  (2014), All India Police Tournanment (2008-11).",
            desp2: "Pro-kabaddi (2014)- 1st Position,Senior National (2007) - 2nd Position, Senior National (2006) - 3rd Position, All India Police Tournament (2008) (2011) - 1st Position, All India Police Tournament (2009-10) - 3rd Position, Dept. National Tournament (2014) - 2nd Position"

        }, {

            image: "img/player/p10.png",
            name: "Rohit Rana",
            desg: "Defender",
            nationality: "Dharmshala",
            dob: "27",
            jersyno: "05",
            desp: "Pro-Kabaddi (2015-2014), National Games (2010-15), Senior National  (2010-14), Dept National (2011-14).",
            desp2: "Pro-kabaddi (2014)- 1st Position,National Games (2014) - 3rd Position, Dept. National (2011-14) - 1st Postion"

        }, {
            image: "img/player/p21.png",
            name: "Amit Nagar",
            desg: "Raider"
        }, {
            image: "img/player/p22.png",
            name: "Parvesh",
            desg: "Defender"
        }, {
            image: "img/player/p23.png",
            name: "Parveen Narwal",
            desg: "All Rounder"
        }, {
            image: "img/player/p19.png",
            name: "David Tsai",
            desg: "Defender"
        }, {
            image: "img/player/p24.png",
            name: "Shabeer Bapu Sharfudheen",
            desg: "Raider"
        }, {
            image: "img/player/p25.png",
            name: "Mahipal Narwal",
            desg: "Raider"
        }, {
            image: "img/player/p26.png",
            name: "Amit Hooda",
            desg: "Defender"
        }, {
            image: "img/player/p27.png",
            name: "Shrikant Tewthia",
            desg: "All Rounder"
        }, {
            image: "img/player/p28.png",
            name: "Tushar Patil",
            desg: "All Rounder"
        }, {
            image: "img/player/p20.png",
            name: "Lo Chia Wei",
            desg: "Raider"
        }, {
            image: "img/player/p20.png",
            name: "Masayuki Shimokawa",
            desg: "Raider"
        }];
        var i = 0;
        _.each($scope.player, function(key) {
            key.id = i;
            i++;
        });

        //write code to reindex player by slideindex
    };
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
        });

    };
})

.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('headerctrl', function($scope, TemplateService, $translate, $rootScope, $uibModal) {

    var languagePicker = {};
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

})

.controller('languageCtrl', function($scope, $state, TemplateService, $translate, $rootScope, $uibModal) {
    var siteLanguage = $.jStorage.get('languageSet');
    $scope.languageActive = siteLanguage;

    console.log($state);

    $scope.language = 'img/lan-' + siteLanguage + '.jpg';
    if (siteLanguage) {
        $translate.use(siteLanguage);
        $.jStorage.set("languageSet", siteLanguage);
        if ($state.current.name == 'home') {
            globalFunc.changeSlides(siteLanguage);
        }
    }

    var languagePicker = {};
    $scope.changeLanguage = function(val) {
        $translate.use(val);
        if ($state.current.name == 'home') {
            globalFunc.changeSlides(val);
        }
        $.jStorage.set("languageSet", val);
        $scope.language = 'img/lan-' + val + '.jpg';
        languagePicker.close();
        $scope.languageActive = val;
    };
    $scope.changeLanguage2 = function(val) {
        currentlang = val;
        console.log('currentlang', currentlang);
        $translate.use(val);
        if ($state.current.name == 'home') {
            globalFunc.changeSlides(val);
        }
        $.jStorage.set("languageSet", val);
        $scope.languageActive = val;
        globalFunc.changeLang();
    };

    $scope.languagePicker = function() {
        languagePicker = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/language-picker.html',
            size: 'md',
            backdrop: 'static',
            scope: $scope,
            keyboard: false
        });
    };

    if (!siteLanguage) {
        $scope.languagePicker();
    }

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
