(function(){
  angular
  .module('FaceSketch')
  .controller('GalleryCtrl', function ($cordovaCamera)
  {
  	this.getPhoto = function(source) {
	// Retrieve image file location from specified source
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
		destinationType: destinationType.FILE_URI,
		sourceType: source });
	}

	this.images = [];

	this.getPictures = function(){
		this.images = Camera.PictureSourceType.PHOTOLIBRARY;
		alert(this.images);
	};

	this.testGetPics = function(){
		navigator.camera.getPicture(this.onCaptureSuccess, this.onCaptureFail, {
			allowEdit: true,
			correctOrientation: true,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		});
	}

	this.onCaptureSuccess = function(imageData) {
		alert(imageData);
	}

	this.onCaptureFail = function(message) {
	    alert('Failed because: ' + message);
	}

	// file://storage/sdcard0/Android/data/com.faceplusplus.facesketch/cache/##.jpg

	this.testGetPics();

  });
})();
