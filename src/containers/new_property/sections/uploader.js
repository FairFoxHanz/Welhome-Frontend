import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';

export default class MyUploader extends Component {
    render() {
        return (
            <div className="list-group-item">
                <ImagesUploader
                    url=""
                    optimisticPreviews={true}
                    onLoadStart={() => {
                        console.log("Antything");
                    }}
                    onLoadEnd={(err, res) => {
                        console.log(res);
                    }}
                    label="Zdjęcia nieruchomości:"
                />
            </div>
        );
    }
}