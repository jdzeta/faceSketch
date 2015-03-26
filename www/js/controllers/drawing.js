(function(){
  angular
    .module('FaceSketch')
    .controller('DrawingCtrl', function (sketch){
      var self = this;
      sketch.drawFace();
    });
})();
