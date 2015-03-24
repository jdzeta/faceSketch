angular
  .module('FaceSketch')
  .controller('PictureCtrl', function ($routeParams){
    var self = this;

    self.tabs = [
      {
        name: 'camera',
        template: 'views/camera.html'
      },
      {
        name: 'gallery',
        template: 'views/gallery.html'
      }
    ];

    self.currentTab = $routeParams.tab || 'camera';

    self.tabSelect = function(tab){
      self.currentTab = tab.name;
    }

  });
