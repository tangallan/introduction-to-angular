(function () {
  var app = angular.module('githubViewer');
  
  var RepoController = function ($scope, $routeParams, github) {
    
    var onCompleteRepoContributors = function(repoContributors) {
      $scope.error = null;
      $scope.repoContributors = repoContributors;
    };
    
    var onCompleteRepo = function(repo) {
      $scope.error = null;
      $scope.repo = repo;
      
      github.getRepoContributors($scope.username, $scope.reponame)
        .then(onCompleteRepoContributors, onErrorRepo)
    };
    
    var onErrorRepo = function(reason) {
      $scope.error = "Error getting repo!";
    };
    
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    
    github.getRepo($scope.username, $scope.reponame)
      .then(onCompleteRepo, onErrorRepo);
      
  };
  
  app.controller("RepoController", RepoController);
}());