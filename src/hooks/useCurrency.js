import React, { Fragment, useState } from 'react';

const useCurrency = () => {
    
    // status of our custom hook
    const [state, setState] = useState('');

    const Select = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    // return state, interface and function that modifies the state
    return [state, Select, setState];
}
 
export default useCurrency ;
