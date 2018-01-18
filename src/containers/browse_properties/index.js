import _ from 'lodash';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty, fetchAllProperties } from '../../actions';
import parseProperty from '../../helpers/property_parser'

class PropertyNew extends Component {

    constructor(props) {
        super(props);
        this.props.fetchAllProperties();
    }

    renderPropertiesList() {
        if (_.isEmpty(this.props.properties)) return ('loading...');
        let counter = 0;
        return this.props.properties.map(property => {
            const url = property._links.self.href;
            const linkTo = `prop/${url.substring(url.indexOf('property/') + 9)}`;
            console.log(property);
            return (
                <Link key={counter++} className="card btn-light" to={linkTo}>
                    <div>
                        Województwo: {property.location.province} <br/>
                        Miasto:{property.location.town} <br/>
                        href: {property._links.self.href}<br/>
                        Opis: {property.description.description}
                    </div>
                </Link>
            )
        }
        )
    }

    // province": "Dolny Śląsk",
    // "town": "Wrocław",
    // "district": "Psie Pole",
    // "street": "Czekoladowa",
    // "streetNumber": "15",
    // "

    render() {
        console.log(this.props.properties);
        return (
            <div>
                {this.renderPropertiesList()}
            </div>
        );
    }
}

function validate(values) {
    // const errors = {};

    // if (!values.cena) {
    //     errors.title = "Enter a title!";
    // }
    // if (!values.categories) {
    //     errors.categories = "Enter some categories!";
    // }
    // if (!values.content) {
    //     errors.content = "Enter some content!";
    // }
    // console.log(values.propertyTypes);

    // return errors;
}

function mapStateToProps(state) {
    return {
        properties: state.properties 
    }
}

export default connect(mapStateToProps, { fetchAllProperties })(PropertyNew);