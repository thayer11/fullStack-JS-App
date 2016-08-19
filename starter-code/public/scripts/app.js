angular.module('CardsAgainstAssembly', ['ngRoute']);

function getAll(request, response) {
  Card.find(function(error, CardsAgainstAssembly) {
    if(error) response.json({message: 'Could not find a card'});

    response.json({cards: cards});
  }).select('-__v');
}