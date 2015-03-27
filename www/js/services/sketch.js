(function(){
  angular
    .module('FaceSketch')
    .factory('sketch', function (){
      var fpp = {};
      function init(){
        fpp.img_width = window.innerWidth;
        fpp.img_height = window.innerWidth;
        document.querySelector('canvas').width = fpp.img_width;
        document.querySelector('canvas').height = fpp.img_height;
        paper.install(window);
        paper.setup('canvas');
      };


      return {
        setFace: function(face){
          fpp = face;
        },
        drawFace: function(){
          // initialize paperjs
          init();
          console.log(fpp);

          var fppw = fpp.img_width;
          var fpph = fpp.img_height;

          // background
          var bg = paper.Shape.Circle(makePoint(fpp.nose_tip), 125);
          bg.fillColor = '#DF5E52';
          bg.fitBounds(paper.view.bounds);

          // groups
          var head = new paper.Group();

          // chin
          var leftChin = new paper.Path();
          var rightChin = new paper.Path();
          var chin = makePath(fpp.contour_chin);

          // left eye
          var leftEye = new paper.Path();
          var leftEyebrow = new paper.Path();

          // right eye
          var rightEye = new paper.Path();
          var rightEyebrow = new paper.Path();

          // nose
          var noseLeft = makePath(fpp.nose_contour_right3);
          var noseTip = makePath(fpp.nose_tip);
          var noseRight = makePath(fpp.nose_contour_left3);
          var noseBottom = makePath(fpp.nose_contour_lower_middle);

          // mouth
          var mouth = new paper.Path();
          var mouthShadow = new paper.Path();

          _.forEach(fpp, function (value, key){
            if(key.match(/^contour_left/gi)){
              addToPath(leftChin, value);
            }
            if(key.match(/^contour_right/gi)){
              addToPath(rightChin, value);
            }

            if(key.match(/^left_eyebrow_lower/gi)){
              addToPath(leftEyebrow, value);
            }

            if(key.match(/^right_eyebrow_lower/gi)){
              addToPath(rightEyebrow, value);
            }
          });

          /****
            Join and tweak pathes
          ****/

          // Face contour
          var headTop = new paper.Point(
              chin.lastSegment.point.x,
              leftChin.firstSegment.point.y - (leftChin.firstSegment.point.y * .5)
            );
          var headTopSeg = new paper.Segment(headTop, null, null);
          var headTopPath = new paper.Path([
              leftChin.firstSegment,
              headTopSeg,
              rightChin.firstSegment,
              chin.firstSegment
            ]);
          headTopPath.closed = true;
          headTopPath.smooth();
          headTopPath.fillColor = '#F0D8A8';
          head.addChild(headTopPath);

          leftChin.join(chin);
          rightChin.join(chin);
          rightChin.join(leftChin);
          rightChin.fillColor = '#F0D8A8';

          head.addChild(rightChin);

          // left eye
          addToPath(leftEye, fpp.left_eye_bottom);
          addToPath(leftEye, fpp.left_eye_lower_left_quarter);
          addToPath(leftEye, fpp.left_eye_left_corner);
          addToPath(leftEye, fpp.left_eye_upper_left_quarter);
          addToPath(leftEye, fpp.left_eye_top);
          addToPath(leftEye, fpp.left_eye_upper_right_quarter);
          addToPath(leftEye, fpp.left_eye_right_corner);
          addToPath(leftEye, fpp.left_eye_lower_right_quarter);
          leftEye.fillColor = '#FFF';
          head.addChild(leftEye);

          var leftPupil = paper.Shape.Circle(makePoint(fpp.left_eye_pupil), 5);
          leftPupil.fillColor = '#222222';
          head.addChild(leftPupil);

          leftEyebrow.strokeColor = '#222222';
          leftEyebrow.strokeWidth = 2;
          leftEyebrow.strokeCap = 'round';
          leftEyebrow.simplify();
          head.addChild(leftEyebrow);

          // right eye
          addToPath(rightEye, fpp.right_eye_bottom);
          addToPath(rightEye, fpp.right_eye_lower_left_quarter);
          addToPath(rightEye, fpp.right_eye_left_corner);
          addToPath(rightEye, fpp.right_eye_upper_left_quarter);
          addToPath(rightEye, fpp.right_eye_top);
          addToPath(rightEye, fpp.right_eye_upper_right_quarter);
          addToPath(rightEye, fpp.right_eye_right_corner);
          addToPath(rightEye, fpp.right_eye_lower_right_quarter);
          rightEye.fillColor = '#FFF';
          head.addChild(rightEye);

          var rightPupil = paper.Shape.Circle(makePoint(fpp.right_eye_pupil), 5);
          rightPupil.fillColor = '#222222';
          head.addChild(rightPupil);

          rightEyebrow.strokeColor = '#222222';
          rightEyebrow.strokeWidth = 2;
          rightEyebrow.strokeCap = 'round';
          rightEyebrow.simplify();
          head.addChild(rightEyebrow);

          // Nose
          noseLeft.join(noseBottom);
          noseLeft.reverse();
          noseLeft.join(noseTip);
          noseRight.join(noseBottom);
          noseRight.reverse();
          noseRight.join(noseTip);
          noseRight.join(noseLeft);

          noseLeft.fillColor = '#DAB28A';
          noseRight.fillColor = '#DAB28A';

          head.addChild(noseLeft);
          head.addChild(noseRight);

          // Mouth
          addToPath(mouth, fpp.mouth_right_corner);
          addToPath(mouth, fpp.mouth_upper_lip_bottom);
          addToPath(mouth, fpp.mouth_left_corner);
          addToPath(mouth, fpp.mouth_lower_lip_top);
          mouth.closed = true;
          mouth.strokeColor = '#DAB28A';
          mouth.fillColor = '#DAB28A';
          head.addChild(mouth);

          addToPath(mouthShadow, fpp.mouth_lower_lip_left_contour3);
          addToPath(mouthShadow, fpp.mouth_lower_lip_right_contour3);
          addToPath(mouthShadow, fpp.mouth_lower_lip_bottom);
          mouthShadow.fillColor = '#DAB28A';
          head.addChild(mouthShadow);

          // head.fitBounds(paper.view.bounds);
          /***
            Helpers
          ***/
          function addToPath(path, pos){
            var x = fppw * (pos.x / 125);
            var y = fpph * (pos.y / 125);
            var point = new paper.Point(x, y);
            path.add(point);
          }

          function makePoint(pos){
            var x = fppw * (pos.x / 125);
            var y = fpph * (pos.y / 125);
            var point = new paper.Point(x, y);
            return point;
          }

          function makePath(pos){
            var x = fppw * (pos.x / 125);
            var y = fpph * (pos.y / 125);
            var point = new paper.Point(x, y);
            var path = new paper.Path();
            path.add(point);
            return path;
          }

          /****
            Draw
          ****/
          paper.view.draw();
        }
      }
    })
})();
