import React, { ReactNode } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Stack,
    Input,
    FormErrorMessage,
    HStack
} from '@chakra-ui/react'

interface FormGroupInterface {
    title?: string;
    helper?: string;
    isRequired: boolean;
    isInvalid: boolean;
    isDisabled: boolean;
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
    isDisabled,
    children,
    ...nativeProps
  } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} isDisabled={isDisabled}>
        <FormLabel>{title}</FormLabel>
        <Stack width={'100%'} direction={direction} {...nativeProps}>
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