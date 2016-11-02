(function () {
  var app = angular.module('githubViewer', ["ngRoute"]);
  
  //main.html
  //user.html
  //repo.html
  //index.html
  app.config(function ($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl : "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl : "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl : "repo.html",
        controller: "RepoController"
      })
      .otherwise({
        redirectTo: "/main"
      })
  });
  
}());