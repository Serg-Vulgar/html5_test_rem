angular.module('starter')
  .factory('resize', function () {
    var body = document.body;
    var html = document.documentElement;

    function setBodyFontSize() {
      console.log(body.clientWidth)
      console.log(body.style.fontSize)
      if (body.clientWidth <= 400) {
        body.style.fontSize = '1rem';
        html.style.fontSize = '1rem';
      } else if (body.clientWidth <= 490) {
        body.style.fontSize = '1.2rem';
        html.style.fontSize = '1.2rem';
      } else if (body.clientWidth <= 600) {
        body.style.fontSize = '1.5rem';
        html.style.fontSize = '1.5rem';
      }
      else if (body.clientWidth <= 700) {
        body.style.fontSize = '1.8rem';
        html.style.fontSize = '1.8rem';
      }
      else if (body.clientWidth <= 740) {
        body.style.fontSize = '2rem';
        html.style.fontSize = '2rem';
      } else if (body.clientWidth >= 740) {
        body.style.fontSize = '2.2rem';
        html.style.fontSize = '2.2rem';
      }
      // body.style.fontSize =
    }

    setBodyFontSize()
    window.onresize = setBodyFontSize;

    return {
      setBodyFontSize: setBodyFontSize
    }
  });
