import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../actions';
import DropDownSelect from './drop_down_select'
import { fetchSelectionHelpers } from '../actions/action_helpers';

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
                <DropDownSelect
                    name="offerType"
                    label="Oferta"
                    placeholder="Podaj rodzaj oferty..."
                    options={this.props.helpers.offerTypes}

                />
                <DropDownSelect
                    name="marketType"
                    label="Rynek"
                    placeholder="Podaj docelowy rynek..."
                    options={this.props.helpers.marketTypes}

                />
                <DropDownSelect
                    name="propertyType"
                    label="Typ posiadłości"
                    placeholder="Podaj typ posiadłości..."
                    options={this.props.helpers.propertyTypes}

                />
                <br />
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