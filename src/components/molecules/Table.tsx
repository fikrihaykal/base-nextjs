import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  useColorMode,
  Link,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { SearchIconMade } from "../atoms/IconsMade";
import NextLink from "next/link";
import { DropdownDateItem, DropdownItem } from "@/types/dropdown-items";
import { Column } from "@tanstack/table-core";
import {
  ButtonImageInterface,
  TableCheckboxInterface,
} from "@/types/component";

const TableWrapper = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <>
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
        {children}
      </Box>
    </>
  );
};

const TableSorting = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        className="table__sorting"
        _notLast={{
          marginBottom: "15px",
        }}
      >
        {children}
      </Box>
    </>
  );
};

const TableSortingRow = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        className="sorting__row"
        m="0 -8px"
        display={{ d: "block", x: "flex" }}
      >
        {children}
      </Box>
    </>
  );
};

const TableSortingCol = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box
        className="sorting__col"
        flex={{ base: "100%", x: "calc(50% - 16px)" }}
        width={{ base: "100%", x: "calc(50% - 16px)" }}
        m={{ base: "0", x: "0 8px" }}
        _last={{
          marginTop: { base: "16px", x: "0" },
        }}
      >
        <Box
          display={{ base: "block", m: "flex" }}
          className="sorting__dropdown"
          m="0 -8px"
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

const TableSearch = ({
  placeholder,
  target,
}: {
  placeholder: string;
  target: any;
}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box className="sorting__search" m="0 8px" pos="relative" flexGrow="1">
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
          />
        </Button>
        <Input
          className="sorting__input"
          // w="100%"
          h="56px"
          p="0 20px 0 55px"
          border="none"
          borderRadius="16px"
          bg={colorMode == "light" ? "rgba(228,228,228,0.2)" : "#292929"}
          fontSize="14px"
          fontWeight="600"
          color={colorMode == "light" ? "#1b1d21" : "#fff"}
          _placeholder={{
            color: "#808080",
          }}
          placeholder={placeholder}
          _focusVisible={{
            border: "none",
          }}
          onChange={(e) => target(e.target.value)}
        />
      </Box>
    </>
  );
};

const TableContainer = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        className="table__container"
        display="block"
        maxW="100%"
        overflowX="auto"
        overflowY="hidden"
        whiteSpace="nowrap"
        sx={{
          "::-webkit-scrollbar-thumb": {
            backgroundColor: colorMode == "light" ? "#dadada" : "#313131",
            border: "5px solid transparent",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: colorMode == "light" ? "#b3b3b3" : "#393939",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

const TableMain = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box className="table__main" display="table" w="100%">
        {children}
      </Box>
    </>
  );
};

const TableMore = ({ moreText, ...btnProps }: ButtonImageInterface) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box className="table__more" pt="40px" textAlign="center">
        <Button
          className="button__more"
          bg="#1b1b1b"
          color="#fff"
          minW="166px"
          h="56px"
          p="0 20px"
          mb="30px"
          borderRadius="16px/16px"
          fontSize="14px"
          lineHeight="1.42857"
          fontWeight="700"
          transition="all .25s"
          _hover={{
            background: colorMode == "light" ? "#008fff" : "#0071ca",
          }}
          {...btnProps}
          disabled={true}
        >
          {moreText}
        </Button>
      </Box>
    </>
  );
};

const TableHead = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box className="table__row head" display="table-row">
        {children}
      </Box>
    </>
  );
};

const TableBody = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box className="table__row body" display="table-row">
        {children}
      </Box>
    </>
  );
};

const TableHeadCell = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        className="table__cell head"
        display="table-cell"
        verticalAlign="middle"
        borderBottom={
          colorMode == "light" ? "1px solid #e4e4e4" : "1px solid #333333"
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
        {children}
      </Box>
    </>
  );
};

const TableBodyCell = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        className="table__cell body"
        display="table-cell"
        verticalAlign="middle"
        borderBottom={
          colorMode == "light" ? "1px solid #e4e4e4" : "1px solid #333333"
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
        {children}
      </Box>
    </>
  );
};

