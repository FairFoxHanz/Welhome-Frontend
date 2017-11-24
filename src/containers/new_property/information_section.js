import React from 'react';
import DropDownSelect from '../../components/drop_down_select';

export default function (props) {
    const { offerTypes, marketTypes, propertyTypes } = props.options;
    return (
        <div>
            <h4>Ogólne informacje</h4>
            <div>
                <DropDownSelect
                    name="offerType"
                    label="Oferta"
                    placeholder="Podaj rodzaj oferty..."
                    options={offerTypes}
                />
                <DropDownSelect
                    name="marketType"
                    label="Rynek"
                    placeholder="Podaj docelowy rynek..."
                    options={marketTypes}
                />
                <DropDownSelect
                    name="propertyType"
                    label="Typ posiadłości"
                    placeholder="Podaj typ posiadłości..."
                    options={propertyTypes}
                />
            </div>
        </div>
    );
}