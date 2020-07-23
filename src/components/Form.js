import React from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';

const Button = styled.input`
  background-color: #66a2fe;
  border: none;
  border-radius: 10px;  
  color: #fff;  
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;  
  padding: 10px;
  transition: background-color 0.3s ease;    
  width: 100%;    

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {

  const [currency, SelectCurrency, setCurrency] = useCurrency();

  return (
    <form>

      <SelectCurrency></SelectCurrency>

      <Button 
        type="submit" 
        value="Calcular"           
      />
    </form>
  );
};
 
export default Form;