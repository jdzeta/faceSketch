(function(){
  angular
    .module('FaceSketch')
    .controller('DrawingCtrl', function (sketch){
      var self = this;
      sketch.drawFace();

      window.canvas2ImagePlugin.saveImageDataToLibrary(
      	function(msg){
      		console.log(msg);
      	},
      	function(err){
      		console.log(err);
      	},
      	document.getElementById('canvas');
      );
    });
})();
