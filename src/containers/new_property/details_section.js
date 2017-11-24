import React from 'react';
import InputField from '../../components/input_field';

export default function () {
    return (
        <div>
            <h4>Detale: </h4>
            <div>
                <InputField 
                    name="price"
                    label="Cena:"
                    placeholder="Podaj cenę..."
                    type="number" 
                    value="1000" 
                    min="0" 
                    step="0.01"
                />
                <InputField 
                    name="rent"
                    label="Czynsz:"
                    placeholder="Podaj wysokość Czynszu..."
                />
                <InputField 
                    name="buildingType"
                    label="Typ budynku:"
                    placeholder="Podaj typ budynku..."
                />
            </div>
        </div>
    );
}