const TableCheckbox = ({
  id,
  header,
  ref,
  ...checkboxProps
}: TableCheckboxInterface) => {
  const { colorMode } = useColorMode();
  const [checked, setChecked] = useState(checkboxProps.isChecked ?? false);

  useEffect(() => {
    setChecked(checkboxProps.isChecked ?? false);
  }, [checkboxProps.isChecked]);

  return (
    <Box
      className="checkbox__custom"
      display="inline-block"
      pos="relative"
      userSelect="none"
      cursor="pointer"
    >
      <Checkbox
        className={"checkbox__input " + id}
        pos="absolute"
        top="0"
        left="0"
        opacity="0"
        isChecked={checked}
        {...checkboxProps}
      />
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
          onClick={checkboxProps.onClick}
          bg={checked ? "#008fff" : "transparent"}
          borderColor={
            checked ? "#008fff" : colorMode == "light" ? "#e4e4e4" : "#333333"
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
        />
      </Flex>
    </Box>
  );
};

const TableFilter = ({
  placeholder,
  data,
  column,
}: {
  placeholder: string;
  data: Array<DropdownItem>;
  column?: Column<any, unknown>;
}) => {
  const { colorMode } = useColorMode();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(placeholder);
  const dropdownOutsideClickRef = useRef(null);
  useOutsideAlerter(dropdownOutsideClickRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside({ target }: MouseEvent) {
        if (!ref.current?.contains(target as Node)) {
          setDropdownActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const changeDropdownActive = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else if (!dropdownActive) {
      setDropdownActive(true);
    }
  };

  return (
    <>
      <Box
        className="dropdown"
        ref={dropdownOutsideClickRef}
        width={{ base: "100%", m: "calc(50% - 16px)" }}
        m={{ base: "0", m: "0 8px" }}
        p={{ base: "0 8px 0 8px", m: "0" }}
        pos="relative"
        _notFirst={{
          marginTop: { base: "16px", m: "0" },
        }}
      >
        <Flex
          className="dropdown__head"
          onClick={changeDropdownActive}
          pos="relative"
          alignItems="center"
          h="56px"
          p="0 46px 0 21px"
          border={
            dropdownActive
              ? colorMode == "light"
                ? "2px solid #008fff"
                : "2px solid #0071ca"
              : "2px solid transparent"
          }
          bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
          borderRadius="16px"
          fontWeight="600"
          color={
            dropdownActive
              ? colorMode == "light"
                ? "#000"
                : "#fff"
              : "#808080"
          }
          fontSize="14px"
          transition="all .25s"
          cursor="pointer"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            bottom: "50%",
            right: "20px",
            transform: dropdownActive
              ? "translateY(-60%) rotate(180deg)"
              : "translateY(-50%) rotate(0)",
            width: "14px",
            height: "8px",
            backgroundImage: `url(/arrowdown.svg)`,
            filter: colorMode == "light" ? "none" : "invert(1)",
            transition:
              "transform .25s, -webkit-transform .25s, -moz-transform .25s",
          }}
        >
          <Text wordBreak="keep-all" noOfLines={1}>
            {dropdownValue}
          </Text>
        </Flex>

        <Box
          className="dropdown__body"
          pos="absolute"
          top="calc(100% + 8px)"
          left="0"
          zIndex="20"
          w="100%"
          // maxW="310px"
          h="max-content"
          p="24px"
          borderRadius="18px"
          border={
            colorMode == "light" ? "1px solid #e4e4e4" : "1px solid #333333"
          }
          bg={colorMode == "light" ? "#fff" : "#222222"}
          visibility={dropdownActive ? "visible" : "hidden"}
          opacity={dropdownActive ? "1" : "0"}
          transition="all .25s"
          boxShadow={
            colorMode == "light"
              ? "0 4px 16px rgba(227, 230, 236, 0.4)"
              : "0 4px 24px rgba(0, 0, 0, 0.15)"
          }
        >
          {data.map((item, index) => (
            <Link
              as={NextLink}
              href="#"
              //   href={item.url}
              display="block"
              className="dropdown__link"
              _notLast={{
                marginBottom: "16px",
              }}
              onClick={() => {
                setDropdownValue(item.title);
                changeDropdownActive();
                column?.setFilterValue(item.key);
                // function to do the actual filtering
              }}
              key={"key-download-" + index}
            >
              <Box
                data-group="dropdown-item"
                className="dropdown__item"
                display="block"
              >
                <Box
                  className="dropdown__title"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                  _hover={{
                    _before: {
                      transform: "translateX(5px)",
                    },
                  }}
                  _before={{
                    content: '""',
                    pos: "absolute",
                    top: "5px",
                    right: "8px",
                    width: "6px",
                    height: "10px",
                    backgroundImage: "url(/chevright.svg)",
                    filter: colorMode == "light" ? "none" : "invert(1)",
                    // userinput
                    visibility: "hidden",
                    transition:
                      "transform .25s, -webkit-transform .25s, -moz-transform .25s",
                  }}
                >
                  <Text
                    _groupHover={{
                      color: "#0071ca",
                    }}
                    fontSize="14px"
                    lineHeight="1.1875"
                    fontWeight="600"
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box
                  className="dropdown__subtitle"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                >
                  <Text
                    fontSize="13px"
                    lineHeight="1.38462"
                    fontWeight="600"
                    color="#808080"
                  ></Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

const TableFilterDate = ({
  placeholder,
  data,
  column,
}: {
  placeholder: string;
  data: Array<DropdownDateItem>;
  column?: Column<any, unknown>;
}) => {
  const { colorMode } = useColorMode();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(placeholder);
  const dropdownOutsideClickRef = useRef(null);
  useOutsideAlerter(dropdownOutsideClickRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside({ target }: MouseEvent) {
        if (!ref.current?.contains(target as Node)) {
          setDropdownActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const changeDropdownActive = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else if (!dropdownActive) {
      setDropdownActive(true);
    }
  };

  return (
    <>
      <Box
        className="dropdown"
        ref={dropdownOutsideClickRef}
        width={{ base: "100%", m: "calc(50% - 16px)" }}
        m={{ base: "0", m: "0 8px" }}
        p={{ base: "0 8px 0 8px", m: "0" }}
        pos="relative"
        _notFirst={{
          marginTop: { base: "16px", m: "0" },
        }}
      >
        <Flex
          className="dropdown__head"
          onClick={changeDropdownActive}
          pos="relative"
          alignItems="center"
          h="56px"
          p="0 46px 0 21px"
          border={
            dropdownActive
              ? colorMode == "light"
                ? "2px solid #008fff"
                : "2px solid #0071ca"
              : "2px solid transparent"
          }
          bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
          borderRadius="16px"
          fontWeight="600"
          color={
            dropdownActive
              ? colorMode == "light"
                ? "#000"
                : "#fff"
              : "#808080"
          }
          fontSize="14px"
          transition="all .25s"
          cursor="pointer"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            bottom: "50%",
            right: "20px",
            transform: dropdownActive
              ? "translateY(-60%) rotate(180deg)"
              : "translateY(-50%) rotate(0)",
            width: "14px",
            height: "8px",
            backgroundImage: `url(/arrowdown.svg)`,
            filter: colorMode == "light" ? "none" : "invert(1)",
            transition:
              "transform .25s, -webkit-transform .25s, -moz-transform .25s",
          }}
        >
          <Text wordBreak="keep-all" noOfLines={1}>
            {dropdownValue}
          </Text>
        </Flex>

        <Box
          className="dropdown__body"
          pos="absolute"
          top="calc(100% + 8px)"
          left="0"
          zIndex="20"
          w="100%"
          // maxW="310px"
          h="max-content"
          p="24px"
          borderRadius="18px"
          border={
            colorMode == "light" ? "1px solid #e4e4e4" : "1px solid #333333"
          }
          bg={colorMode == "light" ? "#fff" : "#222222"}
          visibility={dropdownActive ? "visible" : "hidden"}
          opacity={dropdownActive ? "1" : "0"}
          transition="all .25s"
          boxShadow={
            colorMode == "light"
              ? "0 4px 16px rgba(227, 230, 236, 0.4)"
              : "0 4px 24px rgba(0, 0, 0, 0.15)"
          }
        >
          {data.map((item, index) => (
            <Link
              as={NextLink}
              href="#"
              //   href={item.url}
              display="block"
              className="dropdown__link"
              _notLast={{
                marginBottom: "16px",
              }}
              onClick={() => {
                setDropdownValue(item.title);
                changeDropdownActive();
                column?.setFilterValue(item.date_start);
                // function to do the actual filtering
              }}
              key={"key-download-" + index}
            >
              <Box
                data-group="dropdown-item"
                className="dropdown__item"
                display="block"
              >
                <Box
                  className="dropdown__title"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                  _hover={{
                    _before: {
                      transform: "translateX(5px)",
                    },
                  }}
                  _before={{
                    content: '""',
                    pos: "absolute",
                    top: "5px",
                    right: "8px",
                    width: "6px",
                    height: "10px",
                    backgroundImage: "url(/chevright.svg)",
                    filter: colorMode == "light" ? "none" : "invert(1)",
                    // userinput
                    visibility: "hidden",
                    transition:
                      "transform .25s, -webkit-transform .25s, -moz-transform .25s",
                  }}
                >
                  <Text
                    _groupHover={{
                      color: "#0071ca",
                    }}
                    fontSize="14px"
                    lineHeight="1.1875"
                    fontWeight="600"
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box
                  className="dropdown__subtitle"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                >
                  <Text
                    fontSize="13px"
                    lineHeight="1.38462"
                    fontWeight="600"
                    color="#808080"
                  ></Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableSearch,
  TableContainer,
  TableMain,
  TableMore,
  TableHead,
  TableBody,
  TableHeadCell,
  TableBodyCell,
  TableCheckbox,
  TableFilter,
  TableFilterDate,
};
