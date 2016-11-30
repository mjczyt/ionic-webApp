// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
         // Turn off back button text
         $ionicConfigProvider.backButton.previousTitleText(false);
         */

        $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.activity', {
                url: '/activity',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/activity.html',
                        controller: 'ActivityCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-activity').classList.toggle('on');
                            }, 200);
                        }
                    }
                }
            })

            .state('app.friends', {
                url: '/friends',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/friends.html',
                        controller: 'FriendsCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-friends').classList.toggle('on');
                            }, 900);
                        }
                    }
                }
            })

            .state('app.gallery', {
                url: '/gallery',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/gallery.html',
                        controller: 'GalleryCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-gallery').classList.toggle('on');
                            }, 600);
                        }
                    }
                }
            })

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.chat', {
                url: '/chat',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/chat.html',
                        controller: 'chatCtrl'

                    },
                    'fabContent': {

                        template: '<button id="fab-chat" class="button button-fab button-fab-top-left expanded button-energized-900 spin" ><i class="icon ion-chatbubbles"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-chat').classList.toggle('on');
                            }, 600);
                        }
                    }
                }
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    })
    .controller('myCtrl', ['$scope', '$timeout', '$ionicPopup', function ($scope, $timeout, $ionicPopup) {
        // A confirm dialog
        $scope.showConfirm = function (animation) {

            // Add animate css class to out popup container
            $timeout(function () {
                var popupElements = document.getElementsByClassName("popup-container");
                if (popupElements.length) {
                    $scope.popupElement = angular.element(popupElements[0]);
                    $scope.popupElement.addClass('animated');
                    $scope.popupElement.addClass(animation)
                }

            }, 1);
            // Done

            // A confirm dialog TAKEN FROM http://ionicframework.com/docs/api/service/$ionicPopup/
            var confirmPopup = $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Do you wannne fuck with me ?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

    }])
    .controller('galleryCtrl', ['$scope', '$timeout', '$ionicPopup', function ($scope, $timeout, $ionicPopup) {
        $scope.item = [{
            id: 0,
            title: 'cc',
            imgSrc: 'img/01.jpg',
            likeCount: 2,
            commentCount: 3
        }, {
            id: 1,
            title: 'zz',
            imgSrc: 'img/02.jpg',
            likeCount: 1,
            commentCount: 5
        }];
    }])
;
