(function(){
  angular
    .module('FaceSketch')
    .factory('facepp', function ($http, auth, imgur){
      // var api = new FacePP(auth.api_key, auth.api_secret, {apiURL: 'https://apius.faceplusplus.com/v2'});
      imgur.setAPIKey(auth.imgur_api_key);

      return {
        getLandmark: function(img){
            imgur
              .upload(img, true)
              .then(function (data){
                console.log(data);
              });
        }
      }
    })
})();
