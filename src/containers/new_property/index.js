import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchSelectionHelpers } from '../../actions/action_helpers';
import InformationSection from './information_section'
import DetailsSection from './details_section';
import FeaturesSection from './features_section';
import ExtraFeaturesSection from './extra_features_section';
import LocalisationSection from './localisation_section';
import DescriptionSection from './description_section';
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
                <div className="list-group list-group-flush">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <InformationSection options={this.props.helpers} />
                        <DetailsSection options={this.props.helpers} />
                        <FeaturesSection options={this.props.helpers} />
                        <ExtraFeaturesSection options={this.props.helpers} />
                        <LocalisationSection options={this.props.helpers} />
                        <DescriptionSection options={this.props.helpers} />
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