import React, { Component } from 'react';
//import uuid from 'uuid';
//import $ from 'jquery';
import cameraImage from '../images/camera.png';
import learnmoreImage from '../images/learnmore.png';

class MainScreen extends Component {
  static cloudName = 'averagefail';
  static unsignedUploadPreset = 'f76qwht8';

  constructor() {
    super();
    this.state = {
      info:[]
    }
  }

  uploadFile(file) {
    var url = 'https://api.cloudinary.com/v1_1/' + MainScreen.cloudName + '/upload';
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;
        // Create a thumbnail of the uploaded image, with 150px width
        var tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        
        // Analyze uploaded image using a callback to App.js
        this.props.analyzeImage(url);
      }
    }.bind(this);

    fd.append('upload_preset', MainScreen.unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
  }

  processImage(input) {
    if (input.files && input.files[0]) {
      
      this.uploadFile(input.files[0]);
      
      /*var reader = new FileReader();

      reader.onload = function(e) {
        $('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };

      reader.readAsDataURL(input.files[0]);*/
    }
  }

  imageChosen = event => {
    this.processImage(event.target);
  }

  render() {
    //<button type="button" onClick={this.selectFile.bind(this)}>Upload a photo of your meal</button>
    return (
      <div>
        <label for="hidethisbutton" class="styled_button"> 
          <img src={cameraImage} height="100%" width="100%" alt="Snapshot your meal"></img>
          <input type="file" accept="image" capture="camera" onChange={this.imageChosen} id="hidethisbutton" />
        </label>
        <div>
          <a href="https://www.nrdc.org/sites/default/files/eatgreenfs_feb2010.pdf" class="learnmore"><img src={learnmoreImage} width="100%" height="100%" alt="Learn more" /></a>
        </div>
      </div>
    );
    //<img id="blah" src="#" alt="your image" />
  }
}

export default MainScreen;
