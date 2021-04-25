  Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://username:password@link',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})
