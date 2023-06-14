// import React, { useState } from 'react'
// import {
//     Box,
//     HStack,
//     VStack,
//     Radio,
//     Checkbox,
//     Button
// } from '@chakra-ui/react'
// import FormInput from '../molecules/FormInput';
// import FormRadio from '../molecules/FormRadio';
// import FormSelect from '../molecules/FormSelect';
// import FormCheckbox from '../molecules/FormCheckbox';
// import FormGroup from '../molecules/FormGroup';
// import FormFile from '../molecules/FormFile';
// import InputField from '../atoms/InputField';
// import useForm from '../../utils/use_form';
// import FormSwitch from '../molecules/FormSwitch';

// const FormIts = () => {
//   const [form, setForm] = useForm({
//     email: '',
//     password: '',
//     isAgree: false,
//     photo: ''
//   });

//   const [isLoading, setLoading] = useState(false);

//   const formHandle = () => {
//     setLoading(true);
//     setTimeout(() => {
//         setLoading(false);
//     }, 3000);
//   };

//   const onChangeHandle = (key, value) => setForm(key, value)
//   const onChangeImageHandle = (e) => {
//     if (e.target.files && e.target.files.length > 0) {        
//         setForm('photo', e.target.files[0])
//     }
//   }

//   return (
//     <>
//         <Box>
//             <VStack spacing={'16px'} alignItems={'flex-start'}>
//                 <FormGroup direction='row' title='Fullname' gap={5}>
//                     <InputField placeholder="Insert your first name" type="text" />
//                     <InputField placeholder="Insert your last name" type="text" />
//                 </FormGroup>
//                 <FormInput 
//                     title="Email address" 
//                     placeholder="Insert your email" 
//                     type="email" 
//                     helper="We'll never share your email."
//                     value={form.email}
//                     onChange={(e) => onChangeHandle('email', e.target.value)}
//                 />
//                 <FormInput title="Password" placeholder="Insert your password" type="password" isRequired />
//                 <FormInput title="Birthdate" placeholder="Select your birthdate" type="date" />
//                 <FormFile title="Photo" accept={'.png'} file={form.photo} onChange={(e) => onChangeImageHandle(e)} />
//                 <FormInput title="Phone number"  placeholder="Insert your phone number" type="tel" isInvalid={true} errorHelper="Phone number is required." />
//                 <FormRadio direction='row' title='Gender'>
//                     <Radio value='Male'>Male</Radio>
//                     <Radio value='Female'>Female</Radio>
//                 </FormRadio>
//                 <FormInput title="Address" placeholder="Insert your address" type="textarea" />
//                 <FormSelect title="Country" placeholder="Select country">
//                     <option value={'Indonesia'}>Indonesia</option>
//                     <option>United Arab Emirates</option>
//                 </FormSelect>
//                 <FormCheckbox direction='column' title='Hobby'>
//                     <Checkbox value={'Soccer'}>Soccer</Checkbox>
//                     <Checkbox>Badminton</Checkbox>
//                 </FormCheckbox>
//                 <FormSwitch title="Enable email alerts?" direction='flex' />
//                 <Box border={'1px'} borderColor={'gray.200'} py={'10px'} px={'15px'} borderRadius={'md'} width={'100%'}>
//                     <Checkbox isChecked={form.isAgree} onChange={(e) => onChangeHandle('isAgree', e.target.checked)}>Agree with Terms of Use and Privacy Policy</Checkbox>
//                 </Box>
//                 <HStack alignSelf={'flex-end'}>
//                     <Button colorScheme='gray'>Cancel</Button>
//                     <Button colorScheme='blue' isLoading={isLoading} loadingText='Submitting' onClick={formHandle} isDisabled={!form.isAgree}>Submit</Button>
//                 </HStack>
//             </VStack>
//         </Box>
//     </>
//   )
// }

// export default FormIts