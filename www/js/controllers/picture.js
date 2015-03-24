angular
  .module('FaceSketch')
  .controller('PictureCtrl', function ($routeParams){
    var self = this;

    self.tabs = [
      {
        name: 'Camera',
        template: 'views/camera.html'
      },
      {
        name: 'Gallery',
        template: 'views/gallery.html'
      }
    ];

    self.currentTab;

    self.tabSelect = function(index){
      self.currentTab = index.template;
    }

  });
