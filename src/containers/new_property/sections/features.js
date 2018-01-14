import React from 'react';
import CheckBoxGroup from '../../../components/check_box_group';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Dodatki </h4>
            <div>
                <CheckBoxGroup name="features" label="" options={props.options.featureTypes} />
            </div>
        </div>
    );
}