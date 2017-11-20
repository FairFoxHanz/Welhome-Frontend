import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../actions';
import {
    fetchOfferTypes,
    fetchMarketTypes,
    fetchFeatureTypes,
    fetchPropertyTypes
} from '../actions/action_helpers';

class PropertyNew extends Component {

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

    //   onSubmit(values){
    //     this.props.createPost(values, () => {
    //       this.props.history.push('/');
    //     });
    //   }
    abc() {
        //console.log(this.props);
        this.props.fetchFeatureTypes();

        this.props.fetchMarketTypes();

        this.props.fetchOfferTypes();

        this.props.fetchPropertyTypes();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onClick={this.abc.bind(this)}>
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

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {
        createProperty,
        fetchFeatureTypes,
        fetchMarketTypes,
        fetchOfferTypes,
        fetchPropertyTypes
    })(PropertyNew)
    );