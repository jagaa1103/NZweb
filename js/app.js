var app = angular.module('nz', ['ui.bootstrap', 'ui.router', 'akoenig.deckgrid']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/main");
  
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "views/main.html",
      controller: "mainCtrl"
    })
    .state('picSlide', {
      url: "/picSlide/:zagvar_name",
      templateUrl: "views/picSlide.html",
      controller: "picSlideCtrl"
    })
    .state('design', {
      url: "/design",
      templateUrl: "views/design.html",
      controller: "designCtrl"
    })
    .state('inspiration', {
      url: "/inspiration",
      templateUrl: "views/inspiration.html",
      controller: "inspirationCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html",
      controller: "contactCtrl"
    })
;
});

