import React from 'react';
import InputField from '../../../components/input_field';
import DropDownSelect from '../../../components/drop_down_select';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Detale: </h4>
            <div className="panel-body">
                <InputField
                    name="price"
                    label="Cena:"
                    placeholder="Podaj cenę..."
                />
                <InputField
                    name="rent"
                    label="Czynsz:"
                    placeholder="Podaj wysokość Czynszu..."
                />
                <DropDownSelect
                    name="buildingType"
                    label="Typ budynku:"
                    placeholder="Podaj typ budynku..."
                    options={props.options.buildingTypes}
                />
            </div>
        </div>
    );
}