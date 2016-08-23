/**
 * Created by abc on 21/07/2016.
 */
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME PAGE =================================
        .state('home', {
            url: '/home',
            templateUrl: 'veiws/home.html',
            controller: 'homectrl'
        })

        // ABOUT PAGE =================================
        .state('about', {
            url: '/about',
            templateUrl: 'veiws/about.html',
            controller: 'aboutctrl'
        })

        // TRAINERS PAGE =================================
        .state('trainers', {
            url: '/trainers',
            templateUrl: 'veiws/trainers.html',
            controller: 'trainerctrl'
        })
            
        // GALLERY PAGE =================================
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'veiws/gallery.html',
            controller: 'galleryctrl'
        })
        // CLASSES PAGE =================================
        .state('classes', {
            url: '/classes',
            templateUrl: 'veiws/classes.html',
            controller: 'classesctrl'
        })

        // PRICING PAGE =================================
        .state('pricing', {
            url: '/pricing',
            templateUrl: 'veiws/pricing.html',
            controller: 'pricingctrl'

        })

        // CONTACT PAGE =================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'veiws/contact.html',
            controller: 'contactctrl'
        });




});
