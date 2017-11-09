import React, { Component } from 'react';
//import uuid from 'uuid';
import $ from 'jquery';

class AnalyzeImage extends Component {
  static analyzed = false;

  constructor() {
    super();
    this.state = {}
  }

  analyzeImage(url) {
    var subscriptionKey = "bfc885ecf40149f985146c569a3b397b";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
    var params = {
      "visualFeatures": "tags"
    };
    var sourceImageUrl = url;
    $.ajax({
        url: uriBase + "?" + $.param(params),

        beforeSend: function(xhrObj) {
          xhrObj.setRequestHeader("Content-Type", "application/json");
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },
        type: "POST",
        data: '{"url": "' + sourceImageUrl + '"}',
      })
      .done(function(data) {
        this.sleep(3000);
        var tagNames = [];
        for (var i = 0; i < data.tags.length; i++) {
          var tempTag = data.tags[i].name;
          if (tempTag === "meat") {
            tempTag = prompt("Looks like you have a type of meat on your plate! What kind of meat is it?: ", "(e.g. pork, beef, chicken, salmon)");
          }
          if (tempTag === "vegetable") {
            tempTag = prompt("Looks like you have a type of vegetable on your plate! What kind of vegetable is it?: ", "(e.g. spinach, carrot, broccoli, asparagus)");
          }
          tagNames.push(tempTag);
        }
        this.setState({ info: tagNames });
        this.props.saveInfo(tagNames);
      }.bind(this))
  };

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  render() {
    if (!AnalyzeImage.analyzed) {
      this.analyzeImage(this.props.url);
      AnalyzeImage.analyzed = true;
    }
    return (
      <div>
        <div class="loader"></div>
      </div>
    );
  }
}

export default AnalyzeImage;
