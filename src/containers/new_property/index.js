import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../../actions';
import { fetchSelectionHelpers } from '../../actions/action_helpers';
import InformationSection from './information_section'
import CheckBoxGroup from '../../components/check_box_group';

class PropertyNew extends Component {

    constructor(props) {
        super(props);
        this.props.fetchSelectionHelpers();
    }

    renderField(field) {
        const { input, label, placeholder } = field;
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className} >
                <label>{label}</label>
                <input
                    placeholder={placeholder}
                    className="form-control"
                    type="text"
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }


    onSubmit(values) {
        const newProperty = {
            information: {
                offerType: values.offerType,
                marketType: values.marketType,
                propertyType: values.propertyType,                
            }
        }
        console.log(newProperty);
        console.log(values.cokoliek);
    }

    abc() {
        console.log(this.props.helpers);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Title:"
                    placeholder="Title for your post..."
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories:"
                    placeholder="Categories for your post..."
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Content:"
                    placeholder="Content of your post..."
                    component={this.renderField}
                />
                <InformationSection options={this.props.helpers}/>
                <br />
                <CheckBoxGroup name="cokoliek" label="awe" options={this.props.helpers.securityTypes}/>
                <button type="submit" className="btn btn-primary">Dodaj</button>
                <Link className="btn btn-danger" to="/">
                    Anuluj
          </Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }
    console.log(values.propertyTypes);

    return errors;
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