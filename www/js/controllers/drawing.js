(function(){
  angular
    .module('FaceSketch')
    .controller('DrawingCtrl', function (sketch){
      var self = this;
      // var face = {
      //   img_width: 960,
      //   img_height: 1280,
      //   contour_chin: {
      //     x: 50.88122,
      //     y: 53.080488
      //   },
      //   contour_left1: {
      //     x: 36.307073,
      //     y: 30.676829
      //   },
      //   contour_left2: {
      //     x: 36.447561,
      //     y: 34.091707
      //   },
      //   contour_left3: {
      //     x: 36.919024,
      //     y: 37.23561
      //   },
      //   contour_left4: {
      //     x: 37.444634,
      //     y: 40.443171
      //   },
      //   contour_left5: {
      //     x: 38.356098,
      //     y: 43.515122
      //   },
      //   contour_left6: {
      //     x: 40.006585,
      //     y: 46.02
      //   },
      //   contour_left7: {
      //     x: 41.981951,
      //     y: 48.316585
      //   },
      //   contour_left8: {
      //     x: 44.456341,
      //     y: 50.493171
      //   },
      //   contour_left9: {
      //     x: 47.233415,
      //     y: 52.439024
      //   },
      //   contour_right1: {
      //     x: 64.42439,
      //     y: 30.805366
      //   },
      //   contour_right2: {
      //     x: 63.906098,
      //     y: 34.076341
      //   },
      //   contour_right3: {
      //     x: 63.066098,
      //     y: 37.405854
      //   },
      //   contour_right4: {
      //     x: 62.325366,
      //     y: 40.293659
      //   },
      //   contour_right5: {
      //     x: 61.375854,
      //     y: 43.158049
      //   },
      //   contour_right6: {
      //     x: 59.907073,
      //     y: 45.887561
      //   },
      //   contour_right7: {
      //     x: 58.206829,
      //     y: 48.320976
      //   },
      //   contour_right8: {
      //     x: 56.320976,
      //     y: 50.539756
      //   },
      //   contour_right9: {
      //     x: 53.953415,
      //     y: 52.39878
      //   },
      //   left_eye_bottom: {
      //     x: 43.485854,
      //     y: 31.969268
      //   },
      //   left_eye_center: {
      //     x: 43.471707,
      //     y: 30.731707
      //   },
      //   left_eye_left_corner: {
      //     x: 40.399756,
      //     y: 30.762195
      //   },
      //   left_eye_lower_left_quarter: {
      //     x: 41.655854,
      //     y: 31.557561
      //   },
      //   left_eye_lower_right_quarter: {
      //     x: 45.042439,
      //     y: 31.857561
      //   },
      //   left_eye_pupil: {
      //     x: 43.768537,
      //     y: 30.528537
      //   },
      //   left_eye_right_corner: {
      //     x: 46.617073,
      //     y: 31.718537
      //   },
      //   left_eye_top: {
      //     x: 43.55878,
      //     y: 29.35
      //   },
      //   left_eye_upper_left_quarter: {
      //     x: 41.816341,
      //     y: 29.626098
      //   },
      //   left_eye_upper_right_quarter: {
      //     x: 45.270976,
      //     y: 30.029268
      //   },
      //   left_eyebrow_left_corner: {
      //     x: 38.147805,
      //     y: 26.966829
      //   },
      //   left_eyebrow_lower_left_quarter: {
      //     x: 40.229512,
      //     y: 26.508293
      //   },
      //   left_eyebrow_lower_middle: {
      //     x: 42.760732,
      //     y: 26.529024
      //   },
      //   left_eyebrow_lower_right_quarter: {
      //     x: 44.861951,
      //     y: 26.905366
      //   },
      //   left_eyebrow_right_corner: {
      //     x: 47.123415,
      //     y: 26.989756
      //   },
      //   left_eyebrow_upper_left_quarter: {
      //     x: 40.257805,
      //     y: 25.316341
      //   },
      //   left_eyebrow_upper_middle: {
      //     x: 42.73122,
      //     y: 25.100732
      //   },
      //   left_eyebrow_upper_right_quarter: {
      //     x: 44.884146,
      //     y: 25.650488
      //   },
      //   mouth_left_corner: {
      //     x: 46.03,
      //     y: 45.197561
      //   },
      //   mouth_lower_lip_bottom: {
      //     x: 50.42561,
      //     y: 48.143902
      //   },
      //   mouth_lower_lip_left_contour1: {
      //     x: 48.369268,
      //     y: 45.565854
      //   },
      //   mouth_lower_lip_left_contour2: {
      //     x: 47.100732,
      //     y: 46.647561
      //   },
      //   mouth_lower_lip_left_contour3: {
      //     x: 48.430244,
      //     y: 47.777317
      //   },
      //   mouth_lower_lip_right_contour1: {
      //     x: 52.483171,
      //     y: 45.385854
      //   },
      //   mouth_lower_lip_right_contour2: {
      //     x: 53.834634,
      //     y: 46.287073
      //   },
      //   mouth_lower_lip_right_contour3: {
      //     x: 52.197805,
      //     y: 47.670488
      //   },
      //   mouth_lower_lip_top: {
      //     x: 50.509756,
      //     y: 45.671707
      //   },
      //   mouth_right_corner: {
      //     x: 54.646098,
      //     y: 44.82122
      //   },
      //   mouth_upper_lip_bottom: {
      //     x: 50.474146,
      //     y: 45.133902
      //   },
      //   mouth_upper_lip_left_contour1: {
      //     x: 49.239268,
      //     y: 43.347805
      //   },
      //   mouth_upper_lip_left_contour2: {
      //     x: 47.324634,
      //     y: 44.196341
      //   },
      //   mouth_upper_lip_left_contour3: {
      //     x: 48.59122,
      //     y: 45.071463
      //   },
      //   mouth_upper_lip_right_contour1: {
      //     x: 51.623415,
      //     y: 43.276585
      //   },
      //   mouth_upper_lip_right_contour2: {
      //     x: 53.172683,
      //     y: 43.858049
      //   },
      //   mouth_upper_lip_right_contour3: {
      //     x: 52.648537,
      //     y: 44.839512
      //   },
      //   mouth_upper_lip_top: {
      //     x: 50.486829,
      //     y: 43.634878
      //   },
      //   nose_contour_left1: {
      //     x: 48.610244,
      //     y: 31.332683
      //   },
      //   nose_contour_left2: {
      //     x: 47.754146,
      //     y: 36.867317
      //   },
      //   nose_contour_left3: {
      //     x: 48.55561,
      //     y: 40.666098
      //   },
      //   nose_contour_lower_middle: {
      //     x: 50.332439,
      //     y: 40.921463
      //   },
      //   nose_contour_right1: {
      //     x: 51.781463,
      //     y: 31.481707
      //   },
      //   nose_contour_right2: {
      //     x: 52.961951,
      //     y: 36.989512
      //   },
      //   nose_contour_right3: {
      //     x: 52.010732,
      //     y: 40.470244
      //   },
      //   nose_left: {
      //     x: 46.931951,
      //     y: 39.471707
      //   },
      //   nose_right: {
      //     x: 53.499512,
      //     y: 39.457805
      //   },
      //   nose_tip: {
      //     x: 50.144634,
      //     y: 38.63
      //   },
      //   right_eye_bottom: {
      //     x: 57.076341,
      //     y: 32.073171
      //   },
      //   right_eye_center: {
      //     x: 56.862195,
      //     y: 30.826098
      //   },
      //   right_eye_left_corner: {
      //     x: 53.539268,
      //     y: 31.576098
      //   },
      //   right_eye_lower_left_quarter: {
      //     x: 55.183171,
      //     y: 31.87
      //   },
      //   right_eye_lower_right_quarter: {
      //     x: 58.567805,
      //     y: 31.557561
      //   },
      //   right_eye_pupil: {
      //     x: 56.519756,
      //     y: 30.601951
      //   },
      //   right_eye_right_corner: {
      //     x: 59.69122,
      //     y: 30.945122
      //   },
      //   right_eye_top: {
      //     x: 56.864634,
      //     y: 29.512927
      //   },
      //   right_eye_upper_left_quarter: {
      //     x: 55.061707,
      //     y: 29.996829
      //   },
      //   right_eye_upper_right_quarter: {
      //     x: 58.419756,
      //     y: 29.945366
      //   },
      //   right_eyebrow_left_corner: {
      //     x: 53.404146,
      //     y: 27.398049
      //   },
      //   right_eyebrow_lower_left_quarter: {
      //     x: 55.658293,
      //     y: 27.422439
      //   },
      //   right_eyebrow_lower_middle: {
      //     x: 57.982683,
      //     y: 27.271951
      //   },
      //   right_eyebrow_lower_right_quarter: {
      //     x: 60.402683,
      //     y: 27.228537
      //   },
      //   right_eyebrow_right_corner: {
      //     x: 62.01878,
      //     y: 27.734634
      //   },
      //   right_eyebrow_upper_left_quarter: {
      //     x: 55.66,
      //     y: 25.990732
      //   },
      //   right_eyebrow_upper_middle: {
      //     x: 57.970488,
      //     y: 25.775366
      //   },
      //   right_eyebrow_upper_right_quarter: {
      //     x: 60.472195,
      //     y: 26.064878
      //   }
      // }
      // sketch.setFace(face);
      sketch.drawFace();
    });
})();
