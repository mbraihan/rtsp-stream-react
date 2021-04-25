import React from 'react';
import './App.css';
import JSMpeg from 'jsmpeg-player';

class App extends React.Component {
  componentDidMount () {
          var videoUrl = 'ws://localhost:9999/';
          var player = new JSMpeg.VideoElement('#video-canvas', videoUrl, {autoplay:true});
          console.log(player);
  }

    render(){
      
        return (
          <div id="video-canvas" style={{height:'1080px', width:'1920px'}}>

          </div>
      );
    }

}

export default App;
