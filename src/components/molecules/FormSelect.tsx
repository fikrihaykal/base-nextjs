import React, { ReactNode } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'

interface FormSelectInterface {
    title: string;
    placeholder: string;
    helper?: string;
    isRequired: boolean;
    isInvalid: boolean;
    isDisabled: boolean;
    errorHelper?: string;
    direction: 'column' | 'row';
    children: ReactNode;
  }

const FormSelect = (props: Partial<FormSelectInterface>) => {
    const {
        title, 
        placeholder,
        helper, 
        isRequired,
        isInvalid,
        isDisabled,
        errorHelper,
        direction,
        children
    } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} isDisabled={isDisabled}>
        <FormLabel>{title}</FormLabel>
        <Select placeholder={placeholder}>
            {children}
        </Select>
        {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
        {isInvalid ? (
          <FormErrorMessage>{errorHelper}</FormErrorMessage>
        ) : ''}
    </FormControl>
  )
}

export default FormSelect