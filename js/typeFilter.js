var filterType = function($scope){
  $scope.typeFilter = {};

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  };

  function noFilter(filterObj) {
    for (var key in filterObj){
      if(filterObj[key]){
        return false;
      };
    };
    return true;
  };

  $scope.filterByType = function(pokemon){
     for(var i = 0; i < pokemon.types.length; i++){
       if ($scope.typeFilter[pokemon.types[i].name.capitalize()] || noFilter($scope.typeFilter)) {return true}
     };
  };

}
