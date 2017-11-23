import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../actions';
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

    renderSelect(field) {
        const { input, label, options } = field;

        return (
            <div className="form-group">
                <label>{label}</label>
                <select
                    className="form-control"
                    type="text"
                    {...input}
                >
                    <option hidden value="" defaultValue>Wybierz typ posiadłości...</option>
                    {options.map(option => (<option key={option} value={option}>{option}</option>))}
                </select>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
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
                <Field
                    name="propertyType"
                    label="Typ posiadłości:"
                    component={this.renderSelect}
                    options={this.props.helpers.propertyTypes}
                />
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
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
    form: 'PostsNewForm'
})(
    connect(mapStateToProps, {
        createProperty,
        fetchSelectionHelpers
    })(PropertyNew)
    );