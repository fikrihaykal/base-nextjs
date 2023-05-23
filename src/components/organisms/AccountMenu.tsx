import AppSettingContext from "@/providers/AppSettingProvider";
import { Box, Button, Collapse, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useContext } from "react";
import { IoFingerPrint, IoLogOut, IoPersonCircle } from "react-icons/io5";

const AccountMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isNavbarOpen } = useContext(AppSettingContext)

    return (
        <>
            <Menu>
                <MenuButton as={Button} >
                    <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                        <Box w="42px" h="42px" ml={{ lg: "4px" }}>
                            <Image src="/images/app/profile-default.jpg" borderRadius="full" />
                        </Box>
                        <Collapse in={isNavbarOpen}>
                            <Flex flexDir="column" flex="1 1 auto" justifyContent="center" alignItems="start" ml="15px">
                                <Text>Administrator</Text>
                                <Text>Sulthon Nashir</Text>
                            </Flex>
                        </Collapse>
                    </Link>
                </MenuButton>

                <MenuList>
                    <MenuItem>
                        <IoPersonCircle />
                        <span>Profil Saya</span>
                    </MenuItem>
                    <MenuItem onClick={onOpen}>
                        <IoFingerPrint />
                        <span>Ubah Akses</span>
                    </MenuItem>
                    <MenuItem>
                        <IoLogOut />
                        <span>Keluar</span>
                    </MenuItem>
                </MenuList>
            </Menu>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Ubah Akses</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb="10px">You are currently accessing as <b>Super Administrator</b>.</Text>
                        <Select placeholder='Pilih salah satu'>
                            <option value='sa'>Super Administrator</option>
                            <option value='d'>Dosen</option>
                            <option value='m'>Mahasiswa</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>Batal</Button>
                        <Button colorScheme='blue' onClick={onClose}>Ubah</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AccountMenu