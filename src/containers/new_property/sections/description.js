import React from 'react';
import CheckBoxGroup from '../../../components/check_box_group';
import { Field } from 'redux-form';

export default function (props) {
    return (
        <div className=" h-75">
            <h4>Opis </h4>
            <Field className="h-100 w-75" name="description" label="Opis" component="textArea" />
        </div>
    );
}