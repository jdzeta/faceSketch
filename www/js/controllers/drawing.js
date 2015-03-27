(function(){
  angular
    .module('FaceSketch')
    .controller('DrawingCtrl', function (sketch, $mdDialog){
      var self = this;
      sketch.drawFace();

      self.share = function(){
        var data = document.querySelector('canvas').toDataURL('image/png');
        window.plugins.socialsharing.share(null, 'Picture', data, null)
      }

      self.savePic = function(){
        window.canvas2ImagePlugin.saveImageDataToLibrary(
        	function(msg){
        		console.log(msg);
            alert = $mdDialog.alert({
              title: 'Success !',
              content: 'Picture successfully saved on device.',
              ok: 'Close'
            });
            $mdDialog
              .show( alert )
              .finally(function() {
                alert = undefined;
                window.location = '#/';
              });
        	},
        	function(err){
        		console.log(err);
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
        	},
        	document.getElementById('canvas')
        );
      }
    });
})();
