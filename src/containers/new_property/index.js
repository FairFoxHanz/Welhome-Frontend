import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchSelectionHelpers } from '../../actions/action_helpers';
import InformationSection from './information_section'
import CheckBoxGroup from '../../components/check_box_group';
import DetailsSection from './details_section';
import FeatureSection from './features_section';

class PropertyNew extends Component {

    constructor(props) {
        super(props);
        this.props.fetchSelectionHelpers();
    }

    onSubmit(values) {
        const newProperty = {
            information: {
                offerType: values.offerType,
                marketType: values.marketType,
                propertyType: values.propertyType,
            }
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <DetailsSection />
                <InformationSection options={this.props.helpers} />
                <FeatureSection options={this.props.helpers} />
                <br />
                <button type="submit" className="btn btn-primary">Dodaj</button>
                <Link className="btn btn-danger" to="/">Anuluj</Link>
            </form>
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