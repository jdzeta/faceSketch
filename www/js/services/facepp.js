(function(){
  angular
    .module('FaceSketch')
    .factory('facepp', function ($http, auth, imgur){
      // var api = new FacePP(auth.api_key, auth.api_secret, {apiURL: 'https://apius.faceplusplus.com/v2'});
      imgur.setAPIKey(auth.imgur_api_key);

      return {
        getLandmark: function(img){
          // Post image on imgur
          imgur
            .upload(img, true)
            .then(function (model){
              if(!model.link.match(/^http:\/\/i.imgur.com\//)){
                return null;
              }
              // Get face id from imgur link
              $http
                .get('https://apius.faceplusplus.com/v2/detection/detect?url=' + model.link + '&api_secret=' + auth.fpp_api_secret + '&api_key=' + auth.fpp_api_key)
                .success(function (detect){
                  console.log(detect);
                  // Check if facepp has detected a face
                  if(detect.face.length){
                    // Get landmark from face id
                    $http
                      .get('http://apius.faceplusplus.com/detection/landmark?api_secret=' + auth.fpp_api_secret + '&api_key=' + auth.fpp_api_key + '&face_id=' + detect.face[0].face_id + '&type=83p')
                      .success(function (landmark){
                        console.log(landmark);
                        return landmark.result[0].landmark;
                      })
                      .error(function (err){
                        console.log(err);
                        return null;
                      });
                  }
                })
                .error(function (err){
                  console.log(err);
                  return null;
                });
            });
        }
      }
    })
})();
