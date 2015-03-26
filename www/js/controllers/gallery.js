(function(){
  angular
  .module('FaceSketch')
  .controller('GalleryCtrl', function ($cordovaCamera, auth, facepp, sketch)
  {

  	var self = this;

  	self.image = {
  		"src" : "",
  		"alt" : "Photo 2 draw selected from library"
  	}

	self.getPics = function(){
		navigator.camera.getPicture(self.onCaptureSuccess, self.onCaptureFail, {
			allowEdit: true,
			correctOrientation: true,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		});
	}

	self.onCaptureSuccess = function(imageData) {
		self.image.src = "data:image/jpeg;base64," + imageData;
		self.image.alt = "New photo to draw";
	}

	self.onCaptureFail = function(message) {
	    console.log('Failed because: ' + message);
	}

	self.shoot = function(){
		if (self.image.src.length > 0) {
			facepp
	          .getLandmark(self.image.src)
	          .then(function(face){
	            self.isLoading = false;
	            sketch.setFace(face);
	            window.location = '#/drawing';
	          });
    	} else {
    		alert("Select photo first");
    	}
	}

	// file://storage/sdcard0/Android/data/com.faceplusplus.facesketch/cache/##.jpg

	self.getPics();

  });
})();
