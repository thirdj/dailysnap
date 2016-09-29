$(function() {

  window.navigator = window.navigator || {};
  navigator.getUserMedia = navigator.getUserMedia       ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia    ||
                           null;

  var video = document.querySelector('video');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;
  var width = 350;
  var height = 260;
  var classes = [
    '_1997', 'moon', 'aden', 'nashville', 'brooklyn', 'clarendon', 'earlybird',
    'hudson', 'inkwell', 'lark', 'lofi', 'mayfair', 'perpetua', 'reyes',
    'rise', 'slumber', 'toaster', 'walden', 'willow', 'xpro2', 'gingham'
  ];

  function success(stream) {
    // 비디오 테그에 stream 전달.
    $('video')[0].src = window.URL.createObjectURL(stream);
    // do something...
  }
  function error(err) {
    console.log('error', arguments);
  }
  function snapshot() {
    if (localMediaStream) {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(video, 0, 0, width, height);

      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      insertImg(canvas.toDataURL('image/png'));

      // document.querySelector('img').src = canvas.toDataURL('image/png');
    }
  }
  function insertImg(imgData) {
    var result = Math.floor(Math.random() * classes.length);
    $('#images').prepend("<img src=" + imgData + " class="+ classes[result] +" />");
  }

  $('#start').click(function() {
    // getUserMedia(접근할 미디어, 성공 callback, 실패 callback);
    // navigator.webkitGetUserMedia({audio:true, video:true}, success, error );
    // Not showing vendor prefixes or code that works cross-browser.
    navigator.getUserMedia({video: true}, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    }, error);
  });

  // navigator.getUserMedia({video: true}, function(stream) {
  //   video.src = window.URL.createObjectURL(stream);
  //   localMediaStream = stream;
  // }, error);
  // setInterval(snapshot, 1000);
  $('#capture').click(function(evt) {
    snapshot();
  });

});
