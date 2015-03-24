(function(){
  angular
    .module('FaceSketch')
    .controller('CameraCtrl', function (){
      var self = this;
      console.log('camera');

      if (typeof(cordova) == 'undefined'){
        self.picture = 'http://placekitten.com/g/320/320';
        console.log('Camera not found');
      }

      document.addEventListener("deviceready", function () {
        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 320,
          targetHeight: 320,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        navigator.camera
          .getPicture(options)
          .then(function (imageData) {
            alert('yep');
            self.picture = "data:image/jpeg;base64," + imageData;
          }, function (err) {
            alert(err);
          });
      }, false);
    });
})();
