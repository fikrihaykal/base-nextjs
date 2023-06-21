import React from "react";
import PageTransition from "@/components/PageTransitions";
import { Box, Button, Text, Wrap } from "@chakra-ui/react";

const Form = () => {

    return (
        <>
            <PageTransition pageTitle="Button">
                <Text fontSize="2xl" marginTop={8} marginBottom={4}>Solid</Text>
                <Wrap marginBottom={5}>
                    <Button colorScheme='itsblue'>Button</Button>
                    <Button colorScheme='itspurple'>Button</Button>
                    <Button colorScheme='itspink'>Button</Button>
                    <Button colorScheme='itsred'>Button</Button>
                    <Button colorScheme='itsorange'>Button</Button>
                    <Button colorScheme='itsyellow'>Button</Button>
                    <Button colorScheme='itsgreen'>Button</Button>
                    <Button colorScheme='itsteal'>Button</Button>
                    <Button colorScheme='itscyan'>Button</Button>
                    <Button colorScheme='itsgray'>Button</Button>
                </Wrap>
                <Text fontSize="2xl" marginTop={8} marginBottom={4}>Outline</Text>
                <Wrap marginBottom={5}>
                    <Button variant="outline" colorScheme='itsblue'>Button</Button>
                    <Button variant="outline" colorScheme='itspurple'>Button</Button>
                    <Button variant="outline" colorScheme='itspink'>Button</Button>
                    <Button variant="outline" colorScheme='itsred'>Button</Button>
                    <Button variant="outline" colorScheme='itsorange'>Button</Button>
                    <Button variant="outline" colorScheme='itsyellow'>Button</Button>
                    <Button variant="outline" colorScheme='itsgreen'>Button</Button>
                    <Button variant="outline" colorScheme='itsteal'>Button</Button>
                    <Button variant="outline" colorScheme='itscyan'>Button</Button>
                    <Button variant="outline" colorScheme='itsgray'>Button</Button>
                </Wrap>
                <Text fontSize="2xl" marginTop={8} marginBottom={4}>Ghost</Text>
                <Wrap marginBottom={5}>
                    <Button variant="ghost" colorScheme='itsblue'>Button</Button>
                    <Button variant="ghost" colorScheme='itspurple'>Button</Button>
                    <Button variant="ghost" colorScheme='itspink'>Button</Button>
                    <Button variant="ghost" colorScheme='itsred'>Button</Button>
                    <Button variant="ghost" colorScheme='itsorange'>Button</Button>
                    <Button variant="ghost" colorScheme='itsyellow'>Button</Button>
                    <Button variant="ghost" colorScheme='itsgreen'>Button</Button>
                    <Button variant="ghost" colorScheme='itsteal'>Button</Button>
                    <Button variant="ghost" colorScheme='itscyan'>Button</Button>
                    <Button variant="ghost" colorScheme='itsgray'>Button</Button>
                </Wrap>
                <Text fontSize="2xl" marginTop={8} marginBottom={4}>Link</Text>
                <Wrap marginBottom={5}>
                    <Button variant="link" colorScheme='itsblue'>Button</Button>
                    <Button variant="link" colorScheme='itspurple'>Button</Button>
                    <Button variant="link" colorScheme='itspink'>Button</Button>
                    <Button variant="link" colorScheme='itsred'>Button</Button>
                    <Button variant="link" colorScheme='itsorange'>Button</Button>
                    <Button variant="link" colorScheme='itsyellow'>Button</Button>
                    <Button variant="link" colorScheme='itsgreen'>Button</Button>
                    <Button variant="link" colorScheme='itsteal'>Button</Button>
                    <Button variant="link" colorScheme='itscyan'>Button</Button>
                    <Button variant="link" colorScheme='itsgray'>Button</Button>
                </Wrap>
            </PageTransition>
        </>
    );
};

export default Form;