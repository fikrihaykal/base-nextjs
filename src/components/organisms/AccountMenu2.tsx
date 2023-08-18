import AppSettingContext from "@/providers/AppSettingProvider";
import {
  Box,
  Button,
  Collapse,
  Fade,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext } from "react";
import { IoFingerPrint, IoLogOut, IoPersonCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

const AccountMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isNavbarOpen } = useContext(AppSettingContext);
  const [hidden, setHidden] = useState(!isNavbarOpen);
  const { getButtonProps, getDisclosureProps } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="#fffff00">
          <Link
            as={NextLink}
            href="/"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            <Box w="42px" h="42px" ml={{ lg: "4px" }}>
              <Image
                src="/images/app/profile-default.jpg"
                borderRadius="full"
                alt="Profile"
              />
            </Box>

            <Flex
        
              flexDir="column"
              flex="1 1 auto"
              justifyContent="center"
              alignItems="start"
              ml="15px"
            >
              <Text color="#232323">Administrator</Text>
              <Text color="#232323">Sulthon Nashir</Text>
            </Flex>

            {/* <motion.div
              {...getDisclosureProps()}
              hidden={hidden}
              initial={false}
              onAnimationStart={() => setHidden(false)}
              onAnimationComplete={() => setHidden(!isNavbarOpen)}
              animate={{ width: isNavbarOpen ? 200 : 65 }}
              transition={{ type: "easeOut" }}
              style={{
                background: "red",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
                left: "0",
                height: "100vh",
                top: "0",
              }}
            >
           
            </motion.div> */}
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
            <Text mb="10px">
              You are currently accessing as <b>Super Administrator</b>.
            </Text>
            <Select placeholder="Pilih salah satu">
              <option value="sa">Super Administrator</option>
              <option value="d">Dosen</option>
              <option value="m">Mahasiswa</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Ubah
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AccountMenu;
