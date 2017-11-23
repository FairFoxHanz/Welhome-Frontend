import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProperty } from '../actions';
import { fetchSelectionHelpers } from '../actions/action_helpers';

const DropDownSelect = (props) => {

    function renderSelect(field) {
        const { input, placeholder, label, options } = field;

        return (
            <div className="form-group">
                <label>{label}</label>
                <select
                    className="form-control"
                    type="text"
                    {...input}
                >
                    <option hidden value="" defaultValue>{placeholder}</option>
                    {options.map(option => (<option key={option} value={option}>{option}</option>))}
                </select>
            </div>
        );
    }

    return (<Field
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        component={renderSelect}
    />)

}

export default reduxForm({
    form: 'CreateNewProperty'
})(DropDownSelect);