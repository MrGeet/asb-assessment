import React, { useState } from 'react';
import { InputField } from './InputField';
import { FormContainer, FormRow, FormWrapper } from '../styledComponents/FormStyles';

export const Form = () => {
  const [inputFields, setInputFields] = useState({
    creditCard: '',
    cvc: '',
    expDate: '',
  });
  const [errors, setErrors] = useState({
    creditCardError: '',
    cvcError: '',
    expDateError: '',
  });

  /**
   * Handle Credit Card input
   * Only allow 16 digits
   * Add space before every n%4===0 element
   */
  const handleChangeCreditCard = (value: string) => {
    const newInput = value.replace(/\D/g, '');
    if (newInput.length > 16) return;
    const result = newInput.split('').reduce((acc, cur, ind) => (ind !== 0 && ind % 4 === 0 ? `${acc} ${cur}` : `${acc}${cur}`), '');

    setInputFields((prevState) => ({ ...prevState, creditCard: result }));
  };

  const tempChange = () => {};

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    alert('Form was submitted');
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <InputField
          onChange={handleChangeCreditCard}
          value={inputFields.creditCard}
          id="creditCard"
          label="Credit Card Number"
          placeholder="Enter Card Number"
          error={errors.creditCardError}
        />
        <FormRow justify="center" gap="0 1rem">
          <InputField onChange={tempChange} value={inputFields.cvc} id="cvc" label="CVC" placeholder="CVC" error={errors.cvcError} />
          <InputField
            onChange={tempChange}
            value={inputFields.expDate}
            id="date"
            label="Expiry Date"
            placeholder="MM/YY"
            error={errors.expDateError}
          />
        </FormRow>
        button
      </FormWrapper>
    </FormContainer>
  );
};
