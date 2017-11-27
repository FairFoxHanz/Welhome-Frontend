import React from 'react';
import InputField from '../../components/input_field';

export default function (props) {
    return (
        <div className="list-group-item">
            <h4>Lokalizacja: </h4>
            <div>
                <InputField
                    name="province"
                    label="Województwo:"
                    placeholder="Podaj województwo..."
                />
                <InputField
                    name="town"
                    label="Miasto:"
                    placeholder="Podaj miasto..."
                />
                <InputField
                    name="district"
                    label="Dzielnica:"
                    placeholder="Podaj dzielnicę..."
                />
                <InputField
                    name="street"
                    label="Ulica:"
                    placeholder="Podaj ulicę..."
                />
                <InputField
                    name="streetNumber"
                    label="Numer Mieszkania:"
                    placeholder="Podaj numer mieszkania..."
                />
            </div>
        </div>
    );
}