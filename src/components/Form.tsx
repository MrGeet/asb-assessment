import React, { useState } from 'react';
import { InputField } from './InputField';
import { FormContainer, FormRow, FormWrapper } from '../styledComponents/FormStyles';
import { Button } from '../globalStyles';
import moment from 'moment';

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

  /**
   * Handle CVC input
   * Only allow 3 digits
   */
  const handleChangeCVC = (value: string) => {
    const newInput = value.replace(/\D/g, '');
    if (newInput.length > 3) return;

    setInputFields((prevState) => ({ ...prevState, cvc: newInput }));
  };

  /**
   * Handle Date input
   * Only allow 4 digits
   * Add '/' in the middle
   */
  const handleChangeExpDate = (value: string) => {
    const newInput = value.replace(/\D/g, '');
    if (newInput.length > 4) return;
    if (newInput.length < 3) {
      setInputFields((prevState) => ({ ...prevState, expDate: newInput }));
      return;
    }
    const result = newInput.substring(0, 2) + '/' + newInput.substring(2);

    setInputFields((prevState) => ({ ...prevState, expDate: result }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { creditCard, cvc, expDate } = { ...inputFields };

    //validate cvc
    const cvcError = cvc.length < 3 || cvc.length > 3 ? 'Invalid CVC' : '';

    //validate date
    const date = moment(expDate, 'MM/YY');
    const expDateError = !date.isValid() ? 'Invalid Expiry Date' : '';

    //validate credit card number
    const creditCardError = creditCard.replace(/\s+/g, '').length !== 16 ? 'Invalid Credit Card Number' : '';

    setErrors({ creditCardError, expDateError, cvcError });

    if (creditCardError || cvcError || expDateError) return;

    console.log(inputFields);
    alert('Form was submitted');
    setInputFields({
      creditCard: '',
      cvc: '',
      expDate: '',
    });
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
          <InputField onChange={handleChangeCVC} value={inputFields.cvc} id="cvc" label="CVC" placeholder="CVC" error={errors.cvcError} />
          <InputField
            onChange={handleChangeExpDate}
            value={inputFields.expDate}
            id="date"
            label="Expiry Date"
            placeholder="MM/YY"
            error={errors.expDateError}
          />
        </FormRow>
        <Button> Submit</Button>
      </FormWrapper>
    </FormContainer>
  );
};
