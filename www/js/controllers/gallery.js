(function(){
  angular
  .module('FaceSketch')
  .controller('GalleryCtrl', function (auth, facepp, sketch, $mdDialog)
  {

  	var self = this;
    self.isLoading = false;

  	self.image = {
  		"src" : "",
  		"alt" : "Photo to draw from library"
  	}

	self.getPics = function(){
		navigator.camera.getPicture(self.onCaptureSuccess, self.onCaptureFail, {
			allowEdit: true,
			correctOrientation: true,
      targetWidth: 320,
      targetHeight: 460,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		});
	}

	self.onCaptureSuccess = function(imageData) {
    self.base64 = imageData;
		self.image.src = "data:image/jpeg;base64," + imageData;
		self.image.alt = "New photo to draw";
	}

	self.onCaptureFail = function(message) {
	    console.log('Failed because: ' + message);
	}

	self.shoot = function(){
		if (self.base64.length > 0) {
      self.isLoading = true;
			facepp
	          .getLandmark(self.base64)
	          .then(function (face){
              self.isLoading = false;
              if(!face){
                alert = $mdDialog.alert({
                  title: 'Error',
                  content: 'An error occured, please try again.\nSorry ...',
                  ok: 'Close'
                });
                $mdDialog
                  .show( alert )
                  .finally(function() {
                    alert = undefined;
                  });
                return;
              }
              sketch.setFace(face);
              window.location = '#/drawing';
	          });
    	} else {
        alert = $mdDialog.alert({
          title: 'Oops!',
          content: 'You have to select a photo first.',
          ok: 'Ok'
        });
        $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    	}
	}

	// file://storage/sdcard0/Android/data/com.faceplusplus.facesketch/cache/##.jpg

	self.getPics();

  });
})();
