var app = angular.module('nz', ['ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/main");
  
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "views/main.html"
    })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "partials/state2.html"
    // })
;
});

