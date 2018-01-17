import React, { Component } from 'react';
import Slider from 'react-slick';

class SimpleSlider extends Component {
    render() {
        return (
            <div className="container h-75 w-75">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default SimpleSlider;
// offerType, 
// marketType, 
// propertyType,

// description    
// price, 
// rent, 

// buildingType,
// features,
// materialType, 
// heatingType, 
// securityTypes,

// province, 
// town, 
// district, 
// street, 
// streetNumber,