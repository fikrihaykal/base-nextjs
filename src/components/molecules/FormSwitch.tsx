import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Switch } from '@chakra-ui/react'
import React from 'react'

interface FormSwitchInterface {
  title?: string;
  helper?: string;
  isRequired: boolean;
  isInvalid: boolean;
  errorHelper?: string;
  direction: 'flex' | 'flow';
  isDisabled: boolean;
}

const FormSwitch = (props: Partial<FormSwitchInterface>) => {
  const {
    title, 
    helper, 
    isRequired,
    isInvalid,
    errorHelper,
    direction,
    isDisabled,
    ...nativeProps
  } = props;

  return (
    <FormControl 
      display={direction} 
      isRequired={isRequired} 
      isInvalid={isInvalid} 
      isDisabled={isDisabled}
    >
      <FormLabel>
        {title}
      </FormLabel>
      <Switch {...nativeProps} />
      {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
      {isInvalid ? (
        <FormErrorMessage>{errorHelper}</FormErrorMessage>
      ) : ''}
    </FormControl>
  )
}

export default FormSwitch