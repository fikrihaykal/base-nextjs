import React, { ReactNode } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack,
    Input
} from '@chakra-ui/react'

interface FormGroupInterface {
    title?: string;
    helper?: string;
    isRequired: boolean;
    isInvalid: boolean;
    errorHelper?: string;
    direction: 'column' | 'row';
    children: ReactNode;
  }

const FormGroup = (props: Partial<FormGroupInterface>) => {
  const {
    title, 
    helper, 
    isRequired,
    isInvalid,
    errorHelper,
    direction,
    children
  } = props;

  return (
    <FormControl>
        <FormLabel>{title}</FormLabel>
        <Stack width={'100%'} direction={direction}>
            {children}
        </Stack>
        {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
        {isInvalid ? (
          <FormErrorMessage>{errorHelper}</FormErrorMessage>
        ) : ''}
    </FormControl>
  )
}

export default FormGroup