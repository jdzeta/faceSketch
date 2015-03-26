(function(){
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

      self.currentTab = _.findWhere(self.tabs, {name: $routeParams.tab}) || self.tabs[0];

      self.tabSelect = function(tab){
        self.currentTab = tab;
      }

    });
})();
