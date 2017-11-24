import React from 'react';
import CheckBoxGroup from '../../components/check_box_group';

export default function (props) {
    return (
        <div>
            <h4>Detale: </h4>
            <div>
                <CheckBoxGroup name="features" label="Featury" options={props.options.featureTypes} />
            </div>
        </div>
    );
}