import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input, Text } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { URL } from 'url';

interface FormFileInterface {
    title?: string;
    helper?: string;
    isRequired: boolean;
    isInvalid: boolean;
    isDisabled: boolean;
    errorHelper?: string;
  }

const FormFile = (props: Partial<FormFileInterface>) => {
  const {title, isInvalid, helper, errorHelper, isRequired, isDisabled, ...nativeProps} = props;

  const inputRef = useRef(null);

  const handleClick = () => {
    // inputRef.current.click();
  }
  
  return (
    <></>
    // <FormControl isInvalid={isInvalid} isRequired={isRequired} isDisabled={isDisabled}>
    //     <FormLabel>{title}</FormLabel>
    //     <HStack border={'1px'} borderColor={isDisabled ? 'blackAlpha.900' : 'gray.200'} borderRadius={'md'} paddingStart={4} paddingY={3} alignItems={'center'}>
    //         <Button colorScheme={'gray'} height={'24px'} isDisabled={isDisabled} onClick={handleClick}>Choose File</Button>
    //         <Text fontStyle={isDisabled ? 'blackAlpha.900' : 'gray.200'}>
    //           {nativeProps.file ? nativeProps.file.name : 'No file chosen'}
    //         </Text>
    //     </HStack>
    //     <Input display={'none'} type='file' ref={inputRef} {...nativeProps} />
    //     {helper ? (<FormHelperText>{helper}</FormHelperText>) : ''}
    //     {isInvalid ? (
    //       <FormErrorMessage>{errorHelper}</FormErrorMessage>
    //     ) : ''}
    // </FormControl>
  )
}

export default FormFile