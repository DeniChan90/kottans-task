angular.module('pokedexApp', [])
.controller('pokedexCtrl', ['$scope', '$http',
    function ($scope, $http){
      $http.get('http://pokeapi.co/api/v1/type/?limit=999').success(function(data){
        $scope.types = data.objects;
      });
      $http.get('http://pokeapi.co/api/v1/pokemon/?limit=12').success(function(data){
          $scope.pokemons = data;
      });
      //SET A POKEMON TYPE-----------------------------------------------------
      setType($scope);
      //TYPE filter--------------------------------------------------------
      filterType($scope);
      // Get a pokemon details-----------------------------------------------------
      $scope.getInfo = function(id){
        $http.get('http://pokeapi.co/api/v1/pokemon/' + id).success(function(data){
            $scope.pokemonInfo = data;
        });
         $('#pokemon-details').css('display', 'inline-block');
         $('#pokemonPic').attr('src', 'http://pokeapi.co/media/img/'+ id +'.png');
      };
      //lOAD MORE POKEMONS-----------------------------------------------------
      $scope.loadMore = function(url){
        $http.get('http://pokeapi.co/' + url).success(function(data){
          $scope.pokemons.meta = data.meta
          $scope.pokemons.objects = $scope.pokemons.objects.concat(data.objects)
        });
      };
}])
.directive('pokemonDetails', function(){
  return {
    templateUrl : '../directivesHTML/pokemon-details.html'
  }
}).$inject = ['$scope'];
