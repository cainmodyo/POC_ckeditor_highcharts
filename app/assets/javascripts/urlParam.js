$.urlParam = function(name){
      var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if(results != null && results.length != 0){
        return results[1];
      }
      else {
        return null;
      }
};