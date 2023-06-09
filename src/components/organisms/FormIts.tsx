import React, { useState } from 'react'
import {
    Box,
    HStack,
    VStack,
    Radio,
    Checkbox,
    Button
} from '@chakra-ui/react'
import FormInput from '../molecules/FormInput';
import FormRadio from '../molecules/FormRadio';
import FormSelect from '../molecules/FormSelect';
import FormCheckbox from '../molecules/FormCheckbox';
import FormGroup from '../molecules/FormGroup';
import InputField from '../atoms/InputField';

const FormIts = () => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const formHandle = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
  };

  const isError = input === '';

  return (
    <>
        <Box maxW={'container.md'}>
            <VStack spacing={'16px'} alignItems={'flex-start'}>
                <FormGroup direction='row' title='Gender'>
                    <Box width={'50%'}>
                        <InputField placeholder="Insert your first name" type="text" />
                    </Box>
                    <Box width={'50%'}>
                        <InputField placeholder="Insert your last name" type="text" />
                    </Box>
                </FormGroup>
                <FormInput title="Email address" placeholder="Insert your email" type="email" helper="We'll never share your email." />
                <FormInput title="Password" placeholder="Insert your password" type="password" isRequired />
                <FormInput title="Phone number" placeholder="Insert your phone number" type="text" isInvalid={isError} errorHelper="Phone number is required." />
                <FormRadio direction='row' title='Gender'>
                    <Radio value='Male'>Male</Radio>
                    <Radio value='Female'>Female</Radio>
                </FormRadio>
                <FormInput title="Address" placeholder="Insert your address" type="textarea" />
                <FormSelect title="Country" placeholder="Select country">
                    <option>Indonesia</option>
                    <option>United Arab Emirates</option>
                </FormSelect>
                <FormCheckbox direction='column' title='Hobby'>
                    <Checkbox>Soccer</Checkbox>
                    <Checkbox>Badminton</Checkbox>
                </FormCheckbox>
                <Box border={'1px'} borderColor={'gray.200'} py={'10px'} px={'15px'} borderRadius={'md'} width={'100%'}>
                    <Checkbox>Agree with Terms of Use and Privacy Policy</Checkbox>
                </Box>
                <HStack alignSelf={'flex-end'}>
                    <Button colorScheme='gray'>Cancel</Button>
                    <Button colorScheme='blue' isLoading={isLoading} loadingText='Submitting' onClick={formHandle}>Submit</Button>
                </HStack>
            </VStack>
        </Box>
    </>
  )
}

export default FormIts