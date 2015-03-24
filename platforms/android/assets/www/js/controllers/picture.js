angular
  .module('FaceSketch')
  .controller('PictureCtrl', function (){
    var self = this;

    self.currentTab;

    self.tabs = [
      {
        name: 'Gallery',
        template: 'views/gallery.html'
      },
      {
        name: 'Camera',
        template: 'views/camera.html'
      }
    ];

    self.tabSelect = function(index){
      self.currentTab = index.template;
    }

  });
