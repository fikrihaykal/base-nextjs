import React from "react";
import PageTransition from "@/components/PageTransitions";
import { Box, Button, Card, Center, Checkbox, ListItem, Text, UnorderedList, Wrap } from "@chakra-ui/react";

const Form = () => {

    return (
        <>
            <PageTransition pageTitle="Button">
                <Box paddingX='5px'>
                    <Box marginBottom={10}>
                        <Text fontSize='2xl' lineHeight='1.7' marginBottom={4}>
                            Button memungkinkan user melakukan berbagai fungsi dan aksi.
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7' marginBottom={4}>
                            Button didesain untuk mudah dikenali dan di kostumisasi, 
                            baik oleh user maupun oleh developer. Pada dasarnya, 
                            button memiliki 3 faktor yang menentukan fungsi dan informasinya:
                        </Text>
                        <UnorderedList fontSize='lg' lineHeight='1.7' marginBottom={4}>
                            <ListItem>
                                Style. Pembeda visual berdasarkan warna, bentuk, dan ukuran.
                            </ListItem>
                            <ListItem>
                                Konten. Isi dari button tersebut. Bisa berupa label text, icon, 
                                atau keduanya.
                            </ListItem>
                            <ListItem>
                                Role. Peran/role dari sistem yang mempunyai arti tersendiri. 
                                Role bisa menentukan/mengubah dua faktor diatas pada suatu 
                                button.
                            </ListItem>
                        </UnorderedList>
                        <Text fontSize='lg' lineHeight='1.7' marginBottom={4}>
                            Selain button umum, ada juga button yang sudah sangat dikenal pada 
                            umumnya baik secara bentuk maupun fungsi - seperti Close button, 
                            Back button, Delete button etc - yang sudah disediakan tersendiri 
                            oleh sistem. Ada juga komponen-komponen lain yang berbentuk seperti 
                            button, yang akan dijelaskan lebih lanjut pada halamannya sendiri.
                        </Text>
                    </Box>
                    <Box marginBottom={10}>
                        <Text fontSize='4xl' fontWeight={600} lineHeight='1.7' marginBottom={2}>
                            Tipe
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7' marginBottom={4}>
                            Secara garis besar button memiliki 4 tipe: Filled, Outline, Text, 
                            dan Icon Button
                        </Text>
                        <Text fontSize='2xl' lineHeight='1.7' marginBottom={0}>
                            Solid Button
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7'>
                            Sesuai namanya, Solid Button adalah button dengan background fill/penuh 
                            satu warna. Solid button ini digunakan untuk informasi dengan emphasis 
                            paling tinggi, seperti Primary Button.
                        </Text>
                        <Center paddingY={10} marginBottom={3}>
                            <Wrap>
                                <Button size='lg' colorScheme='itsprimary'>Primary</Button>
                                <Button size='lg' colorScheme='itssecondary'>Secondary</Button>
                                <Button size='lg' colorScheme='itssuccess'>Success</Button>
                                <Button size='lg' colorScheme='itsinfo'>Info</Button>
                                <Button size='lg' colorScheme='itswarning'>Warning</Button>
                                <Button size='lg' colorScheme='itsdanger'>Danger</Button>
                                <Button size='lg' colorScheme='itspurple'>Purple</Button>
                                <Button size='lg' colorScheme='itspink'>Pink</Button>
                                <Button size='lg' colorScheme='itsorange'>Orange</Button>
                                <Button size='lg' colorScheme='itsteal'>Teal</Button>
                            </Wrap>
                        </Center>
                        <Text fontSize='2xl' lineHeight='1.7' marginBottom={0}>
                            Outline Button
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7'>
                            Outline Button memiliki background transparan, dengan outline warna 
                            solid satu warna.
                        </Text>
                        <Center paddingY={10} marginBottom={3}>
                            <Wrap>
                                <Button size='lg' colorScheme='itsprimary' variant='outline'>Primary</Button>
                                <Button size='lg' colorScheme='itssecondary' variant='outline'>Secondary</Button>
                                <Button size='lg' colorScheme='itssuccess' variant='outline'>Success</Button>
                                <Button size='lg' colorScheme='itsinfo' variant='outline'>Info</Button>
                                <Button size='lg' colorScheme='itswarning' variant='outline'>Warning</Button>
                                <Button size='lg' colorScheme='itsdanger' variant='outline'>Danger</Button>
                                <Button size='lg' colorScheme='itspurple' variant='outline'>Purple</Button>
                                <Button size='lg' colorScheme='itspink' variant='outline'>Pink</Button>
                                <Button size='lg' colorScheme='itsorange' variant='outline'>Orange</Button>
                                <Button size='lg' colorScheme='itsteal' variant='outline'>Teal</Button>
                            </Wrap>
                        </Center>
                        <Text fontSize='2xl' lineHeight='1.7' marginBottom={0}>
                            Ghost Button
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7'>
                            Ghost Button memiliki gaya yang mirip dengan outline button tetapi tanpa border.
                        </Text>
                        <Center paddingY={10} marginBottom={3}>
                            <Wrap>
                                <Button size='lg' colorScheme='itsprimary' variant='ghost'>Primary</Button>
                                <Button size='lg' colorScheme='itssecondary' variant='ghost'>Secondary</Button>
                                <Button size='lg' colorScheme='itssuccess' variant='ghost'>Success</Button>
                                <Button size='lg' colorScheme='itsinfo' variant='ghost'>Info</Button>
                                <Button size='lg' colorScheme='itswarning' variant='ghost'>Warning</Button>
                                <Button size='lg' colorScheme='itsdanger' variant='ghost'>Danger</Button>
                                <Button size='lg' colorScheme='itspurple' variant='ghost'>Purple</Button>
                                <Button size='lg' colorScheme='itspink' variant='ghost'>Pink</Button>
                                <Button size='lg' colorScheme='itsorange' variant='ghost'>Orange</Button>
                                <Button size='lg' colorScheme='itsteal' variant='ghost'>Teal</Button>
                            </Wrap>
                        </Center>
                        <Text fontSize='2xl' lineHeight='1.7' marginBottom={0}>
                            Link Button
                        </Text>
                        <Text fontSize='lg' lineHeight='1.7'>
                            Button dengan gaya link tanpa background maupun border.
                        </Text>
                        <Center paddingY={10} marginBottom={3}>
                            <Wrap spacing={12}>
                                <Button size='lg' colorScheme='itsprimary' variant='link'>Primary</Button>
                                <Button size='lg' colorScheme='itssecondary' variant='link'>Secondary</Button>
                                <Button size='lg' colorScheme='itssuccess' variant='link'>Success</Button>
                                <Button size='lg' colorScheme='itsinfo' variant='link'>Info</Button>
                                <Button size='lg' colorScheme='itswarning' variant='link'>Warning</Button>
                                <Button size='lg' colorScheme='itsdanger' variant='link'>Danger</Button>
                                <Button size='lg' colorScheme='itspurple' variant='link'>Purple</Button>
                                <Button size='lg' colorScheme='itspink' variant='link'>Pink</Button>
                                <Button size='lg' colorScheme='itsorange' variant='link'>Orange</Button>
                                <Button size='lg' colorScheme='itsteal' variant='link'>Teal</Button>
                            </Wrap>
                        </Center>
                    </Box>
                </Box>
            </PageTransition>
        </>
    );
};

export default Form;