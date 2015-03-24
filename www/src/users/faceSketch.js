(function(){
	
	angular
	.module('faceSketch')
	.controller('GalleryController', ['', function()
	{
		this.getPhoto = function(source) {
			// Retrieve image file location from specified source
			navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, destinationType: destinationType.FILE_URI,sourceType: source });
		}
	}])
	.controller('PictureCtrl', function($scope, $cordovaCamera) {

		document.addEventListener("deviceready", function () {

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
				var image = document.getElementById('myImage');
				image.src = "data:image/jpeg;base64," + imageData;
			}, function(err) {
      // error
  });

		}, false);
	});


})();