import PageTransition from "@/components/PageLayout";
import {
  BoxIconMade,
  EditIconMade,
  SearchIconMade,
} from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import Dropdown from "@/components/molecules/Dropdown";

const Berkas = () => {
  const [checked, setChecked] = useState(false);
  const { colorMode } = useColorMode();
  const [dropdownActive, setDropdownActive] = useState(false);

  const changeDropdownActive = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else if (!dropdownActive) {
      setDropdownActive(true);
    }
  };

  const setCheckedVal = () => {
    if (checked) {
      setChecked(false);
    } else if (!checked) {
      setChecked(true);
    }
  };

  return (
    <>
      <PageTransition>
        <Flex className="page__row">
          <MenuWrapper>
            <Box
              className="card__big"
              pos="relative"
              p="32px 32px 40px"
              borderRadius="24px"
              bg={colorMode == "light" ? "#fff" : "#222222"}
              _before={{
                content: '""',
                pos: "absolute",
                top: "43px",
                left: "32px",
                right: "32px",
                bottom: "-43px",
                zIndex: "-1",
                background: colorMode == "light" ? "#e3e6ec" : "#000",
                opacity: colorMode == "light" ? "0.91" : "0.51",
                filter: "blur(86.985px)",
                borderRadius: "24px",
              }}
            >
              <Box
                className="table__sorting"
                _notLast={{
                  marginBottom: "15px",
                }}
              >
                <Flex className="sorting__row" m="0 -8px">
                  <Box
                    className="sorting__col"
                    flex="0 0 calc(50% - 16px)"
                    width="calc(50% - 16px)"
                    m="0 8px"
                  >
                    <Flex className="sorting__dropdown" m="0 -8px">
                      <Dropdown placeholder="30 hari terakhir" />
                      <Dropdown placeholder="Semua jenis" />
                    </Flex>
                  </Box>
                  <Box
                    className="sorting__col"
                    flex="0 0 calc(50% - 16px)"
                    width="calc(50% - 16px)"
                    m="0 8px"
                  >
                    <Flex className="sorting__line" alignItems="center">
                      <Box
                        className="sorting__search"
                        mr="30px"
                        pos="relative"
                        flexGrow="1"
                      >
                        <Button
                          className="sorting__open"
                          pos="absolute"
                          top="0"
                          left="0"
                          bottom="0"
                          w="55px"
                          fontSize="0"
                          bg="transparent"
                          h="100%"
                          zIndex="10"
                          _hover={{
                            background: "transparent",
                          }}
                        >
                          <SearchIconMade
                            fontSize="20px"
                            fill={colorMode == "light" ? "#11142D" : "#fff"}
                            transition="fill .25s"
                            w="1em"
                            h="1em"
                          ></SearchIconMade>
                        </Button>
                        <Input
                          className="sorting__input"
                          w="100%"
                          h="56px"
                          p="0 20px 0 55px"
                          border="none"
                          borderRadius="16px"
                          bg={
                            colorMode == "light"
                              ? "rgba(228,228,228,0.2)"
                              : "#292929"
                          }
                          fontSize="14px"
                          fontWeight="600"
                          color={colorMode == "light" ? "#1b1d21" : "#fff"}
                          _placeholder={{
                            color: "#808080",
                          }}
                          placeholder="Search"
                          _focusVisible={{
                            border: "none",
                          }}
                        ></Input>
                      </Box>
                      <Flex className="sorting__search" align-items="center">
                        <Button
                          className="sorting__action"
                          pos="relative"
                          w="48px"
                          h="48px"
                          borderRadius="50%"
                          transition="all .25s"
                          bg={colorMode == "light" ? "#fff" : "#222222"}
                          _hover={{
                            background:
                              colorMode == "light" ? "white" : "#292929",
                            boxShadow:
                              "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                          }}
                          _notLast={{
                            marginRight: "24px",
                          }}
                        >
                          <EditIconMade
                            fontSize="19px"
                            fill="#11142d"
                            w="1em"
                            h="1em"
                          ></EditIconMade>
                        </Button>
                        <Button
                          className="sorting__action"
                          flexShrink="0"
                          w="48px"
                          h="48px"
                          borderRadius="50%"
                          bg={colorMode == "light" ? "#fff" : "#222222"}
                          fontSize="0"
                          transition="box-shadow .25s, -webkit-box-shadow .25s, -moz-box-shadow"
                          _hover={{
                            background:
                              colorMode == "light" ? "white" : "#292929",
                            boxShadow:
                              "rgba(17, 12, 46, 0.07) 0px 4px 12px 0px;",
                          }}
                          _notLast={{
                            marginRight: "24px",
                          }}
                        >
                          <BoxIconMade
                            fontSize="19px"
                            fill="#11142d"
                            w="1em"
                            h="1em"
                          ></BoxIconMade>
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box className="table__container">
                <Box className="table__main" display="table" w="100%">
                  <Box className="table__row head" display="table-row">
                    <Box
                      className="table__cell head"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Box
                        className="checkbox__custom"
                        display="inline-block"
                        pos="relative"
                        userSelect="none"
                        cursor="pointer"
                      >
                        <Checkbox
                          className="checkbox__input"
                          pos="absolute"
                          top="0"
                          left="0"
                          opacity="0"
                        ></Checkbox>
                        <Flex className="checkbox__in">
                          <Flex
                            className="checkbox__tick"
                            pos="relative"
                            flex="0 0 20px"
                            w="20px"
                            h="20px"
                            borderRadius="4px"
                            border="2px solid #e4e4e4"
                            transition="all .25s"
                            onClick={setCheckedVal}
                            bg={checked ? "#008fff" : "transparent"}
                            borderColor={
                              checked
                                ? "#008fff"
                                : colorMode == "light"
                                ? "#e4e4e4"
                                : "#333333"
                            }
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "10px",
                              height: "9px",
                              backgroundImage: `url(/check.svg)`,
                              opacity: checked ? 1 : 0,
                              transition: "all .25s",
                              // filter: colorMode == "light" ? "none" : "brightness(0.135) hue-rotate(-70deg) saturate(0);"
                            }}
                            _hover={{
                              borderColor: "#008Fff",
                            }}
                          ></Flex>
                        </Flex>
                      </Box>
                    </Box>
                    <Box
                      className="table__cell head"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      {/* File */}
                    </Box>
                    <Box
                      className="table__cell head"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      Jenis
                    </Box>
                    <Box
                      className="table__cell head"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      Tanggal
                    </Box>
                    <Box
                      className="table__cell head"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      Keterangan
                    </Box>
                  </Box>
                  <Box className="table__row body" display="table-row">
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      color="#b2b3BD"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Box
                        className="checkbox__custom"
                        display="inline-block"
                        pos="relative"
                        userSelect="none"
                        cursor="pointer"
                      >
                        <Checkbox
                          className="checkbox__input"
                          pos="absolute"
                          top="0"
                          left="0"
                          opacity="0"
                        ></Checkbox>
                        <Flex className="checkbox__in">
                          <Flex
                            className="checkbox__tick"
                            pos="relative"
                            flex="0 0 20px"
                            w="20px"
                            h="20px"
                            borderRadius="4px"
                            border="2px solid #e4e4e4"
                            transition="all .25s"
                            onClick={setCheckedVal}
                            bg={checked ? "#008fff" : "transparent"}
                            borderColor={
                              checked
                                ? "#008fff"
                                : colorMode == "light"
                                ? "#e4e4e4"
                                : "#333333"
                            }
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "10px",
                              height: "9px",
                              backgroundImage: `url(/check.svg)`,
                              opacity: checked ? 1 : 0,
                              transition: "all .25s",
                            }}
                            _hover={{
                              borderColor: "#008Fff",
                            }}
                          ></Flex>
                        </Flex>
                      </Box>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Link as={NextLink} href="#">
                        <Flex
                          className="file__container"
                          display="inline-flex"
                          alignItems="center"
                          transition="color .15s"
                          _hover={{
                            color: "#008fff",
                          }}
                        >
                          <Flex
                            className="file__preview"
                            pos="relative"
                            justifyContent="center"
                            alignItems="center"
                            flexShrink="0"
                            w="96px"
                            h="72px"
                            borderRadius="8px"
                            bg={colorMode == "light" ? "#aadaff" : "#444444"}
                            fontSize="0"
                          ></Flex>
                          <Box className="file__detail" pl="24px">
                            <Box
                              className="file__title"
                              mb="9px"
                              fontSize="16px"
                              lineHeight="1.1875"
                              fontWeight="600"
                            >
                              <Text>Sertif Bukti Wirausaha</Text>
                            </Box>
                            <Box
                              className="file__subtitle"
                              fontSize="13px"
                              lineHeight="1.38462"
                              fontWeight="600"
                              color="#808080"
                            >
                              PDF . 1.2 MB
                            </Box>
                          </Box>
                        </Flex>
                      </Link>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Text fontWeight="00" color="#7fba7a">
                        Sertifikat
                      </Text>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Text fontWeight="400">2023-02-03 08:49</Text>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                      maxWidth="180px"
                    >
                      <Text wordBreak="break-word" fontWeight="400">
                        Dokumen bukti wirausaha slip pendapatan dan gaji
                      </Text>
                    </Box>
                  </Box>
                  <Box className="table__row body" display="table-row">
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Box
                        className="checkbox__custom"
                        display="inline-block"
                        pos="relative"
                        userSelect="none"
                        cursor="pointer"
                      >
                        <Checkbox
                          className="checkbox__input"
                          pos="absolute"
                          top="0"
                          left="0"
                          opacity="0"
                        ></Checkbox>
                        <Flex className="checkbox__in">
                          <Flex
                            className="checkbox__tick"
                            pos="relative"
                            flex="0 0 20px"
                            w="20px"
                            h="20px"
                            borderRadius="4px"
                            border="2px solid #e4e4e4"
                            transition="all .25s"
                            onClick={setCheckedVal}
                            bg={checked ? "#008fff" : "transparent"}
                            borderColor={
                              checked
                                ? "#008fff"
                                : colorMode == "light"
                                ? "#e4e4e4"
                                : "#333333"
                            }
                            _before={{
                              content: '""',
                              pos: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "10px",
                              height: "9px",
                              backgroundImage: `url(/check.svg)`,
                              opacity: checked ? 1 : 0,
                              transition: "all .25s",
                            }}
                            _hover={{
                              borderColor: "#008Fff",
                            }}
                          ></Flex>
                        </Flex>
                      </Box>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="13px"
                      lineHeight="1.38462"
                      fontWeight="500"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Link as={NextLink} href="#">
                        <Flex
                          className="file__container"
                          display="inline-flex"
                          alignItems="center"
                          transition="color .15s"
                          _hover={{
                            color: "#008fff",
                          }}
                        >
                          <Flex
                            className="file__preview"
                            pos="relative"
                            justifyContent="center"
                            alignItems="center"
                            flexShrink="0"
                            w="96px"
                            h="72px"
                            borderRadius="8px"
                            bg={colorMode == "light" ? "#aadaff" : "#444444"}
                            fontSize="0"
                          ></Flex>
                          <Box className="file__detail" pl="24px">
                            <Box
                              className="file__title"
                              mb="9px"
                              fontSize="16px"
                              lineHeight="1.1875"
                              fontWeight="600"
                            >
                              Foto Acara ARA 4.0
                            </Box>
                            <Box
                              className="file__subtitle"
                              fontSize="13px"
                              lineHeight="1.38462"
                              fontWeight="600"
                              color="#808080"
                            >
                              PNG . 423 KB
                            </Box>
                          </Box>
                        </Flex>
                      </Link>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Text fontWeight="00" color="#6c5dd3">
                        Foto
                      </Text>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                    >
                      <Text fontWeight="400">2023-01-05 10:12</Text>
                    </Box>
                    <Box
                      className="table__cell body"
                      display="table-cell"
                      verticalAlign="middle"
                      borderBottom={
                        colorMode == "light"
                          ? "1px solid #e4e4e4"
                          : "1px solid #333333"
                      }
                      paddingTop="24px"
                      paddingBottom="24px"
                      paddingLeft="20px"
                      fontSize="14px"
                      lineHeight="1.38462"
                      _first={{
                        width: "20px",
                        padding: "0",
                      }}
                      maxWidth="180px"
                    >
                      <Text wordBreak="break-word" fontWeight="400">
                        Bukti acara "ARA ITS 4.0"
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="table__more" pt="40px" textAlign="center">
                  <Button
                    className="button__more"
                    bg="#1b1b1b"
                    color="#fff"
                    minW="166px"
                    h="56px"
                    p="0 20px"
                    borderRadius="16px/16px"
                    fontSize="14px"
                    lineHeight="1.42857"
                    fontWeight="700"
                    transition="all .25s"
                    _hover={{
                      background: colorMode == "light" ? "#008fff" : "#0071ca",
                    }}
                  >
                    Load More
                  </Button>
                </Box>
              </Box>
            </Box>
          </MenuWrapper>
        </Flex>
      </PageTransition>
    </>
  );
};

export default Berkas;
