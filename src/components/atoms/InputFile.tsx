import React from 'react'
import {
    Input,
} from '@chakra-ui/react'

interface InputFileInterface {
    placeholder?: string;
    type: string;
}

const InputFile = (props: Partial<InputFileInterface>) => {
  const {placeholder, type, ...nativeProps} = props;
  return (
    <Input placeholder={placeholder} type={type} {...nativeProps} />
  )
}

export default InputFile