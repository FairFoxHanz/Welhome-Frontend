import React from 'react';
import CheckBoxGroup from '../../components/check_box_group';
import { Field } from 'redux-form';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Description: </h4>
            <div>
                <Field name="description" label="Description" component="textArea" />
            </div>
        </div>
    );
}