import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchSelectionHelpers } from '../../actions/action_helpers';
import InformationSection from './sections/information'
import DetailsSection from './sections/details';
import FeaturesSection from './sections/features';
import ExtraFeaturesSection from './sections/extra_features';
import LocationSection from './sections/location';
import DescriptionSection from './sections/description';
import parseProperty from '../../helpers/property_parser'

class PropertyNew extends Component {

    constructor(props) {
        super(props);
        this.props.fetchSelectionHelpers();
    }

    onSubmit(values) {
        const newProperty = parseProperty(values);
        console.log(newProperty);
        createProperty(newProperty);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="card">
                <div className="list-group list-group-flush container">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="row">
                            <div className="col-sm">
                                <InformationSection options={this.props.helpers} />
                            </div>
                            <div className="col-sm">
                                <DetailsSection options={this.props.helpers} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <FeaturesSection options={this.props.helpers} />
                            </div>
                            <div className="col-sm">
                                <ExtraFeaturesSection options={this.props.helpers} />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm">
                                <LocationSection options={this.props.helpers} />
                            </div>
                            <div className="col-sm">
                                <DescriptionSection options={this.props.helpers} />
                            </div>
                        </div>
                        <div className="list-group-item container">
                            <div className="row">
                                <button type="submit" className="btn btn-success col">Dodaj</button>
                                <Link className="btn btn-secondary col" to="/">Anuluj</Link>
                            </div>
                        </div>
                    </form>
                </div>
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
    return { helpers: state.helpers }
}

export default reduxForm({
    validate,
    form: 'CreateNewProperty'
})(
    connect(mapStateToProps, {
        createProperty,
        fetchSelectionHelpers
    })(PropertyNew)
    );