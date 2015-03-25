(function(){
  angular
    .module('FaceSketch')
    .controller('CameraCtrl', function (auth, facepp){
      var self = this;
      self.ready = false;
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
        if(self.ready){
          console.log('really, shoot');
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA
          });
        }
      }

      function onSuccess(imageData) {
        console.log('success');
        self.picture = "data:image/jpeg;base64," + imageData;
        facepp.getLandmark(imageData);
      }

      function onFail(message) {
        console.log('error', message);
        alert('Failed because: ' + message);
      }
    });
})();
