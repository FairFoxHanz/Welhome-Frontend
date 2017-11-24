import React from 'react';
import CheckBoxGroup from '../../components/check_box_group';
import DropDownSelect from '../../components/drop_down_select';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Extra Features: </h4>
            <div>
                <DropDownSelect name="materialType" label="Materiał" options={props.options.materialTypes}/>
                <DropDownSelect name="heatingType" label="Ogrzewanie" options={props.options.heatingTypes}/>
                <CheckBoxGroup name="securityTypes" label="Ochrona" options={props.options.securityTypes} />
            </div>
        </div>
    );
}