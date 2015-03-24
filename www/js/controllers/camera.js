(function(){
  angular
    .module('FaceSketch')
    .controller('CameraCtrl', function ($cordovaCamera){
      var self = this;

      document.addEventListener("deviceready", function () {
        self.camera = true;

        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          alert('yep');
          self.picture = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          alert(err);
        });
      }, false);
    });
})();
