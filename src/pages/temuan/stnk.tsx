import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { SmOutlineButton } from "@/components/atoms/Buttons/SmOutlineBtn";
import { CloseIcon } from "@/components/atoms/IconParams";
import PageCol from "@/components/atoms/PageCol";
import PageColWidget from "@/components/atoms/PageColWidget";
import PageRow from "@/components/atoms/PageRow";
import Wrapper from "@/components/atoms/Wrapper";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import CardIconShadowSkeleton from "@/components/organisms/CardIconShadowSkeleton";
import Card from "@/components/organisms/Cards/Card";
import PageBanner from "@/components/organisms/PageBanner";
import { foundItems } from "@/data/dummy";
import {
  Box,
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Link,
  Text,
  useColorMode,
  useDisclosure,
  useEditableControls,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const STNK = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [loaded, setLoaded] = useState<boolean>(false);
  const [statusB, setStatusB] = useState<number>(1);
  const [archived, setArchived] = useState<boolean>(false);
  const menuItems = [...new Set(foundItems.map((Val) => Val.type))];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

  const { reload, query } = useRouter();
  const { colorMode } = useColorMode();
  return (
    <>
      <PageTransition pageTitle="STNK">
        <PageRow>
          <PageCol>
            <Flex gap="16px">
              <Card flex="1" p="12px" w="100%">
                <Flex w="100%" gap="24px">
                  <Box
                    bgImage="/images/stnk.jpg"
                    w="260px"
                    h="260px"
                    minW="260px"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    borderRadius="12px"
                  ></Box>
                  <Box mt="16px" pos="relative" w="100%">
                    <Flex>
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        mb="12px"
                        mr="12px"
                      >
                        STNK
                      </Text>
                      {statusB == 0 ? (
                        <Flex
                          px="10px"
                          h="32px"
                          justifyContent="center"
                          alignItems="center"
                          w="max-content"
                          borderRadius="12px"
                          fontWeight="550"
                          bg="#ffdd00"
                          fontSize="14px"
                        >
                          <Text mt="-3px">On Agent</Text>
                        </Flex>
                      ) : (
                        ""
                      )}
                      {statusB == 1 ? (
                        <Flex
                          px="10px"
                          h="32px"
                          justifyContent="center"
                          alignItems="center"
                          w="max-content"
                          borderRadius="12px"
                          fontWeight="550"
                          bg="#ffdd00"
                          fontSize="14px"
                        >
                          <Text mt="-3px">On Agent</Text>
                        </Flex>
                      ) : (
                        ""
                      )}
                      {statusB == 2 ? (
                        <Flex
                          px="10px"
                          h="32px"
                          justifyContent="center"
                          alignItems="center"
                          w="max-content"
                          borderRadius="12px"
                          fontWeight="550"
                          bg="#57bc3b"
                          fontSize="14px"
                        >
                          <Text mt="-3px">Ditemukan</Text>
                        </Flex>
                      ) : (
                        ""
                      )}
                      {archived ? (
                        <Flex
                          px="10px"
                          h="32px"
                          justifyContent="center"
                          alignItems="center"
                          w="max-content"
                          borderRadius="12px"
                          fontWeight="550"
                          bg="#989898"
                          fontSize="14px"
                          ml="auto"
                          mr="12px"
                        >
                          <Text mt="-3px">Diarsipkan</Text>
                        </Flex>
                      ) : (
                        ""
                      )}
                    </Flex>

                    <Text fontSize="14px" fontWeight="500">
                      Lokasi barang saat ini: Agen SKK Perpustakaan
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      STNK Motor terlihat masih baru
                    </Text>
                    <Text fontSize="14px" fontWeight="500">
                      Barang dapat diambil pada hari dan jam kerja di lokasi
                      agent
                    </Text>
                    <Flex
                      w="100%"
                      pos="absolute"
                      bottom="12px"
                      pl="4px"
                      pr="12px"
                      justifyContent="space-between"
                    >
                      <Flex>
                        <SmOutlineButton
                          isDisabled={archived? true: false}
                          mt="auto"
                          onClick={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                          }}
                        >
                          Hubungi Agen
                        </SmOutlineButton>
                        <SmOutlineButton
                          isDisabled={archived? true: false}
                          bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
                          _hover={{
                            background:
                              colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
                          }}
                          color={colorMode == "light" ? "#141414" : "#141414"}
                          mt="auto"
                          onClick={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                            window.open(
                              `https://www.google.com/maps/place/ITS+Library/@-7.2816821,112.7929673,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa16cfc6f083:0x80eeb48974d69e31!8m2!3d-7.2816821!4d112.7955422!16s%2Fg%2F11b6dp035w?entry=ttu`,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          Lokasi Agen
                        </SmOutlineButton>
                      </Flex>
                      <Flex>
                        {" "}
                        <SmOutlineButton
                          isDisabled={archived? true: false} mt="auto">Edit</SmOutlineButton>
                        <SmOutlineButton
                          isDisabled={archived? true: false} mt="auto" onClick={onOpen2}>
                          Ditemukan
                        </SmOutlineButton>
                        <SmOutlineButton
                          isDisabled={archived? true: false} mt="auto" onClick={onOpen}>
                          Arsipkan
                        </SmOutlineButton>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
              <Card w="260px" p="16px">
                <Text fontSize="16px" fontWeight="550">
                  Penemu
                </Text>
                <Flex w="100%" justifyContent="center">
                  {" "}
                  <Box
                    bgImage="/images/profilepicmine.jpg"
                    w="150px"
                    h="150px"
                    borderRadius="50%"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    mb="16px"
                  ></Box>
                </Flex>
                <Text fontSize="14px" fontWeight="500">
                  Muhammad Sulthon Nashir
                </Text>
                <Text fontSize="14px" fontWeight="500">
                  No.HP: 082264711734
                </Text>
                <Text fontSize="14px" fontWeight="500">
                  NRP/NIP: 21231213123
                </Text>
              </Card>
            </Flex>

            <Flex
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt="64px"
            >
              <Text fontSize="24px" fontWeight="600" letterSpacing="-0.2px">
                Temuan serupa
              </Text>
            </Flex>

            {loaded ? (
              <Wrapper pt="0px">
                {foundItems
                  .filter((val) => val.type == "dokumen")
                  .map((Val, id) => {
                    if (
                      foundItems.filter(
                        // val.id ganti ke thisitem.id @ prod
                        (val) => val.type == "dokumen" && val.id !== 0
                      ).length > 0
                    ) {
                      return (
                        <CardIconShadow
                          title={Val.title}
                          subtitle={Val.subtitle}
                          icon={Val.icon}
                          link={Val.link}
                          type={Val.type}
                          location={Val.location}
                          status={Val.status}
                        />
                      );
                    } else if (
                      foundItems.filter(
                        (val) => val.type == "dokumen" && val.id !== 0
                      ).length <= 0
                    ) {
                      return (
                        <Flex w="100%" p="24px" pr="80px">
                          <Card
                            w="100%"
                            h="200px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDir="column"
                          >
                            <Text fontSize="16px" fontWeight="500">
                              Tidak ada temuan serupa.
                            </Text>
                            <Link href="/temuan" color="#008fff">
                              <SmOutlineButton
                                isDisabled={archived? true: false} mt="auto" marginTop="8px">
                                Lihat temuan lain
                              </SmOutlineButton>
                            </Link>
                          </Card>
                        </Flex>
                      );
                    } else {
                      return (
                        <Flex w="100%" p="24px" pr="80px">
                          <Card
                            w="100%"
                            h="200px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDir="column"
                          >
                            <Text fontSize="16px" fontWeight="500">
                              Ada yang salah!
                            </Text>
                            <Flex gap="8px">
                              <SmOutlineButton
                                isDisabled={archived? true: false}
                                mt="auto"
                                marginTop="8px"
                                onClick={() => {
                                  reload();
                                }}
                              >
                                Muat ulang
                              </SmOutlineButton>

                              <Link href="/temuan" color="#008fff">
                                <SmOutlineButton
                                  isDisabled={archived? true: false}
                                  mt="auto"
                                  marginTop="8px"
                                  bg={
                                    colorMode == "light"
                                      ? "#e0e0e040"
                                      : "#e0e0e070"
                                  }
                                  _hover={{
                                    background:
                                      colorMode == "light"
                                        ? "#e0e0e0"
                                        : "#e0e0e050",
                                  }}
                                  color={
                                    colorMode == "light" ? "#141414" : "#141414"
                                  }
                                >
                                  Lihat temuan lain
                                </SmOutlineButton>
                              </Link>
                            </Flex>
                          </Card>
                        </Flex>
                      );
                    }
                  })}
              </Wrapper>
            ) : (
              <Wrapper>
                <CardIconShadowSkeleton />
                <CardIconShadowSkeleton />
                <CardIconShadowSkeleton />
              </Wrapper>
            )}
          </PageCol>
          {/* <PageColWidget>
            <>
              
            </>
          </PageColWidget> */}
        </PageRow>
      </PageTransition>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen2}
        onClose={onClose2}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="20px" fontWeight="550px">
              Ditemukan
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="500" mb="1rem">
              Barang STNK akan diset menjadi ditemukan. Apakah anda yakin?
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <SmOutlineButton
              isDisabled={archived? true:false}
              mt="auto"
              marginTop="8px"
              onClick={onClose2}
              bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
              _hover={{
                background: colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
              }}
              color={colorMode == "light" ? "#141414" : "#141414"}
            >
              Tidak, batalkan
            </SmOutlineButton>
            <SmOutlineButton
              isDisabled={archived? true:false}
              mt="auto"
              marginTop="8px"
              onClick={() => {
                setStatusB(2);
                onClose2();
              }}
            >
              Ya, saya yakin
            </SmOutlineButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="20px" fontWeight="550px">
              Ditemukan
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="500" mb="1rem">
              Barang STNK akan diset menjadi diarsipkan. Barang yang sudah diarsipkan tidak dapat diubah lagi. Apakah anda yakin?
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <SmOutlineButton
              isDisabled={archived? true: false}
              mt="auto"
              marginTop="8px"
              onClick={onClose2}
              bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
              _hover={{
                background: colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
              }}
              color={colorMode == "light" ? "#141414" : "#141414"}
            >
              Tidak, batalkan
            </SmOutlineButton>
            <SmOutlineButton
              isDisabled={archived? true: false}
              mt="auto"
              marginTop="8px"
              onClick={() => {
                setArchived(true);
                onClose();
              }}
            >
              Ya, saya yakin
            </SmOutlineButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default STNK;
