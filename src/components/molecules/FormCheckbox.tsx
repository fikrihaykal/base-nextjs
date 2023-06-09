import React, { ReactNode } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  CheckboxGroup
} from '@chakra-ui/react'

interface FormCheckboxInterface {
  title?: string;
  helper?: string;
  isRequired: boolean;
  isInvalid: boolean;
  errorHelper?: string;
  direction: 'column' | 'row';
  children: ReactNode;
}

const FormCheckbox = (props: Partial<FormCheckboxInterface>) => {
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
    <FormControl isRequired={isRequired} isInvalid={isInvalid} as={'fieldset'}>
        <FormLabel as={'legend'}>{title}</FormLabel>
        <CheckboxGroup>
            <Stack direction={direction}>
              {children}
            </Stack>
        </CheckboxGroup>
        {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
        {isInvalid ? (
          <FormErrorMessage>{errorHelper}</FormErrorMessage>
        ) : ''}
    </FormControl>
  )
}

export default FormCheckbox