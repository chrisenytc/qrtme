// QRtme App
angular.module('qrtme', ['ionic', 'qrtme.controllers', 'qrtme.services', 'ngAnimate', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.scan', {
        url: '/scan',
        views: {
            'tab-scan': {
                templateUrl: 'templates/tab-scan.html',
                controller: 'ScanCtrl'
            }
        }
    })

    .state('tab.history', {
            url: '/history',
            views: {
                'tab-history': {
                    templateUrl: 'templates/tab-history.html',
                    controller: 'HistoryCtrl'
                }
            }
        })
        .state('tab.history-detail', {
            url: '/history/:index',
            views: {
                'tab-history': {
                    templateUrl: 'templates/tab-history-detail.html',
                    controller: 'HistoryDetailCtrl'
                }
            }
        })

    .state('tab.about', {
        url: '/about',
        views: {
            'tab-about': {
                templateUrl: 'templates/tab-about.html',
                controller: 'AboutCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/scan');
    // tabs position
    $ionicConfigProvider.tabs.position('bottom');
    // nav title
    $ionicConfigProvider.navBar.alignTitle('center');

});
