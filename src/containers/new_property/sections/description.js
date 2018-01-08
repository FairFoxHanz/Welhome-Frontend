import React from 'react';
import CheckBoxGroup from '../../../components/check_box_group';
import { Field } from 'redux-form';

export default function (props) {
    return (
        <div className="list-group-item h-100">
            <h4>Description: </h4>
            <Field className="h-75 w-75" name="description" label="Description" component="textArea" />
        </div>
    );
}