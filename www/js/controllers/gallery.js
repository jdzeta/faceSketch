(function(){
  angular
  .module('FaceSketch')
  .controller('GalleryCtrl', function ($cordovaCamera)
  {

  	var self = this;

  	self.test = "TEST";

  	self.image = {
  		"src" : "",
  		"alt" : "Photo 2 draw selected from library"
  	}

	self.testGetPics = function(){
		navigator.camera.getPicture(self.onCaptureSuccess, self.onCaptureFail, {
			allowEdit: true,
			correctOrientation: true,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		});
	}

	self.onCaptureSuccess = function(imageData) {
		//alert(imageData);
		self.image.src = "data:image/jpeg;base64," + imageData;
	}

	self.onCaptureFail = function(message) {
	    alert('Failed because: ' + message);
	}

	// file://storage/sdcard0/Android/data/com.faceplusplus.facesketch/cache/##.jpg

	self.testGetPics();

  });
})();
