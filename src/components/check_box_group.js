import React from 'react';
import { Field } from 'redux-form';

export default (props) => {

    function renderCheckBoxes(field) {
        let { label, required, options, input, meta } = field;

        return options.map((option, index) => {
            return (
                <div className="checkbox-inline no_indent" key={index}>
                    <label>
                        <input
                            type="checkbox"
                            name={`${input.name}[${index}]`}
                            value={option}
                            checked={input.value.indexOf(option) !== -1}
                            onChange={(event) => {
                                const newValue = [...input.value];
                                if (event.target.checked) {
                                    newValue.push(option);
                                } else {
                                    newValue.splice(newValue.indexOf(option), 1);
                                }
                                return input.onChange(newValue);
                            }} />
                        {option}
                    </label>
                </div>)
        })
    }

    function renderCheckBoxesGroup(field) {
        return (
            <div className="form-vertical">
                {renderCheckBoxes(field)}
            </div>
        )
    }

    return (<Field
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        component={renderCheckBoxesGroup}
    />)

}