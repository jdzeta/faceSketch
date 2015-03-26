(function(){
  angular
    .module('FaceSketch')
    .controller('CameraCtrl', function (auth, facepp, sketch){
      var self = this;
      self.ready = false;
      self.isLoading = false;
      console.log('camera');
      self.picture;

      if (typeof(cordova) == 'undefined'){
        self.picture = 'http://placekitten.com/g/320/320';
        console.log('Camera not found');
      }

      document.addEventListener("deviceready", function ($scope) {
        console.log('deviceready');
        self.ready = true;
      }, false);

      self.shoot = function(){
        console.log('shoot');
        if(typeof(cordova) !== 'undefined' && self.ready){
          self.isLoading = true;
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA
          });
        } else if(typeof(cordova) == 'undefined'){
          // Do something
        }
      }

      function onSuccess(imageData) {
        console.log('success');
        self.picture = "data:image/jpeg;base64," + imageData;
        facepp
          .getLandmark(imageData)
          .then(function(face){
            self.isLoading = false;
            sketch.setFace(face);
            window.location = '#/drawing';
          });
      }

      function onFail(message) {
        console.log('error', message);
        alert('Failed because: ' + message);
      }
    });
})();
