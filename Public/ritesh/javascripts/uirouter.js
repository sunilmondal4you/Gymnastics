/**
 * Created by abc on 21/07/2016.
 */

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME PAGE =================================
        .state('home', {
            url: '/home',
            templateUrl: 'veiws/home.html',

        })

        // ABOUT PAGE =================================
        .state('about', {
            url: '/about',
            templateUrl: 'veiws/about.html'
        })

        // ABOUT PAGE =================================
        .state('trainers', {
            url: '/trainers',
            templateUrl: 'veiws/trainers.html'
        })
            
        // HOME PAGE =================================
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'veiws/gallery.html',

        })
        // HOME PAGE =================================
        .state('services', {
            url: '/services',
            templateUrl: 'veiws/services.html',

        })

        // HOME PAGE =================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'veiws/contact.html',

        });




});
