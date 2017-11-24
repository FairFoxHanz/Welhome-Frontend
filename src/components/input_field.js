import React from 'react';
import { Field } from 'redux-form';

export default (props) => {

    function renderField(field) {
        const { input, label, placeholder } = field;
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className} >
                <label>{label}</label>
                <input
                    onKeyUp={() => {
                        var $input = this,
                            value = $input.val(),
                            num = parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

                        $input.siblings('.add-on').text('$' + num);
                    }}
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

    return (
        <Field
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            component={renderField}
        />
    )

}