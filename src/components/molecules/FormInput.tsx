import React, {useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Textarea,
    Icon
} from '@chakra-ui/react'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import InputField from '../atoms/InputField';

interface FormInputInterface {
    title?: string;
    placeholder: string;
    type: string;
    helper?: string;
    isRequired: boolean;
    isInvalid: boolean;
    isDisabled: boolean;
    errorHelper?: string;
}

const FormInput = (props: Partial<FormInputInterface>) => {
  const {
    title, 
    placeholder, 
    type, 
    helper, 
    isRequired,
    isInvalid,
    errorHelper,
    isDisabled,
    ...nativeProps
  } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} isDisabled={isDisabled}>
        <FormLabel>{title}</FormLabel>
        {type === "password" ? (
          <InputGroup>
            <InputField placeholder={placeholder} type={show ? 'text' : 'password'} {...nativeProps} />
            <InputRightElement width={'4.5rem'}>
              <Button h='1.75rem' size='sm' onClick={handleShow}>
                {show ? <Icon h={10} as={IoEyeOff} /> : <Icon h={10} as={IoEye} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        ) : type === "textarea" ? (
          <Textarea placeholder='Insert your address' {...nativeProps} />
        ) : (<InputField placeholder={placeholder} type={type} {...nativeProps} />)}
        {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
        {isInvalid ? (
          <FormErrorMessage>{errorHelper}</FormErrorMessage>
        ) : ''}
    </FormControl>
  )
}

export default FormInput