import React, { ReactNode } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  RadioGroup
} from '@chakra-ui/react'

interface FormRadioInterface {
  title?: string;
  helper?: string;
  isRequired: boolean;
  isInvalid: boolean;
  errorHelper?: string;
  direction: 'column' | 'row';
  isDisabled: boolean;
  children: ReactNode;
}

const FormRadio = (props: Partial<FormRadioInterface>) => {
  const {
    title, 
    helper, 
    isRequired,
    isInvalid,
    errorHelper,
    direction,
    isDisabled,
    children
  } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} isDisabled={isDisabled} as={'fieldset'}>
        <FormLabel as={'legend'}>{title}</FormLabel>
        <RadioGroup>
            <Stack direction={direction}>
              {children}
            </Stack>
        </RadioGroup>
        {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
        {isInvalid ? (
          <FormErrorMessage>{errorHelper}</FormErrorMessage>
        ) : ''}
    </FormControl>
  )
}

export default FormRadio