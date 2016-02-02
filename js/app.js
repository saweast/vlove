var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'home'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'about'
        })
        .when('/contacts', {
            templateUrl: 'pages/contacts.html',
            controller: 'contacts'
        })
        .when('/gallery', {
            templateUrl: 'pages/gallery.html',
            controller: 'gallery'
        })
        .when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'services'
        })
})
