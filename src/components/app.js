import React, { Component } from 'react';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { imgUrl: '' };
    this.abcd();
  }

  setUrl(imgUrl){
    this.setState({imgUrl});
  }
// http://localhost:8080/builder/helpers/offertType
// http://localhost:8080/builder/helpers/marketType
// http://localhost:8080/builder/helpers/propertyType
// http://localhost:8080/builder/helpers/featureType
  abcd(){
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default' };
    const img = fetch('http://localhost:8080/property', myInit);
    return img.then(resonse => {
      console.log(resonse);
      this.setUrl(resonse);
      return resonse.json();
    }).then(resonse => { console.log(resonse);
      this.setUrl(resonse);});
  }

  render() {
    //this.abcd();
    return (
      <div>
      {this.props.imgUrl}
      </div>
    );
  }
}
