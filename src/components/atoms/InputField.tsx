import React from 'react'
import {
    Input,
} from '@chakra-ui/react'

interface FormInputInterface {
    placeholder?: string;
    type: string;
}

const InputField = (props: Partial<FormInputInterface>) => {
  const {placeholder, type} = props;
  return (
    <Input placeholder={placeholder} type={type} />
  )
}

export default InputField