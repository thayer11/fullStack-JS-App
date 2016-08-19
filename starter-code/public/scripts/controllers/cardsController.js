var app = angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      // template: 'Home!'
      templateUrl: 'templates/card-index.html',
      controller: 'CardsController'
    })
    .when('/cards/:id', {
        templateUrl: 'templates/card-show.html',
        controller: 'CardsController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})

app.controller('CardsIndexCtrl',function($scope, $http){
  this.$inject = ["$http"];
    function getAllCards() {
        $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
            .then(function(response) {
                $scope.cards = response.data;
            });
    }
        getAllCards();
});


app.controller('CardsShowCtrl',function($scope, $http, $routeParams) {
  console.log($routeParams.id);
    this.$inject=["$http"];
    function getCard(id) {
        $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards'+id)
            .then(function(response) {
                $scope.card = response.data;
            });
    }
    var cardID = $routeParams.id;
    getCard(cardID);
});

// function CardsController(){
//   var vm = this;
//   vm.questionsList = [
//     {question: "What is Batman's guilty pleasure?"},
//     {question: "I'm sorry professor, I couldn't complete my homework because _________."},
//     {question: "I get by with a little help from _________."},
//     {question: "_________. It's a trap!"},
//     {question: "The class field trip was completely ruined by _________."},
//     {question: "What's my secret power?"}
//   ]
// }
