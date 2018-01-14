import React from 'react';
import CheckBoxGroup from '../../../components/check_box_group';
import DropDownSelect from '../../../components/drop_down_select';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Dodatkowe informacje </h4>
            <div>
                <DropDownSelect
                    name="materialType"
                    label="Materiał"
                    options={props.options.materialTypes}
                    placeholder="Podaj rodzaj materiału..."
                />
                <DropDownSelect
                    name="heatingType"
                    label="Ogrzewanie"
                    options={props.options.heatingTypes}
                    placeholder="Podaj rodzaj ogrzewania..."
                />
                <CheckBoxGroup
                    name="securityTypes"
                    label="Ochrona"
                    options={props.options.securityTypes} />
            </div>
        </div>
    );
}